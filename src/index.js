import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "@fontsource/inter";
import HomePage from "./Pages/home-page/homePage";
import LoginPage from "./Pages/login-page/loginPage";
import _404Page from "./Pages/404-page/404Page";
import SideBarComponenet from "./components/SideBar/SideBarComponenet/SideBarComponenet";
import {SettingsPage} from "./Pages/stores-page/SettingsPage";
import {CategoriesPage} from "./Pages/categories-page/CategoriesPage";
import {UserDetails} from "./components/Users/Components/UserDetails";
import UsersList from "./components/Users/UsersList";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                {/* Render HomePage and SideBarComponent */}
                {!window.location.pathname.includes("/login") &&
                    !window.location.pathname.includes("/404") && (
                        <div>
                            <div className="iq-top-navbar">
                                <HomePage/>
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
                        <Route path="users" element={<UsersList/>}/>
                        <Route path="users/add" element={<UserDetails operation={"add"}/>}/>
                        <Route path="users/edit" element={<UserDetails operation={"edit"}/>}/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="settings" element={<SettingsPage/>}/>
                        <Route path="categories" element={<CategoriesPage/>}/>
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
