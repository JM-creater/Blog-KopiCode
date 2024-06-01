import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7143',
});

export default apiClient;