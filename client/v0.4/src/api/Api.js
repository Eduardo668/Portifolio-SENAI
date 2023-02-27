import axios from "axios";

export const Api = axios.create({
    baseURL: "https://portifolio-senai-api.fly.dev/api"
})