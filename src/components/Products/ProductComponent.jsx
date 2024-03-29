import React, {useEffect, useState} from "react";
import {Supplier} from "../../Classes/Supplier";
import {Link} from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {SupplierTable} from "../codification/Suppliers/Components/SupplierTable";
import {ProductTable} from "./Components/ProductTable";
import {Product} from "../../Classes/Product";

export function ProductComponent() {
    const [data, setData] = useState([]);
    const [selectedObject, setSelectedObject] = useState(null);
    useEffect(() => {
        Product.fetchData(setData);
    }, []);

    return (
        <>
            <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                    <p></p>
                    <Link to="add" className="btn btn-primary add-list">
                        <AddCircleOutlineOutlinedIcon/>
                        Add Product
                    </Link>
                </div>

            </div>
            <div className="col-lg-12">
                <ProductTable
                    _data={data}
                    setData = {setData}
                    selectedData={selectedObject}
                />
            </div>
        </>
    );
}