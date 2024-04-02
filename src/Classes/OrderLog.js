import axios from "axios";
import {API_URL} from "./GlobalConstents";

const prefix = 'orders';
export const OrderLog = {
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
        const _data = await OrderLog.get();
        setData(_data);
    }
};

export class OrderLogModel {

    constructor() {
        this.id = "";
        this.client_id = "";
        this.orderDate = "";
        this.orders = [];
        this.totalPrice = "";
        this.orderStatus = "";
        this.shippingAddress = "";
        this.transactionDetails_id = "";
        this.createdAt = "";
        this.status = "";


    }
}