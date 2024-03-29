import React, {useState} from "react";
import AlertBar from "../../Utilities/AlertBar/AlertBar";
import {CompanyInfoDetails} from "./Componenets/CompanyInfoDetails";
import {AlertModel} from "../../../Models/AlertModel";
import {Button} from "react-bootstrap";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {Typography} from "@mui/material";

export function CompanyInfoComponent() {
    const [alert, setAlert] = useState(new AlertModel());
const manel = "manel";
    return (
        <>
            <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                    <Typography variant="h5" component="h2">
                        Update Company Information
                    </Typography>
                </div>

            </div>
            {alert.show &&
                <div className="alert-panel">
                    <AlertBar properties={alert}/>
                </div>
            }
            <CompanyInfoDetails
                alert={alert}
                setAlert={setAlert}/>

        </>
    )
}