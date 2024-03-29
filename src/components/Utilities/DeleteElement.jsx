import React, {useEffect, useState} from "react";
import {Operation} from "../../Classes/GlobalConstents";
import {Button, Modal} from "react-bootstrap";

export function DeleteElement({selectedObject, setData,setSelectedOperation, object, elementName}) {
    const [showDeleteModal, setShowDeleteModal] = useState(true);

    useEffect(() => {
        setShowDeleteModal(true);
    }, []);
    const handleDeleteData = async () => {
        await object.remove(selectedObject).then(() => {
            object.fetchData(setData);
                setSelectedOperation(Operation.Show);
            }
        ).catch(

        )
    };
    return (
        <div>
            <Modal show={showDeleteModal} onHide={() => setSelectedOperation(Operation.Show)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this {elementName}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteData}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}