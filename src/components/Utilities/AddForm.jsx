import "../Settings/Roles.css"
import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {DisplayError, DisplaySuccess, handleInputChange} from "../../Classes/utils";


export function AddForm({
                            object,
                            setSuccessAlert,
                            setErrorAlert,
                            refreshFunction,
                            formTitle,
                            operation,
                            variant,
                            model
                        }) {
    const [formData, setFormData] = useState(new model());
    const [showForm, setShowForm] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        Object.keys(model.FormElements).forEach(elementKey => {
            const element = model.FormElements[elementKey];
            if (element.required && !formData[element.name]) {
                newErrors[element.name] = `${element.formLable} is required`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const save = async () => {
        try {

            if (validateForm()) {
                setShowForm(false);
                await object.add(formData);
                DisplaySuccess(setSuccessAlert, setErrorAlert);
                refreshFunction();
                setFormData(new model());
            }
        } catch (error) {
            DisplayError(setSuccessAlert, setErrorAlert, error)
        }
    };

    return (
        <>
            <Button
                variant={variant}
                onClick={() => {
                    setShowForm(true);
                }}
            >
                {operation}
            </Button>
            <Modal show={showForm} onHide={() => setShowForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{formTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {Object.values(model.FormElements).map((element, index) => (
                        <Form.Group key={index} controlId={`formEdit${element.name}`}>
                            <Form.Label>{element.formLable}</Form.Label>
                            <Form.Control
                                type={element.type}
                                name={element.name}
                                value={formData[element.name]}
                                onChange={(event) => handleInputChange(event, setFormData, formData)}
                                required={true}
                            />
                            {errors[element.name] && (
                                <Form.Text className="text-danger">{errors[element.name]}</Form.Text>
                            )}
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
            </Modal>
        </>
    )
}