import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {UserModel} from "../../../Models/UserModel";
import "../users.css"
import {fetchRoles, fetchStores} from "./functions";
import {Genders, Operation, Results, UserStatus} from "../../../Classes/GlobalConstents";
import User from "../../../Classes/User";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AlertBar from "../../Utilities/AlertBar/AlertBar";
import {AlertModel} from "../../../Models/AlertModel";
import {DisplayError, DisplaySuccess} from "../../../Classes/utils";

export function UserDetails({operation, userData}) {
    const [formData, setFormData] = useState(new UserModel());
    const [stores, setStores] = useState([]);
    const [roles, setRoles] = useState([]);

    const [showPassword, setShowPassword] = useState(false);
    const [readOnly, setReadOnly] = useState(false);
    const [alert, setAlert] = useState(new AlertModel());

    useEffect(() => {
        fetchStores(setStores);
        fetchRoles(setRoles);
        setReadOnly(operation === Operation.Show);
        if (operation === Operation.Edit || operation === Operation.Show) {
            var todayDate = new Date(userData.birthDay);
            const formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}` : todayDate.getDate();
            const formatMonth = todayDate.getMonth() < 10 ? `0${todayDate.getMonth()}` : todayDate.getMonth();
            const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join('-');
            setFormData(
                {
                    id: userData.id,
                    birthDay: userData.birthDay,
                    address: userData.address,
                    cin: userData.cin,
                    createdAt: userData.createdAt,
                    email: userData.email,
                    enabled: userData.enabled,
                    gender_id: userData.gender.id,
                    name: userData.name,
                    password: userData.password,
                    phoneNumber: userData.phoneNumber,
                    status: userData.status,
                    surname: userData.surname,
                    updatedAt: userData.updatedAt,
                    username: userData.username,
                    store_id: userData.store.id,
                    role_id: userData.role.id
                });
        }
    }, []);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const save = async (event) => {
        event.preventDefault();
        try {
            if (operation === Operation.Edit) {
                await User.updateUser(formData.id, formData);
                DisplaySuccess(alert, setAlert);
            } else {
                await User.addUser(formData).then(() => {
                    console.log("success")
                }).catch((e) => {
                    console.log(e)
                })
                DisplaySuccess(alert, setAlert);
            }
        } catch (e) {
            DisplayError(alert, setAlert, e);
        }
    }
    return (
        <div className="card">

            {alert.show &&
                <div className="alert-panel">
                    <AlertBar properties={alert}/>
                </div>
                }

            {operation === "" && <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">Add User</h4>
                </div>
            </div>}
            <div className="card-body">
                <Form className="card-body-form" onSubmit={save}>
                    <p className="col-md-12 small-title">Personal information </p>
                    <Form.Group className="col-md-6" controlId={`formEditName`}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            required={true}
                            placeholder="Enter Name"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-6" controlId={`formEditSurname`}>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            type="text"
                            name="surname"
                            value={formData.surname}
                            required={true}
                            placeholder="Enter Surname"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-6" controlId="formEditGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                            name="gender_id"
                            value={formData.gender_id}
                            onChange={handleInputChange}
                            required
                            readOnly={readOnly}
                        >
                            <option value="">Select gender...</option>
                            {Genders.map((gender, index) => (
                                <option key={gender.id} value={gender.id}>
                                    {gender.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="col-md-6" controlId={`formEditBirthDay`}>
                        <Form.Label>Birth Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="birthDay"
                            value={formData.birthDay}
                            required={true}
                            placeholder="Enter Birth Date"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-12" controlId={`formEditCin`}>
                        <Form.Label>Social Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="cin"
                            value={formData.cin}
                            placeholder="Enter Social Number"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>
                    <p className="col-md-12 small-title second-row">Contact information </p>

                    <Form.Group className="col-md-6" controlId={`formEditPhoneNumber`}>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            required={true}
                            placeholder="Enter Phone Number"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-6" controlId={`formEditEmail`}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter Email"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-12" controlId={`formEditAddress`}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={formData.address}
                            placeholder="Enter Address"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <p className="col-md-12 small-title second-row">Credentials </p>

                    <Form.Group className="col-md-6" controlId="formEditStore">
                        <Form.Label>Store</Form.Label>
                        <Form.Select
                            name="store_id"
                            value={formData.store_id}
                            onChange={handleInputChange}
                            required
                            readOnly={readOnly}
                        >
                            <option value="">Select store...</option>
                            {stores.map((store) => (
                                <option key={store.id} value={store.id}>
                                    {store.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="col-md-6" controlId="formEditRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Select
                            name="role_id"
                            value={formData.role_id}
                            onChange={handleInputChange}
                            required
                            readOnly={readOnly}
                        >
                            <option key="-1" value="">Select role...</option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="col-md-12" controlId={`formEditUsername`}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={formData.username}
                            required={true}
                            placeholder="Enter Username"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>
                    <Form.Group className="col-md-6" controlId={`formEditPassword`}>
                        <Form.Label>Password</Form.Label>
                        <div className="password-toggle">
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                required={true}
                                placeholder="Enter Password"
                                onChange={handleInputChange}
                                readOnly={readOnly}
                            />
                            {operation !== Operation.Show &&
                                <span className="toggle-btn" onClick={togglePasswordVisibility}>
                                    {showPassword ? <RemoveRedEyeIcon/> : <VisibilityOffIcon/>}
                                </span>
                            }
                        </div>

                    </Form.Group>

                    <Form.Group className="col-md-6" controlId={`formEditPasswordConfirmation`}>
                        <Form.Label>Confirm Password</Form.Label>
                        <div className="password-toggle">
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                name="passwordConfirmation"
                                value={formData.passwordConfirmation}
                                required={true}
                                placeholder="Confirm Password"
                                onChange={handleInputChange}
                                readOnly={readOnly}
                            />
                            {operation !== Operation.Show &&
                                <span className="toggle-btn" onClick={togglePasswordVisibility}>
                                    {showPassword ? <RemoveRedEyeIcon/> : <VisibilityOffIcon/>}
                                </span>
                            }
                        </div>
                    </Form.Group>

                    <Form.Group className="col-md-6" controlId="formEditStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            name="enabled"
                            value={formData.enabled}
                            onChange={handleInputChange}
                            required
                            readOnly={readOnly}
                        >
                            {UserStatus.map((status) => (
                                <option key={status} value={status === "Active"}>
                                    {status}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <button type="submit" className="btn btn-primary col-md-12 btn-save-user">Save
                    </button>
                </Form>
            </div>
        </div>
    )
}