import axios from "axios";
import {API_URL} from "./GlobalConstents";


export const Category = {
    get: async () => {
        try {
            const response = await axios.get(`${API_URL}/categories`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    add: async (roleData) => {
        try {
            const response = await axios.post(`${API_URL}/categories`, roleData, {
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
            const response = await axios.put(`${API_URL}/categories`, roleData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    remove: async (categoryId) => {
        try {
            const response = await axios.delete(`${API_URL}/categories/${categoryId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    fetchData: async (setData) => {
        const _data = await Category.get();
        setData(_data);
    }
};

export class CategoryModel {
    static  FormElements = {
        name: {
            formLabel: "Name",
            name: "name",
            type: "text",
            required: true,
            placeholder:" Enter Name"
        },
        description: {
            formLabel: "Description",
            name: "description",
            type: "text",
            required: false,
            placeholder:" Enter description"
        },
        code: {
            formLabel: "Code",
            name: "code",
            type: "text",
            required: true,
            placeholder:" Enter code"
        },
    };

    static TableColumns={
        name:{
            header:"Name",
            elementValueName:"name"
        },
        description:{
            header:"Description",
            elementValueName:"description"
        },
        code:{
            header:"Code",
            elementValueName:"code"
        },
    }

    constructor() {
        this.id = "";
        this.name = "";
        this.description="";
        this.code = "";
        this.status = "";
    }
}
