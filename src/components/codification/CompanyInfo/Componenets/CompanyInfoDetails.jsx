import React, {useEffect, useState} from "react";
import {DisplayError, DisplaySuccess} from "../../../../Classes/utils";
import {Form} from "react-bootstrap";
import {CompanyInfo, CompanyInfoModel} from "../../../../Classes/CompanyInfo";

export function CompanyInfoDetails({ alert, setAlert}) {
    const [formData, setFormData] = useState(new CompanyInfoModel());

    useEffect(() => {
        const _data = CompanyInfo.fetchData(setFormData);
        setFormData(_data);
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
            await CompanyInfo.update(formData).then(() => {
                DisplaySuccess(alert, setAlert);
            }).catch((e) => {
                console.log(e) ;
                DisplayError(alert, setAlert, e);
            })
            CompanyInfo.fetchData(setFormData);
            setFormData(new CompanyInfoModel());

        } catch (e) {
            DisplayError(alert, setAlert, e);
        }
    }

    return (

                <div className="card">
                    {/*{alert && alert.show &&*/}
                    {/*    <div className="alert-panel">*/}
                    {/*        <AlertBar properties={alert}/>*/}
                    {/*    </div>*/}
                    {/*}*/}
                    <div className="card-body">
                        <Form className="card-body-form" onSubmit={save}>

                            <Form.Group className="col-md-12" controlId={`formEditName`}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    required={true}
                                    placeholder="Enter Company Name"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="col-md-12" controlId={`formEditName`}>
                                <Form.Label>Principal Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="principalAddress"
                                    value={formData.principalAddress}
                                    required={true}
                                    placeholder="Enter Principal Address"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="col-md-12" controlId={`formEditName`}>
                                <Form.Label>Secondary Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="secondaryAddress"
                                    value={formData.secondaryAddress}
                                    required={false}
                                    placeholder="Enter Secondary Address"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="col-md-12" controlId={`formEditName`}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    required={true}
                                    placeholder="Enter Email"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="col-md-6" controlId={`formEditName`}>
                                <Form.Label>Principal Phone Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="principalPhoneNumber"
                                    value={formData.principalPhoneNumber}
                                    required={true}
                                    placeholder="Enter Principal Phone Number"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="col-md-6" controlId={`formEditName`}>
                                <Form.Label>Secondary Phone Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="secondaryPhoneNumber"
                                    value={formData.secondaryPhoneNumber}
                                    required={false}
                                    placeholder="Enter Secondary Phone Number"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="col-md-6" controlId={`formEditName`}>
                                <Form.Label>Fax Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="faxNumber"
                                    value={formData.faxNumber}
                                    required={false}
                                    placeholder="Enter Fax Number"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="col-md-6" controlId={`formEditName`}>
                                <Form.Label>Tax Identification Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="taxIdentificationNumber"
                                    value={formData.taxIdentificationNumber}
                                    required={true}
                                    placeholder="Enter Tax Identification Number"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>


                            <button type="submit" className="btn btn-primary col-md-12 btn-save-user">Save
                            </button>
                        </Form>
                    </div>
                </div>
    )
}