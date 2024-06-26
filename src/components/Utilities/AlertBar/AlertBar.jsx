import React from "react";
import Alert from "react-bootstrap/Alert";
import {Results} from "../../../Classes/GlobalConstents";

function AlertBar({properties}) {
    const show = properties?.show || false;
    return (
        <Alert
            show={show}
            Alert
            variant={properties?.type === Results.FAILURE ? "danger" : "success"}
            dismissible
        >
          {properties?.type === Results.SUCCESS
          ? "Operation has been executed  successfully."
          : "An error has occurred. Please check the logs"}
        </Alert>
    );
}

export default AlertBar;
