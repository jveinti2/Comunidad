import { API_HOST } from "../utils/constants";

export async function getNoticiasApi() {
  try {
    const url = `${API_HOST}`;
    const response = await fetch(url);
    const result = await response.json();
    return result.articles;
  } catch (error) {
    throw error;
  }
}
