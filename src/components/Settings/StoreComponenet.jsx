import React, {useState, useEffect} from "react";
import {Accordion} from "react-bootstrap";
import AlertBar from "../Utilities/AlertBar/AlertBar";
import Store from "../../Classes/Store";
import {AddForm} from "../Utilities/AddForm";
import {StoreModel} from "../../Models/StoreModel";
import {EditForm} from "../Utilities/EditForm";
import {DeleteForm} from "../Utilities/DeleteForm";
import {DisplayTable} from "../Utilities/DisplayTable";


function StoreComponenet() {
    const [stores, setStores] = useState([]);
    const [selectedObject, setSelectedObject] = useState(null);
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const _stores = await Store.getAll();
        setStores(_stores);
    };
    return (
        <>
            <Accordion defaultActiveKey="null">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Stores</Accordion.Header>
                    <Accordion.Body>
                        <div className="control-btns">
                            <AddForm
                                object={Store}
                                setSuccessAlert={setSuccessAlert}
                                setErrorAlert={setErrorAlert}
                                refreshFunction={fetchData}
                                formTitle={"Add new store"}
                                operation={"Add"}
                                variant={"primary"}
                                model={StoreModel}
                            />
                            <EditForm
                                object={Store}
                                selectedObject={selectedObject}
                                setSuccessAlert={setSuccessAlert}
                                setErrorAlert={setErrorAlert}
                                refreshFunction={fetchData}
                                formTitle={"Edit store"}
                                operation={"Edit"}
                                variant={"warning"}
                                model={StoreModel}/>
                            <DeleteForm
                                object={Store}
                                selectedObject={selectedObject}
                                setSuccessAlert={setSuccessAlert}
                                setErrorAlert={setErrorAlert}
                                refreshFunction={fetchData}
                                deletedObjectName={"store"}
                            />
                        </div>
                        <div className="container-stores">
                            <DisplayTable
                                data={stores}
                                setSelectedObject={setSelectedObject}
                                model={StoreModel}
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
    );
}

export default StoreComponenet;
