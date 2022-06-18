import axios from "axios";

//TODO: change baseURL
export const api = axios.create({baseURL: process.env.REACT_APP_API_URL});
