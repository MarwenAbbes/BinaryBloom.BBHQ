import React, {useEffect, useState} from "react";
import {Supplier, SupplierModel} from "../../../Classes/Supplier";
import {AlertModel} from "../../../Models/AlertModel";
import {Genders, Operation} from "../../../Classes/GlobalConstents";
import {DisplayError, DisplaySuccess} from "../../../Classes/utils";
import {Product, ProductModel} from "../../../Classes/Product";
import AlertBar from "../../Utilities/AlertBar/AlertBar";
import {Form} from "react-bootstrap";
import {Category, CategoryModel} from "../../../Classes/Category";

export function ProductDetails({operation, userData,setData}) {
    const [formData, setFormData] = useState(new ProductModel());
    const [categoryData, setCategoryData] = useState([]);
    const [readOnly, setReadOnly] = useState(false);
    const [alert, setAlert] = useState(new AlertModel());

    useEffect(() => {
        Category.fetchData(setCategoryData);
        setReadOnly(operation === Operation.Show);
        if (operation === Operation.Edit || operation === Operation.Show) {
            setFormData(userData);
        }
    }, []);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const save = async (event) => {
        event.preventDefault();
        try {
            if (operation === Operation.Edit) {
                await Product.update(formData);
                Product.fetchData(setData);
                DisplaySuccess(alert, setAlert);
            } else {
                await Product.add(formData).then(() => {
                    console.log("success")
                    DisplaySuccess(alert, setAlert);
                }).catch((e) => {
                    console.log(e)
                    DisplayError(alert, setAlert, e);
                })
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
                    <h4 className="card-title">Add Product</h4>
                </div>
            </div>}
            <div className="card-body">
                <Form className="card-body-form" onSubmit={save}>

                    <Form.Group className="col-md-3" controlId={`formEditSurname`}>
                        <Form.Label>Reference</Form.Label>
                        <Form.Control
                            type="text"
                            name="reference"
                            value={formData.reference}
                            required={true}
                            placeholder="Enter reference"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>
                    <Form.Group className="col-md-9" controlId={`formEditName`}>
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

                    <Form.Group className="col-md-3" controlId="formEditGender">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            name="category_id"
                            value={formData.category_id}
                            onChange={handleInputChange}
                            required
                            readOnly={readOnly}
                        >
                            <option value="">Select category...</option>
                            {categoryData.map((category, index) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="col-md-9" controlId={`formEditCin`}>
                        <Form.Label>Bar Code</Form.Label>
                        <Form.Control
                            type="text"
                            name="barCode"
                            value={formData.barCode}
                            placeholder="Enter barCode"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-3" controlId={`formEditPhoneNumber`}>
                        <Form.Label>Cost</Form.Label>
                        <Form.Control
                            type="text"
                            name="cost"
                            value={formData.cost}
                            required={true}
                            placeholder="Enter cost"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-3" controlId={`formEditEmail`}>
                        <Form.Label>price</Form.Label>
                        <Form.Control
                            type="text"
                            name="price"
                            value={formData.price}
                            placeholder="Enter price"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-3" controlId={`formEditAddress`}>
                        <Form.Label>quantity</Form.Label>
                        <Form.Control
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            placeholder="Enter quantity"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-12" controlId={`formEditSurname`}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={formData.description}
                            required={true}
                            placeholder="Enter description"
                            onChange={handleInputChange}
                            readOnly={readOnly}
                        />
                    </Form.Group>


                    <button type="submit" className="btn btn-primary col-md-12 btn-save-user">Save
                    </button>
                </Form>
            </div>
        </div>
    )
}