import axios from "axios";

const api = axios.create({
    baseURL: "https://odontoease.com.br:3000/"
})

export default api