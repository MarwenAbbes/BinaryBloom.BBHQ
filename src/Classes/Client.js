import axios from "axios";
import {API_URL} from "./GlobalConstents";

const prefix = 'clients';
export const Client = {
    get: async () => {
        try {
            const response = await axios.get(`${API_URL}/${prefix}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    add: async (roleData) => {
        try {
            const response = await axios.post(`${API_URL}/${prefix}`, roleData, {
                headers: {
                    "Access-Control-Allow-Origin": "*", // CORS header
                    "Content-Type": "application/json", // Content-Type header
                },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    update: async (roleData) => {
        try {
            const response = await axios.put(`${API_URL}/${prefix}`, roleData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    remove: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/${prefix}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    fetchData: async (setData) => {
        const _data = await Client.get();
        setData(_data);
    }
};

export class ClientModel {

    static  FormElements = {
        name: {
            formLabel: "Name",
            name: "name",
            type: "text",
            required: true,
            placeholder:" Enter Name",
            className:"col-md-6"
        },
        surname: {
            formLabel: "Surname",
            name: "surname",
            type: "text",
            required: true,
            placeholder:" Enter Surname",
            className:"col-md-6"
        },
        address: {
            formLabel: "Address",
            name: "address",
            type: "text",
            required: true,
            placeholder:" Enter address",
            className:"col-md-12"
        },
        phoneNumber: {
            formLabel: "Phone Number",
            name: "phoneNumber",
            type: "text",
            required: true,
            placeholder:" Enter Phone Number",
            className:"col-md-6"
        },
        alternativePhoneNumber: {
            formLabel: "Alternative Phone Number",
            name: "alternativePhoneNumber",
            type: "text",
            required: false,
            placeholder:" Enter Alternative Phone Number",
            className:"col-md-6"
        },
        faxNumber: {
            formLabel: "Fax Number",
            name: "faxNumber",
            type: "text",
            required: false,
            placeholder:" Enter Fax Number",
            className:"col-md-6"
        },
        email: {
            formLabel: "Email",
            name: "email",
            type: "email",
            required: true,
            placeholder:" Enter Email",
            className:"col-md-6"
        },
        cin: {
            formLabel: "CIN",
            name: "cin",
            type: "text",
            required: false,
            placeholder:" Enter CIN",
            className:"col-md-6"
        },
        taxRegistrationNumber: {
            formLabel: "Tax Registration Number",
            name: "taxRegistrationNumber",
            type: "text",
            required: true,
            placeholder:" Enter Tax Registration Number",
            className:"col-md-6"
        },
        city: {
            formLabel: "City",
            name: "city",
            type: "text",
            required: true,
            placeholder:" Enter City",
            className:"col-md-3"
        },
        state: {
            formLabel: "State",
            name: "state",
            type: "text",
            required: true,
            placeholder:" Enter State",
            className:"col-md-3"
        },
        postalCode: {
            formLabel: "Postal Code",
            name: "postalCode",
            type: "text",
            required: true,
            placeholder:" Enter Postal Code",
            className:"col-md-3"
        },
        companyName: {
            formLabel: "Company Name",
            name: "companyName",
            type: "text",
            required: true,
            placeholder:" Enter Company Name",
            className:"col-md-12"
        },
    };

    static TableColumns = {
        name: {
            header: "Name",
            elementValueName: "name"
        },
        surname: {
            header: "Surname",
            elementValueName: "surname"
        },
        address: {
            header: "Address",
            elementValueName: "address"
        },
        phoneNumber: {
            header: "Phone Number",
            elementValueName: "phoneNumber"
        },
        alternativePhoneNumber: {
            header: "Alternative Phone Number",
            elementValueName: "alternativePhoneNumber"
        },
        faxNumber: {
            header: "Fax Number",
            elementValueName: "faxNumber"
        },
        email: {
            header: "Email",
            elementValueName: "email"
        },
        cin: {
            header: "CIN",
            elementValueName: "cin"
        },
        taxRegistrationNumber: {
            header: "Tax Registration Number",
            elementValueName: "taxRegistrationNumber"
        },
        // city: {
        //     header: "City",
        //     elementValueName: "city"
        // },
        // state: {
        //     header: "State",
        //     elementValueName: "state"
        // },
        // postalCode: {
        //     header: "Postal Code",
        //     elementValueName: "postalCode"
        // },
        companyName: {
            header: "Company Name",
            elementValueName: "companyName"
        },


    }

    constructor() {
        this.id = "";
        this.name = "";
        this.surname = "";
        this.address = "";
        this.email = "";
        this.phoneNumber = "";
        this.alternativePhoneNumber = "";
        this.faxNumber = "";
        this.cin = "";
        this.taxRegistrationNumber = "";
        this.city = "";
        this.state = "";
        this.postalCode = "";
        this.companyName = "";
        this.status = "";
        this.createdAt = "";
        this.updatedAt = "";

    }
}


