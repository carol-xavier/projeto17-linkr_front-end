import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

//TODO: change baseURL
export const api = axios.create({baseURL: "http://localhost:5000",});