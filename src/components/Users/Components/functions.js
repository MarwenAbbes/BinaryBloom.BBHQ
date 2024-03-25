import Role from "../../../Classes/Role";
import Store from "../../../Classes/Store";
import User from "../../../Classes/User";

async function fetchUsers(setUsers) {
  try {
    const response = await User.getUsers(); // Replace the URL with your API endpoint
    setUsers(response);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

async function fetchStores(setStores) {
  try {
    const response = await Store.getAll(); // Replace the URL with your API endpoint
    setStores(response);
  } catch (error) {
    console.error("Error fetching stores:", error);
  }
}

async function fetchRoles(setRoles) {
  try {
    const response = await Role.getAll(); // Replace the URL with your API endpoint
    setRoles(response);
  } catch (error) {
    console.error("Error fetching roles:", error);
  }
}

export { fetchUsers, fetchStores, fetchRoles };
