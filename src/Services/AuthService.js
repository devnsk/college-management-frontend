import axios from "axios";


const BASEURL = 'http://localhost:8080';
export const register = async (userData) => {
    try {
        const response = await axios.post(`${BASEURL}/api/user/create`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${BASEURL}/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};