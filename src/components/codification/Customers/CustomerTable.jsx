import React, {useState} from "react";
import {Client, ClientModel} from "../../../Classes/Client";
import {Operation} from "../../../Classes/GlobalConstents";
import {DeleteElement} from "../../Utilities/DeleteElement";
import {Button, Modal, Table} from "react-bootstrap";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import {SupplierDetails} from "../Suppliers/Components/SupplierDetails";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {CustomerDetails} from "./CustomerDetails";

export function CustomerTable({_data,setData}) {
    const [selectedRow, setSelectedRow] = useState(new ClientModel());
    const [selectedOperation, setSelectedOperation] = useState(""); // S = Show , D = Delete, E = Edit
    const [showModal, setShowModal] = useState(false);
    const [showPrint, setShowPrint] = useState(false);

    const handleRowClick = (element) => {
        setSelectedRow(element);
    };

    const handleControls = (operation) => {
        setSelectedOperation(operation);
        setShowModal(operation === Operation.Edit|| operation === Operation.Show);
    }

    const print = () => {
        setShowPrint(true)
    }

    return (
        <div>
            {selectedOperation === Operation.Delete &&
                <DeleteElement selectedObject={selectedRow.id} setData={setData} setSelectedOperation={setSelectedOperation} object={Client} elementName={"client"}/>}

            <Modal className="edit-user-modal" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <div className="user-form-title">
                        <Modal.Title>Edit Customer</Modal.Title>
                        <Button onClick={print}>
                            <LocalPrintshopIcon/>
                            Print
                        </Button>
                    </div>

                </Modal.Header>
                <Modal.Body>
                    <CustomerDetails operation={selectedOperation} userData={selectedRow} setData={setData}/>
                </Modal.Body>
            </Modal>
            <Table striped bordered hover>
                <thead>
                <tr>
                    {Object.values(ClientModel.TableColumns).map((element, index) => {
                        return (<th>{element.header}</th>)
                    })}
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {_data.map((user) => (
                    <tr key={user.id}
                        className={selectedRow.id === user.id ? "table-primary" : ""}
                        onClick={() => handleRowClick(user)}>
                        {Object.values(ClientModel.TableColumns).map((column, index) => {
                            return (<td>{user[column.elementValueName]}</td>)
                        })}
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
                    </tr>
                ))}
                </tbody>
            </Table>

        </div>
    )
}