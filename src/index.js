import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/inter";
import HomePage from "./Pages/home-page/homePage";
import LoginPage from "./Pages/login-page/loginPage";
import _404Page from "./Pages/404-page/404Page";
import GetUsersPage from "./Pages/users-page/getUsersPage/getUsersPage";
import SideBarComponenet from "./components/SideBar/SideBarComponenet/SideBarComponenet";
import StoresPage from "./Pages/stores-page/StoresPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Render HomePage and SideBarComponent */}
        {!window.location.pathname.includes("/login") &&
          !window.location.pathname.includes("/404") && (
            <div>
              <HomePage />
              <div className="first-part">
                <SideBarComponenet />
              </div>
            </div>
          )}
        {/* Render Routes */}
        <div className="second-part">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="users" element={<GetUsersPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="settings" element={<StoresPage />} />
            <Route path="*" element={<_404Page />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
