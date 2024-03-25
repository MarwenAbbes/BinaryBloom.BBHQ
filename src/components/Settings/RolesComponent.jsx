import {Accordion} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import AlertBar from "../Utilities/AlertBar/AlertBar";
import Role from "../../Classes/Role";
import {AddForm} from "../Utilities/AddForm";
import {EditForm} from "../Utilities/EditForm";
import {DeleteForm} from "../Utilities/DeleteForm";
import {DisplayTable} from "../Utilities/DisplayTable";
import {RoleModel} from "../../Models/RoleModel";

export function RolesComponent() {
    const [roles, setRoles] = useState([]);
    const [selectedObject, setSelectedObject] = useState(null);
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const _roles = await Role.getAll();
        setRoles(_roles);
    };
    return (
        <>

            <Accordion defaultActiveKey="null">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Roles</Accordion.Header>
                    <Accordion.Body>
                        <div className="control-btns">
                            <AddForm
                                object={Role}
                                setSuccessAlert={setSuccessAlert}
                                setErrorAlert={setErrorAlert}
                                refreshFunction={fetchData}
                                formTitle={"Add new role"}
                                operation={"Add"}
                                variant={"primary"}
                                model={RoleModel}
                            />
                            <EditForm
                                object={Role}
                                selectedObject={selectedObject}
                                setSuccessAlert={setSuccessAlert}
                                setErrorAlert={setErrorAlert}
                                refreshFunction={fetchData}
                                formTitle={"Edit role"}
                                operation={"Edit"}
                                variant={"warning"}
                                model={RoleModel}/>

                            <DeleteForm
                                object={Role}
                                selectedObject={selectedObject}
                                setSuccessAlert={setSuccessAlert}
                                setErrorAlert={setErrorAlert}
                                refreshFunction={fetchData}
                                deletedObjectName={"role"}/>
                        </div>
                        <div className="container-roles">
                            <DisplayTable
                                data={roles}
                                setSelectedObject={setSelectedObject}
                                model={RoleModel}
                            />
                        </div>
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