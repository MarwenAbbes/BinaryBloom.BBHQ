//CONST
import {Results} from "./GlobalConstents";

export const roleVariants = {
    SUPERADMIN: "danger",
    ADMIN: "primary",
    USER: "secondary",
};

export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    return date.toLocaleDateString("en-GB", options);
}

export function DisplaySuccess(alert, setAlert) {
    setAlert(alert => ({
        ...alert,
        type: Results.SUCCESS,
        show: true,
    }))
    window.setTimeout(() => {
        setAlert(alert => ({
            ...alert,
            show: false,
        }))
    }, 3000);
}

export function DisplayError(alert, setAlert, error) {
    console.log(error);
    setAlert(alert => ({
        ...alert,
        type: Results.FAILURE,
        show: true,
    }))
    window.setTimeout(() => {
        setAlert(alert => ({
            ...alert,
            show: false,
        }))
    }, 3000);
}

export function handleInputChange(e, setFormData, formData) {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
}

export function findElementById(array, id) {
    return array.find(item => item.id === id);
}

