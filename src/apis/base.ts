import axios from "axios";

const BASE_PATH = "http://localhost:8080";
export const API = axios.create({ baseURL: BASE_PATH });
