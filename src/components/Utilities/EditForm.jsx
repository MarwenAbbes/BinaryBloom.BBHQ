import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {DisplayError, DisplaySuccess, handleInputChange} from "../../Classes/utils";

export function EditForm({
                             object,
                             selectedObject,
                             setSuccessAlert,
                             setErrorAlert,
                             refreshFunction,
                             formTitle,
                             operation,
                             variant,
                             model
                         }) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(new model());

    const save = async () => {
        try {
            setShowForm(false);
            await object.update(formData);
            DisplaySuccess(setSuccessAlert, setErrorAlert);
            refreshFunction();
            setFormData(new model())
        } catch (error) {
            DisplayError(setSuccessAlert, setErrorAlert, error);
        }
    };

    useEffect(() => {
        console.log(selectedObject);
    }, []);

    return (
        <>
            <Button variant={variant}
                    onClick={() => {
                        selectedObject && setShowForm(true);
                    }}>{operation}</Button>
            <Modal show={showForm} onHide={() => setShowForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{formTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {selectedObject && Object.values(model.FormElements).map((element, index) => (
                    <Form.Group key={index} controlId={`formEdit${element.name}`}>
                        <Form.Label>{element.formLable}</Form.Label>
                        <Form.Control
                            type={element.type}
                            name={element.name}
                            value={selectedObject[element.name]}
                            onChange={(event) => handleInputChange(event, setFormData, formData)}
                        />
                    </Form.Group>
                ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowForm(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={save}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal></>
    )
}