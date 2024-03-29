import React, {useEffect, useState} from "react";
import {Supplier, SupplierModel} from "../../../Classes/Supplier";
import {Product, ProductModel} from "../../../Classes/Product";
import {Operation} from "../../../Classes/GlobalConstents";
import {DeleteElement} from "../../Utilities/DeleteElement";
import {Button, Modal, Table} from "react-bootstrap";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import {SupplierDetails} from "../../codification/Suppliers/Components/SupplierDetails";
import {PrintUser} from "../../Users/Components/PrintUser";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {ProductDetails} from "./ProductDetails";
import {Category} from "../../../Classes/Category";
import {findElementById} from "../../../Classes/utils";

export function ProductTable({_data, setData}) {
    const [selectedRow, setSelectedRow] = useState(new ProductModel());
    const [selectedOperation, setSelectedOperation] = useState(""); // S = Show , D = Delete, E = Edit
    const [showModal, setShowModal] = useState(false);
    const [showPrint, setShowPrint] = useState(false);
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        Category.fetchData(setCategoryData).then(r =>  console.log(categoryData));

    }, []);

    const handleRowClick = (element) => {
        setSelectedRow(element);
        console.log(categoryData);
    };

    const handleControls = (operation) => {
        setSelectedOperation(operation);
        setShowModal(operation === Operation.Edit || operation === Operation.Show);
    }

    const print = () => {
        setShowPrint(true)
    }

    return (<div>
        {selectedOperation === Operation.Delete && <DeleteElement selectedObject={selectedRow.id} setData={setData}
                                                                  setSelectedOperation={setSelectedOperation}
                                                                  object={Product} elementName={"product"}/>}

        <Modal className="edit-user-modal" show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <div className="user-form-title">
                    <Modal.Title>Edit Product</Modal.Title>
                    <Button onClick={print}>
                        <LocalPrintshopIcon/>
                        Print
                    </Button>
                </div>

            </Modal.Header>
            <Modal.Body>
                <ProductDetails operation={selectedOperation} userData={selectedRow} setData={setData}/>
            </Modal.Body>
        </Modal>

        {showPrint && <PrintUser user={selectedRow}/>}

        <Table striped bordered hover>
            <thead>
            <tr>
                {Object.values(ProductModel.TableColumns).map((element, index) => {
                    return (<th>{element.header}</th>)
                })}
                <th></th>
            </tr>
            </thead>
            <tbody>
            {_data.map((user) => (<tr key={user.id}
                                      className={selectedRow.id === user.id ? "table-primary" : ""}
                                      onClick={() => handleRowClick(user)}>
                <td>{user.name}</td>
                <td>{user.description}</td>
                <td>{user.reference}</td>
                <td>{user.barCode}</td>
                <td> {findElementById(categoryData,user.id).name}</td>
                <td>{user.cost}</td>
                <td>{user.price}</td>
                <td>{user.quantity}</td>

                <td>
                    <div className="user-table-controls-buttons">
                        <RemoveRedEyeIcon className="user-table-controls-btn bg-warning"
                                          onClick={() => handleControls(Operation.Show)}/>
                        <EditIcon className="user-table-controls-btn bg-primary"
                                  onClick={() => handleControls(Operation.Edit)}/>
                        <DeleteForeverIcon className="user-table-controls-btn bg-danger"
                                           onClick={() => handleControls(Operation.Delete)}/>
                    </div>
                </td>
            </tr>))}
            </tbody>
        </Table>

    </div>);
}