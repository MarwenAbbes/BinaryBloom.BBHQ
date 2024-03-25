import React from "react";
import "./SettingsPage.css";
import StoreComponenet from "../../components/Settings/StoreComponenet";
import {RolesComponent} from "../../components/Settings/RolesComponent";
import {CompanyInfoComponent} from "../../components/Settings/CompanyInfoComponent";



export function SettingsPage() {
    return (
        <>
            <StoreComponenet/>
            <RolesComponent/>
            <CompanyInfoComponent/>
        </>
    );
}

