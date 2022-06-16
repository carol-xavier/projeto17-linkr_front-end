import axios from "axios";
console.log(process.env.REACT_APP_API_URL);
export const api = axios.create({baseURL:'http://localhost:4002'});