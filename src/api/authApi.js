import { API_HOST } from "../utils/constants";
import axios from "axios";

export const authUser = async (formData) => {
  try {
    const url = `${API_HOST}auth/login/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(formData),
      url,
    };
    const response = await axios(params);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
