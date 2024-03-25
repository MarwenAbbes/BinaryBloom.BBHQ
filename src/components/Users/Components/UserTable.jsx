import React, {useState} from "react";
import {Table, Badge, Button, Modal} from "react-bootstrap";
import {formatDate, roleVariants} from "../../../Classes/utils";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import {DeleteUser} from "./DeleteUser";
import {UserModel} from "../../../Models/UserModel";
import {UserDetails} from "./UserDetails";
import {PrintUser} from "./PrintUser";
import {Operation} from "../../../Classes/GlobalConstents";


function UserTable({users}) {
    const [selectedRow, setSelectedRow] = useState(new UserModel());
    const [selectedOperation, setSelectedOperation] = useState(""); // S = Show , D = Delete, E = Edit
    const [showModal, setShowModal] = useState(false);
    const [showPrint, setShowPrint] = useState(false);


    const handleRowClick = (user) => {
        setSelectedRow(user);
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
                <DeleteUser selectedUser={selectedRow.id}/>}

            <Modal className="edit-user-modal" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <div className="user-form-title">
                        <Modal.Title>Edit user</Modal.Title>
                        <Button onClick={print}>
                            <LocalPrintshopIcon/>
                            Print
                        </Button>
                    </div>

                </Modal.Header>
                <Modal.Body>
                    <UserDetails operation={selectedOperation} userData={selectedRow}/>
                </Modal.Body>
            </Modal>

            {showPrint && <PrintUser user={selectedRow}/> }

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>BirthDay</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>CIN</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Store</th>
                    <th>Role</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}
                        className={selectedRow.id === user.id ? "table-primary" : ""}
                        onClick={() => handleRowClick(user)}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{formatDate(user.birthDay)}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.cin}</td>
                        <td>{user.address}</td>
                        <td>
                            {user.enabled ? (
                                <Badge bg="success">Enabled</Badge>
                            ) : (
                                <Badge bg="danger">Disabled</Badge>
                            )}
                        </td>
                        <td>{user.store ? user.store.name : ""}</td>
                        <td>
                            {user.role ? (
                                <Badge bg={roleVariants[user.role.name]}>
                                    {user.role.name}
                                </Badge>
                            ) : (
                                ""
                            )}
                        </td>
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

export default UserTable;
