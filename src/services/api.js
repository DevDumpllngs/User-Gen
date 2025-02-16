import axios from "axios";

export const fetchUsers = async (count = 5) => {
  try {
    const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
    return response.data.results;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
};
