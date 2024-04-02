import React, {useEffect, useState} from "react";
import {Supplier} from "../../../Classes/Supplier";
import {Link} from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {CustomerTable} from "./CustomerTable";
import {Client} from "../../../Classes/Client";

export function CustomerComponent() {
    const [data, setData] = useState([]);
    const [selectedObject, setSelectedObject] = useState(null);
    useEffect(() => {
        Client.fetchData(setData);
    }, []);

    return (
        <>
            <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                    <p></p>
                    <Link to="add" className="btn btn-primary add-list">
                        <AddCircleOutlineOutlinedIcon/>
                        Add Customer
                    </Link>
                </div>

            </div>
            <div className="col-lg-12">
                <CustomerTable
                    _data={data}
                    setData = {setData}
                    selectedData={selectedObject}
                />
            </div>
        </>
    );
}