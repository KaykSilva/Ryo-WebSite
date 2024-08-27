import axios from "axios";

const api = axios.create({
    baseURL: "https://odontoease.com.br:3001"
})

export default api