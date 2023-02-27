import axios from "axios";

export const Api = axios.create({
    baseURL: "https://portifoliosenai-api.onrender.com/api"
})