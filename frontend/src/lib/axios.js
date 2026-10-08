
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

if (!import.meta.env.DEV && !API_URL) {
  throw new Error("VITE_API_URL is missing");
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:5001/api"
    : `${API_URL.replace(/\/$/, "")}/api`,
  withCredentials: true,
});
