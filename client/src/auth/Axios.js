import axios from 'axios';
import { refreshToken, logoutUser } from "./authService/authService.jsx";

const Axios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URI,
    headers: {
        'Content-Type': 'application/json',
    }
});

Axios.interceptors.request.use(req => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        req.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return req;
})

Axios.interceptors.response.use(res => res,
    async (err) => {
        const originalConfig = err.config;
        if((err.response?.status === 401) || (err.response?.status === 403)) {
            originalConfig._retry = true;
            try{
                const newToken = await refreshToken();
                localStorage.setItem('accessToken', newToken.data.refreshToken);
                originalConfig.headers['Authorization'] = `Bearer ${newToken.data.refreshToken}`;
                return Axios(originalConfig);
            } catch(err) {
                console.log(err);
                logoutUser();
                return Promise.reject(err);
            }
        } else {
            return Promise.reject(err);
        }
    }
)

export default Axios;