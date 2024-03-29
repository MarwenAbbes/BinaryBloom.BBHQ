import React, {useState} from "react";
import {Operation} from "../../../../Classes/GlobalConstents";
import {Button, Modal, Table} from "react-bootstrap";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import {PrintUser} from "../../../Users/Components/PrintUser";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {SupplierDetails} from "./SupplierDetails";
import {DeleteElement} from "../../../Utilities/DeleteElement";
import {Supplier, SupplierModel} from "../../../../Classes/Supplier";

export function SupplierTable({_data,setData}) {
    const [selectedRow, setSelectedRow] = useState(new SupplierModel());
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
                <DeleteElement selectedObject={selectedRow.id} setData={setData} setSelectedOperation={setSelectedOperation} object={Supplier} elementName={"supplier"}/>}

            <Modal className="edit-user-modal" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <div className="user-form-title">
                        <Modal.Title>Edit Supplier</Modal.Title>
                        <Button onClick={print}>
                            <LocalPrintshopIcon/>
                            Print
                        </Button>
                    </div>

                </Modal.Header>
                <Modal.Body>
                    <SupplierDetails operation={selectedOperation} userData={selectedRow} setData={setData}/>
                </Modal.Body>
            </Modal>

            {showPrint && <PrintUser user={selectedRow}/> }

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>CIN</th>
                    <th>Address</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {_data.map((user) => (
                    <tr key={user.id}
                        className={selectedRow.id === user.id ? "table-primary" : ""}
                        onClick={() => handleRowClick(user)}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.cin}</td>
                        <td>{user.address}</td>
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
    );
}