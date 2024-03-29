import React, {useEffect, useState} from "react";
import {Operation} from "../../Classes/GlobalConstents";
import {DisplayError, DisplaySuccess} from "../../Classes/utils";
import {Button, Form, Modal} from "react-bootstrap";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import AlertBar from "./AlertBar/AlertBar";


export function ElementDetails({
                                   operation,
                                   data,
                                   setData,
                                   setShowModal,
                                   showModal,
                                   alert,
                                   setAlert,
                                   model,
                                   object,
                                   elementName
                               }) {
    const [formData, setFormData] = useState(new model());
    const [readOnly, setReadOnly] = useState(false);

    useEffect(() => {
        setReadOnly(operation === Operation.Show);
        if (operation !== Operation.Add) {
            setFormData(data);
        }
    }, [data, operation]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const save = async (event) => {
        event.preventDefault();
        try {
            if (operation === Operation.Edit) {
                await object.update(formData);
                DisplaySuccess(alert, setAlert);
            } else if (operation === Operation.Add) {
                await object.add(formData).then(() => {
                    DisplaySuccess(alert, setAlert);

                }).catch((e) => {
                    console.log(e)
                    DisplayError(alert, setAlert, e);
                })
            }
            object.fetchData(setData);
            setFormData(new model());
            setShowModal(false);

        } catch (e) {
            DisplayError(alert, setAlert, e);
        }
    }

    return (
        <Modal className="edit-user-modal" show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <div className="user-form-title">
                    <Modal.Title>
                        {operation === Operation.Show ? "Show " : operation === Operation.Add ? "Add " : "Edit "}
                        {elementName}</Modal.Title>
                    <Button>
                        <LocalPrintshopIcon/>
                        Print
                    </Button>
                </div>

            </Modal.Header>
            <Modal.Body>
                <div className="card">
                    {alert.show &&
                        <div className="alert-panel">
                            <AlertBar properties={alert}/>
                        </div>
                    }
                    {operation === "" && <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Add {elementName}</h4>
                        </div>
                    </div>}
                    <div className="card-body">
                        <Form className="card-body-form" onSubmit={save}>
                            {Object.values(model.FormElements).map((element, index) => {
                               return (<Form.Group key={index} className="col-md-12" controlId={`formEdit${element.name}`}>
                                    <Form.Label>{element.formLabel}</Form.Label>
                                    <Form.Control
                                        type={element.type}
                                        name={element.name}
                                        value={formData[element.name]}
                                        required={element.required}
                                        placeholder={element.placeHolder}
                                        onChange={handleInputChange}
                                        readOnly={readOnly}
                                    />
                                </Form.Group>)
                            })};

                            <button type="submit" className="btn btn-primary col-md-12 btn-save-user">Save
                            </button>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>


    )
}