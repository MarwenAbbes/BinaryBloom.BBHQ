import axios from "axios";
import {API_URL} from "./GlobalConstents";
import async from "async";

const prefix = 'products';
export const Product = {
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
        const _data = await Product.get();
        setData(_data);
    },
    search: async (query)=>{
        const SearchElement = {
            query:query
        };
        try {
            const response = await axios.put(`${API_URL}/${prefix}/search`, SearchElement);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export class ProductModel {

    static TableColumns={
        name:{
            header:"Name",
            elementValueName:"name"
        },
        description:{
            header:"Description",
            elementValueName:"description"
        },
        reference:{
            header:"Reference",
            elementValueName:"reference"
        },
        barCode:{
            header:"Bar Code",
            elementValueName:"barCode"
        },
        category_id:{
            header:"Category",
            elementValueName:"category_id"
        },
        cost:{
            header:"Cost",
            elementValueName:"cost"
        },
        price:{
            header:"Price",
            elementValueName:"price"
        },
        quantity:{
            header:"Quantity",
            elementValueName:"quantity"
        },
    }

    constructor() {
        this.id = "";
        this.name = "";
        this.description = "";
        this.reference = "";
        this.barCode = "";
        this.category_id = "";
        this.cost = "";
        this.price = "";
        this.quantity = "";
        this.status = "";
        this.createdAt = "";
        this.updatedAt = "";
    }
}