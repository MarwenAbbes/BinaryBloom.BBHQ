import "./Homepage.css"
import {DisplayCart} from "./DisplayCart";
import {Product} from "../../Classes/Product";
import {useEffect, useState} from "react";
import {Supplier} from "../../Classes/Supplier";

export function HomePage() {
    const [productCount, setProductCount] = useState(null);
    const [clientCount, setClientCount] = useState(null);
    const [supplierCount, setSupplierCount] = useState(null);
    const [invoiceCount, setInvoiceCount] = useState(null);

    useEffect(() => {
        getProductCount();
        getClientCount();
        getSupplierCount();
        getInvoiceCount();
    }, []);

    const getProductCount = () => {
        Product.get().then(products => {
            setProductCount(products.length);
        }).catch(error => {
            console.error("Error fetching product count:", error);
        });
    };
    const getClientCount = () => {
        Product.get().then(products => {
            setClientCount(products.length);
        }).catch(error => {
            console.error("Error fetching product count:", error);
        });
    };
    const getSupplierCount = () => {
        Supplier.get().then(products => {
            setSupplierCount(products.length);
        }).catch(error => {
            console.error("Error fetching product count:", error);
        });
    };
    const getInvoiceCount = () => {
        Product.get().then(products => {
            setInvoiceCount(products.length);
        }).catch(error => {
            console.error("Error fetching product count:", error);
        });
    };

    return (
        <div className="col-lg-12">
            <div className="row">
                <DisplayCart name={"Products"} number={productCount} backgroundColor={"#32BDEA"}/>
                <DisplayCart name={"Clients"} number={clientCount} backgroundColor={"#E08DB4"}/>
                <DisplayCart name={"Suppliers"} number={supplierCount} backgroundColor={"#78C091"}/>
                <DisplayCart name={"Invoices"} number={invoiceCount} backgroundColor={"#C0C0C0"}/>

            </div>
        </div>
    )
}
