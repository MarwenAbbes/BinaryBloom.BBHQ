import React, {useEffect, useState} from "react";
import {Operation} from "../../Classes/GlobalConstents";
import {AlertModel} from "../../Models/AlertModel";
import {Button} from "react-bootstrap";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AlertBar from "../Utilities/AlertBar/AlertBar";
import {Role, RoleModel} from "../../Classes/Role";
import {ElementTable} from "../Utilities/ElementTable";

export function RoleComponent() {
    const [data, setData] = useState([]);
    const [selectedObject, setSelectedObject] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [operation, setOperation] = useState(Operation.Add);
    const [alert, setAlert] = useState(new AlertModel());

    useEffect(() => {
        Role.fetchData(setData);
    }, []);



    return (
        <>
            <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                    <p></p>
                    <Button  className="btn btn-primary add-list"
                             onClick={()=>{
                                 setShowModal(true);
                             }}>
                        <AddCircleOutlineOutlinedIcon/>
                        Add role
                    </Button>
                </div>

            </div>
            {alert.show &&
                <div className="alert-panel">
                    <AlertBar properties={alert}/>
                </div>
            }
            <div className="col-lg-12">
                <ElementTable
                    _data={data}
                    setData = {setData}
                    selectedData={selectedObject}
                    setSelectedData={setSelectedObject}
                    setShowModal={setShowModal}
                    showModal={showModal}
                    operation={operation}
                    alert={alert}
                    setAlert={setAlert}
                    object={Role}
                    model={RoleModel}
                    elementName={"role"}
                />
            </div>


        </>
    )
}