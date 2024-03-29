import axios from "axios";
import {API_URL} from "./GlobalConstents";


export const Supplier = {
    get: async () => {
        try {
            const response = await axios.get(`${API_URL}/suppliers`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    add: async (roleData) => {
        try {
            const response = await axios.post(`${API_URL}/suppliers`, roleData, {
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
            const response = await axios.put(`${API_URL}/suppliers`, roleData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    remove: async (supplierId) => {
        try {
            const response = await axios.delete(`${API_URL}/suppliers/${supplierId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    fetchData: async (setData) => {
        const _data = await Supplier.get();
        setData(_data);
    }
};

export class SupplierModel {

    static TableColumns={
        name:{
            header:"Name",
            elementValueName:"name"
        },
        surname:{
            header:"Surname",
            elementValueName:"surname"
        },
        email:{
            header:"Email",
            elementValueName:"email"
        },
        phoneNumber:{
            header:"Phone Number",
            elementValueName:"phoneNumber"
        },
        cin:{
            header:"CIN",
            elementValueName:"cin"
        },
        address:{
            header:"Address",
            elementValueName:"address"
        },
    }
    constructor() {
        this.id = "";
        this.name = "";
        this.surname="";
        this.address = "";
        this.phoneNumber = "";
        this.email="";
        this.cin = "";
        this.status = "";
    }
}


















