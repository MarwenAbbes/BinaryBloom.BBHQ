import React, {useEffect, useState} from "react";
import {AlertModel} from "../../../../Models/AlertModel";
import {Operation} from "../../../../Classes/GlobalConstents";
import {DisplayError, DisplaySuccess} from "../../../../Classes/utils";
import {Supplier, SupplierModel} from "../../../../Classes/Supplier";
import AlertBar from "../../../Utilities/AlertBar/AlertBar";
import {Form} from "react-bootstrap";

export function SupplierDetails({operation, userData,setData}) {
    const [formData, setFormData] = useState(new SupplierModel());
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
                await Supplier.update(formData);
                Supplier.fetchData(setData);
                DisplaySuccess(alert, setAlert);
            } else {
                await Supplier.add(formData).then(() => {
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
                    <h4 className="card-title">Add Supplier</h4>
                </div>
            </div>}
            <div className="card-body">
                <Form className="card-body-form" onSubmit={save}>
                    <p className="col-md-12 small-title">Personal information </p>
                    <Form.Group className="col-md-6" controlId={`formEditName`}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            required={true}
                            placeholder="Enter Name"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-6" controlId={`formEditSurname`}>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            type="text"
                            name="surname"
                            value={formData.surname}
                            required={true}
                            placeholder="Enter Surname"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-12" controlId={`formEditCin`}>
                        <Form.Label>Social Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="cin"
                            value={formData.cin}
                            placeholder="Enter Social Number"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>
                    <p className="col-md-12 small-title second-row">Contact information </p>

                    <Form.Group className="col-md-6" controlId={`formEditPhoneNumber`}>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            required={true}
                            placeholder="Enter Phone Number"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-6" controlId={`formEditEmail`}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter Email"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-12" controlId={`formEditAddress`}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={formData.address}
                            placeholder="Enter Address"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <button type="submit" className="btn btn-primary col-md-12 btn-save-user">Save
                    </button>
                </Form>
            </div>
        </div>
    )
}