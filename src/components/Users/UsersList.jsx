import React, {useState, useEffect} from "react";
import "./UsersList.css";
import {fetchUsers} from "./Components/functions";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {Link} from "react-router-dom";
import UserTable from "./Components/UserTable";

function UsersList() {
    const [users, setUsers] = useState([]);

    const [selectedUser, setSelectedUser] = useState(null);
    useEffect(() => {
        fetchUsers(setUsers);
    }, []);

    return (
        <>
            <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                    <p></p>
                    <Link to="add" className="btn btn-primary add-list">
                        <AddCircleOutlineOutlinedIcon/>
                        Add user
                    </Link>
                </div>

            </div>
            <div className="col-lg-12">
                <UserTable
                    users={users}
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                />
            </div>
        </>
    );
}

export default UsersList;
