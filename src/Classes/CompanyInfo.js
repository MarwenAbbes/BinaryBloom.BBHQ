import axios from "axios";
import {API_URL} from "./GlobalConstents";

export const CompanyInfo= {

    get: async () => {
        try {
            const response = await axios.get(`${API_URL}/companyInfo`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    add: async (companyInfo) => {
        try {
            const response = await axios.post(`${API_URL}/companyInfo`, companyInfo, {
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
    update: async (companyInfo) => {
        try {
            const response = await axios.put(`${API_URL}/companyInfo`, companyInfo);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    fetchData: async (setData) => {
        const _data = await CompanyInfo.get();
        setData(_data);
    }
}

export class CompanyInfoModel{
    static  FormElements = {
        name: {
            formLabel: "Name",
            name: "name",
            type: "text",
        },
        principalAddress: {
            formLabel: "Principal Address",
            name: "principalAddress",
            type: "text",
        },
        secondaryAddress: {
            formLabel: "Secondary Address",
            name: "secondaryAddress",
            type: "text",
        },
        email: {
            formLabel: "Email",
            name: "email",
            type: "email",
        },
        principalPhoneNumber: {
            formLabel: "Principal Phone Number",
            name: "principalPhoneNumber",
            type: "tel",
        },
        secondaryPhoneNumber: {
            formLabel: "Secondary Phone Number",
            name: "secondaryPhoneNumber",
            type: "tel",
        },
        faxNumber: {
            formLabel: "Fax Number",
            name: "faxNumber",
            type: "tel",
        },
        taxIdentificationNumber: {
            formLabel: "Tax Identification Number",
            name: "taxIdentificationNumber",
            type: "text",
        },

    };
    constructor() {
        this.id="1";
        this.name = "";
        this.principalAddress = "";
        this.secondaryAddress = "";
        this.email = "";
        this.principalPhoneNumber = "";
        this.secondaryPhoneNumber = "";
        this.faxNumber = "";
        this.taxIdentificationNumber = "";
    }
}