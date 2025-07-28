import {BASE_URL} from "@/constants/api";
import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})
