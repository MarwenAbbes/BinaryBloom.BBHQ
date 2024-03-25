import axios from "axios";
import {API_URL} from "./GlobalConstents";

const Store = {
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
      const response = await axios.put(`${API_URL}/stores`, storeData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default Store;
