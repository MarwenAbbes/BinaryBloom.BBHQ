import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "@fontsource/inter";
import NavBar from "./components/navbar/NavBar";
import LoginPage from "./Pages/login-page/loginPage";
import _404Page from "./Pages/404-page/404Page";
import SideBarComponenet from "./components/SideBar/SideBarComponenet/SideBarComponenet";
import {UserDetails} from "./components/Users/Components/UserDetails";
import UsersList from "./components/Users/UsersList";
import {StoreComponent} from "./components/codification/StoreComponent";
import {Operation} from "./Classes/GlobalConstents";
import {RoleComponent} from "./components/codification/RoleComponent";
import {CompanyInfoComponent} from "./components/codification/CompanyInfo/CompanyInfoComponent";
import {CategoryComponent} from "./components/codification/CategoryComponent";
import {SupplierComponent} from "./components/codification/Suppliers/SupplierComponent";
import {SupplierDetails} from "./components/codification/Suppliers/Components/SupplierDetails";
import {ProductComponent} from "./components/Products/ProductComponent";
import {ProductDetails} from "./components/Products/Components/ProductDetails";
import {HomePage} from "./components/HomePage/HomePage";
import {CustomerComponent} from "./components/codification/Customers/CustomerComponent";
import {CustomerDetails} from "./components/codification/Customers/CustomerDetails";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                {/* Render HomePage and SideBarComponent */}
                {!window.location.pathname.includes("/login") &&
                    !window.location.pathname.includes("/404") && (
                        <div>
                            <div className="iq-top-navbar">
                                <NavBar/>
                            </div>

                            <div className="iq-sidebar">
                                <SideBarComponenet/>
                            </div>
                        </div>
                    )}
                {/* Render Routes */}
                <div className="content-page">
                    <div className="container-fluid">
                        <div className="row">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>

                        <Route path="products" element={<ProductComponent/>}/>
                        <Route path="products/add" element={<ProductDetails operation={"add"}/>}/>
                        {/*-----------------------Peoples-------------------------------------------*/}
                        <Route path="customers" element={<CustomerComponent/>}/>
                        <Route path="customers/add" element={<CustomerDetails operation={"add"}/>}/>
                        <Route path="users" element={<UsersList/>}/>
                        <Route path="users/add" element={<UserDetails operation={"add"}/>}/>
                        <Route path="suppliers" element={<SupplierComponent/>}/>
                        <Route path="suppliers/add" element={<SupplierDetails operation={"add"}/>}/>
                        {/*----------------------------------------------------------------------------*/}
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="categories" element={<CategoryComponent/>}/>
                        <Route path="settings/stores" element={<StoreComponent/>}/>
                        <Route path="settings/stores/add" element={<StoreComponent operation={Operation.Add}/>}/>
                        <Route path="settings/roles" element={<RoleComponent/>}/>
                        <Route path="settings/companyInfo" element={<CompanyInfoComponent/>}/>

                        <Route path="*" element={<_404Page/>}/>
                    </Routes>
                        </div>
                </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
