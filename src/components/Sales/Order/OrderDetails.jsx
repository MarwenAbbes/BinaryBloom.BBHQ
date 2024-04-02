import {Button, Form, Modal} from "react-bootstrap";
import {Operation} from "../../../Classes/GlobalConstents";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import AlertBar from "../../Utilities/AlertBar/AlertBar";
import React, {useEffect, useState} from "react";
import {DisplayError, DisplaySuccess} from "../../../Classes/utils";
import {OrderLog, OrderLogModel} from "../../../Classes/OrderLog";
import {Client, ClientModel} from "../../../Classes/Client";
import {Product} from "../../../Classes/Product";
import "../Sales.css"

export function OrderDetails({operation, alert, setAlert, setData, showModal, setShowModal, elementName}) {
    const [formData, setFormData] = useState(new OrderLogModel());
    const [readOnly, setReadOnly] = useState(false);
    const [clientData, setClientData] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState("");

    useEffect(() => {
        Client.fetchData(setClientData);
    }, []);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const search = (e) => {
        const value = e.target.value.trim();

        setSuggestions("");

        Product.search(value).then(result => {
            setSuggestions(result);
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
        console.log(value);
    };

    const handleSuggestionClick = (product) => {
        setSearchTerm(product);
        setSuggestions("");
    };


    const save = async (event) => {
        event.preventDefault();
        try {
            if (operation === Operation.Edit) {
                await OrderLog.update(formData);
                DisplaySuccess(alert, setAlert);
            } else if (operation === Operation.Add) {
                await OrderLog.add(formData).then(() => {
                    DisplaySuccess(alert, setAlert);

                }).catch((e) => {
                    console.log(e)
                    DisplayError(alert, setAlert, e);
                })
            }

            setData && OrderLog.fetchData(setData);
            setFormData(new OrderLogModel());
            setShowModal(false);

        } catch (e) {
            DisplayError(alert, setAlert, e);
        }
    }

    return (
        <Modal className="edit-user-modal" show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <div className="user-form-title">
                    <Modal.Title>
                        {operation === Operation.Show ? "Show " : operation === Operation.Add ? "New " : "Edit "}
                        {elementName}</Modal.Title>
                    <Button>
                        <LocalPrintshopIcon/>
                        Print
                    </Button>
                </div>

            </Modal.Header>
            <Modal.Body>
                <div className="card">
                    {alert.show &&
                        <div className="alert-panel">
                            <AlertBar properties={alert}/>
                        </div>
                    }
                    {operation === "" && <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Add order</h4>
                        </div>
                    </div>}
                    <div className="card-body">
                        <Form className="card-body-form" onSubmit={save}>
                            <div className="col-md-12 col-search">
                                <div  style={{display: "flex", alignItems: "flex-end"}}>
                                    <Form.Group className="col-md-10 col-sub-search" controlId={`formEditSurname`}>
                                        <Form.Label>Search product</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="totalPrice"
                                            value={searchTerm.name}
                                            required={true}
                                            placeholder="Enter reference"
                                            onChange={search}
                                            readOnly={readOnly}
                                        />
                                    </Form.Group>
                                    <Button className="col-md-2" style={{maxHeight: 40, float: "right"}}
                                            onClick={search}> Add</Button>
                                </div>
                                {suggestions.length >0 && (<div className="dropdown-content">
                                    {suggestions.map((product, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            onClick={() => handleSuggestionClick(product)}
                                        >
                                            {product.name}
                                        </a>
                                    ))}
                                </div>)}

                            </div>


                            <Form.Group className="col-md-3" controlId={`formEditSurname`}>
                                <Form.Label>Reference</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="orderDate"
                                    value={formData.orderDate}
                                    required={true}
                                    placeholder="Enter Order date"
                                    onChange={handleInputChange}
                                    readOnly={readOnly}
                                />
                            </Form.Group>

                            <Form.Group className="col-md-6" controlId="formEditGender">
                                <Form.Label>Client</Form.Label>
                                <Form.Select
                                    name="client_id"
                                    value={formData.client_id}
                                    onChange={handleInputChange}
                                    required
                                    readOnly={readOnly}
                                >
                                    <option value="">Select client...</option>
                                    {clientData.map((category, index) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name + " " + category.surname}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>


                            <button type="submit" className="btn btn-primary col-md-12 btn-save-user">Save
                            </button>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}