import axios from "axios";
import {API_URL} from "./GlobalConstents";

export const Store = {
    getAll: async () => {
        try {
            const response = await axios.get(`${API_URL}/stores`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    add: async (storeData) => {
        try {
            const response = await axios.post(`${API_URL}/stores`, storeData, {
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
    remove: async (storeId) => {
        try {
            const response = await axios.delete(`${API_URL}/stores/${storeId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    update: async (storeData) => {
        try {
            const response = await axios.put(`${API_URL}/stores`, storeData,
                {
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
    fetchData: async (setData) => {
        const _data = await Store.getAll();
        setData(_data);
    }
};

export class StoreModel {
    static  FormElements = {
        name: {
            formLabel: "Name",
            name: "name",
            type: "text",
            required: true,
            placeholder:" Enter Name"
        },
        address: {
            formLabel: "Address",
            name: "address",
            type: "text",
            required: true,
            placeholder:" Enter address"
        }
    };

    static TableColumns={
        name:{
            header:"Name",
            elementValueName:"name"
        },
        address:{
            header:"Address",
            elementValueName:"address"
        },
    }

    constructor() {
        this.id = "";
        this.name = "";
        this.address = "";
        this.status = "A";
    }
}
