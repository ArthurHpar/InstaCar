import axios from 'axios';

const api = axios.create({
    baseURL: "https://db-de-carro.vercel.app/"
})

export default api;