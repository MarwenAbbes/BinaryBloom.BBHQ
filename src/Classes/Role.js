import axios from "axios";
import {API_URL} from "./GlobalConstents";


export const Role = {
  getAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/roles`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  add: async (roleData) => {
    try {
      const response = await axios.post(`${API_URL}/roles`, roleData, {
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
      const response = await axios.put(`${API_URL}/roles`, roleData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  remove: async (roleId) => {
    try {
      const response = await axios.delete(`${API_URL}/roles/${roleId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  fetchData: async (setData) => {
    const _data = await Role.getAll();
    setData(_data);
  }
};

export class RoleModel {
  static  FormElements = {
    name: {
      formLabel: "Name",
      name: "name",
      type: "text",
    }
  };

  constructor() {
    this.id = "";
    this.name = "";
  }
}


