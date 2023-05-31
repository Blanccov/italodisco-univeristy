import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('BEARER_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    config.headers.Accept = 'application/json'
    config.headers["Content-Type"] = 'application/json'
    return config
})

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const {response} = error

    if (response.status === 401) {
        localStorage.removeItem('BEARER_TOKEN')
    }

    throw error // TODO: handle other statuses
})

export default axiosClient;
