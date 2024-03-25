import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {DisplayError, DisplaySuccess} from "../../Classes/utils";

export function DeleteForm({
                               object,
                               setSuccessAlert,
                               setErrorAlert,
                               refreshFunction,
                               deletedObjectName,
                               selectedObject,
                           }) {
    const [showModal, setShowModal] = useState(false);
    const save = async () => {
        try {
            setShowModal(false);
            await object.remove(selectedObject.id);
            await refreshFunction();
            DisplaySuccess(setSuccessAlert, setErrorAlert);
        } catch (error) {
            DisplayError(setSuccessAlert, setErrorAlert, error);
        }
    };
    return (
        <><Button
            variant="danger"
            onClick={() => {
               selectedObject && setShowModal(true);
            }}
        >
            Remove
        </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this {deletedObjectName} ? </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={save}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal></>
    )
}