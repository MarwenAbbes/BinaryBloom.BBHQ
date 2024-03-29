import React, {useEffect, useState} from "react";
import {Supplier} from "../../../Classes/Supplier";
import {Link} from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {SupplierTable} from "./Components/SupplierTable";

export function SupplierComponent() {
    const [data, setData] = useState([]);
    const [selectedObject, setSelectedObject] = useState(null);
    useEffect(() => {
      Supplier.fetchData(setData);
    }, []);

    return (
        <>
            <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                    <p></p>
                    <Link to="add" className="btn btn-primary add-list">
                        <AddCircleOutlineOutlinedIcon/>
                        Add Supplier
                    </Link>
                </div>

            </div>
            <div className="col-lg-12">
                <SupplierTable
                    _data={data}
                    setData = {setData}
                    selectedData={selectedObject}
                />
            </div>
        </>
    );
}