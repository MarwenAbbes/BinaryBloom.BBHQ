import {Accordion, Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';
import {CompanyInfoModel} from "../../Models/CompanyInfoModel";
import {CompanyInfo} from "../../Classes/CompanyInfo";
import {DisplayError, DisplaySuccess} from "../../Classes/utils";
import AlertBar from "../Utilities/AlertBar/AlertBar";

export function CompanyInfoComponent() {
    const [companyInfo, setCompanyInfo] = useState(new CompanyInfoModel());
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    useEffect(() => {
        try {
            fetchData();
        } catch (e) {

        }
    }, []);

    const fetchData = async () => {
        const _companyInfo = await CompanyInfo.get();
        setCompanyInfo(_companyInfo);
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCompanyInfo({...companyInfo, [name]: value});
    };
    const save = async () => {
        try {
            setCompanyInfo(prevState => ({ ...prevState, id: "1" }));
            console.log(companyInfo);
            await CompanyInfo.update(companyInfo);
            DisplaySuccess(setSuccessAlert, setErrorAlert);
        } catch (e) {
            DisplayError(setSuccessAlert, setErrorAlert, e);
        }
    };
    return (
        <>
            <Accordion defaultActiveKey="null" className="accordion">
                <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header className="accordion-header">Company Information</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            {Object.keys(CompanyInfoModel.FormElements).map((key, index) => {
                                const element = CompanyInfoModel.FormElements[key];
                                return (
                                    <Form.Group key={index} className="mb-3"
                                                controlId={`exampleForm.ControlInput${index}`}>
                                        <Form.Label>{element.formLabel}</Form.Label>
                                        <Form.Control
                                            type={element.type}
                                            placeholder={element.formLabel}
                                            name={element.name}
                                            value={companyInfo[element.name]} // Set value from state
                                            onChange={handleInputChange} // Update state on change
                                        />
                                    </Form.Group>
                                );
                            })}
                            <Button variant="primary" onClick={save}>Save Changes</Button>
                        </Form>
                        <div className="alert-container">
                            <AlertBar
                                type={
                                    successAlert && !errorAlert
                                        ? "SUCCESS"
                                        : errorAlert && !successAlert
                                            ? "ERROR"
                                            : null
                                }
                                message={
                                    successAlert && !errorAlert
                                        ? "Operation has been executed  successfully."
                                        : "An error has occurred. Please check the logs"
                                }
                                show={successAlert || errorAlert}
                            />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}