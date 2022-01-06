import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/utils";

export const Api = axios.create({
    baseURL: 'https://reqres.in/api/',
});

