import React, {useEffect, useState} from "react";
import {Store, StoreModel} from "../../Classes/Store";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {Button} from "react-bootstrap";
import {Operation} from "../../Classes/GlobalConstents";
import {AlertModel} from "../../Models/AlertModel";
import AlertBar from "../Utilities/AlertBar/AlertBar";
import {ElementTable} from "../Utilities/ElementTable";

export function StoreComponent() {
    const [data, setData] = useState([]);
    const [selectedObject, setSelectedObject] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [operation, setOperation] = useState(Operation.Add);
    const [alert, setAlert] = useState(new AlertModel());
    useEffect(() => {
        Store.fetchData(setData);
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
                        Add store
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
                    object={Store}
                    model={StoreModel}
                    elementName={"store"}
                />
            </div>


        </>
    )
}