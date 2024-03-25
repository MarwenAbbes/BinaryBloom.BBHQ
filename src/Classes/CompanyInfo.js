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
}