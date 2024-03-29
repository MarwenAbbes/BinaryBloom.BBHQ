import axios from "axios";
import {API_URL} from "./GlobalConstents";

export const User = {
  auth: async (username, password) => {
    try {
      const response = await axios.post(
        `${API_URL}/auth`,
        { username, password },
        {
          headers: {
            "Access-Control-Allow-Origin": "*", // CORS header
            "Content-Type": "application/json", // Content-Type header
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  checkLoggedIn: async () => {
    // Implement logic to check if the user is logged in
    // You might want to store authentication status in local storage or state
    // and check it here.
  },

  getUsers: async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const response = await axios.put(`${API_URL}/users`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUser: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/Users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addUser: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users`, userData, {
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
  removeUser: async (userId) => {
    try {
      const response = await axios.delete(`${API_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logoutUser: async () => {
    try {
      const response = await axios.post(`${API_URL}/Auth/logout`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  fetchData: async (setData) => {
    const _data = await User.getUsers();
    setData(_data);
  }
};

export class UserModel {
  static  FormElements = {
    name: {
      formLabel: "Name",
      name: "name",
      type: "text",
      required: true,
      className: "col-md-6"
    },
    surname: {
      formLabel: "Surname",
      name: "surname",
      type: "text",
      required: true,
      className: "col-md-6"
    },
    birthDay: {
      formLabel: "Birth Date",
      name: "birthDay",
      type: "date",
      required: true,
      className: "col-md-6"
    },
    cin: {
      formLabel: "Social Number",
      name: "cin",
      type: "number",
      required: true,
      className: "col-md-6"
    },
    phoneNumber: {
      formLabel: "Phone Number",
      name: "phoneNumber",
      type: "text",
      required: true,
      className: "col-md-6"
    },
    address: {
      formLabel: "Address",
      name: "address",
      type: "text",
      required: true,
      className: "col-md-12"
    },
    email: {
      formLabel: "Email",
      name: "email",
      type: "text",
      required: true,
      className: "col-md-12"
    },

  };

  constructor() {
    this.id = "";
    this.username = "";
    this.password = "";
    this.passwordConfirmation = "";
    this.name = "";
    this.surname = "";
    this.birthDay = "";
    this.email = "";
    this.phoneNumber = "";
    this.cin = "";
    this.address = "";
    this.enabled = true; // Assuming default is enabled
    this.store_id = "";
    this.role_id = "";
    this.gender_id ="";
  }
}
