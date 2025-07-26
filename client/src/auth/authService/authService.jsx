import axios from "axios";

export const refreshToken = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/refresh_token`, {
        refreshToken: localStorage.getItem('token'),
    });
    return res.data.token;
}


export const logoutUser = () => {
    localStorage.clear();
    window.location.href = '/login';
};


