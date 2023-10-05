import { API_HOST } from "../utils/constants";
import axios from "axios";

export const authUser = async (email, password) => {
  try {
    const url = `${API_HOST}auth/login/`;
    const response = await axios.post(url, { email, password });
    return response.data;
  } catch (error) {
    return null;
  }
};
