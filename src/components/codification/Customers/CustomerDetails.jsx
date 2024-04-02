import React, {useEffect, useState} from "react";
import {AlertModel} from "../../../Models/AlertModel";
import {Operation} from "../../../Classes/GlobalConstents";
import {DisplayError, DisplaySuccess} from "../../../Classes/utils";
import {Client, ClientModel} from "../../../Classes/Client";
import AlertBar from "../../Utilities/AlertBar/AlertBar";
import {Form} from "react-bootstrap";

export function CustomerDetails({operation, userData, setData}) {
    const [formData, setFormData] = useState(new ClientModel());
    const [readOnly, setReadOnly] = useState(false);
    const [alert, setAlert] = useState(new AlertModel());

    useEffect(() => {
        setReadOnly(operation === Operation.Show);
        if (operation === Operation.Edit || operation === Operation.Show) {
            setFormData(userData);
        }
    }, []);

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
                await Client.update(formData);
                Client.fetchData(setData);
                DisplaySuccess(alert, setAlert);
            } else {
                await Client.add(formData).then(() => {
                    console.log("success")
                    DisplaySuccess(alert, setAlert);
                }).catch((e) => {
                    console.log(e)
                    DisplayError(alert, setAlert, e);
                })
            }
        } catch (e) {
            DisplayError(alert, setAlert, e);
        }
    }
    return (
        <div className="card">
            {alert.show &&
                <div className="alert-panel">
                    <AlertBar properties={alert}/>
                </div>
            }
            {operation === "" && <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">Add Customer</h4>
                </div>
            </div>}
            <div className="card-body">
                <Form className="card-body-form" onSubmit={save}>

                    {Object.values(ClientModel.FormElements).map((element, index) => {
                        return (<Form.Group key={index} className={element.className} controlId={`formEdit${element.name}`}>
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
    )
}