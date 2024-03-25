import axios from "axios";
import {API_URL} from "./GlobalConstents";

const User = {
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
};

export default User;
