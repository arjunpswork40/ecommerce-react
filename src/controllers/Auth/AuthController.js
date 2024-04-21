import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:4000/api';


const AuthController = {
    signuppost: async (data) => {
        try {
        // Send loginFormData to your backend API
        const response = await axios.post(`${API_BASE_URL}/user/auth/signuppost`, data);
        return response.data;
        } catch (error) {
            console.log('axios error=>',error.response)
            return error.response ?? error;

        }
    },
    verifyOtp: async (data) => {
        try {
        // Send loginFormData to your backend API
        const response = await axios.post(`${API_BASE_URL}/user/auth/verifyOTp`, data);
        return response.data;
        } catch (error) {
            console.log('axios error=>',error.response)
            return error.response ?? error;

        }
    },
    sendOtp: async (data) => {
        try {
        // Send loginFormData to your backend API
        const response = await axios.post(`${API_BASE_URL}/user/auth/send-otp`, data);
        return response.data;
        } catch (error) {
            console.log('axios error=>',error.response)
            return error.response ?? error;

        }
    },
    login: async (data) => {
        try {
        // Send loginFormData to your backend API
        const response = await axios.post(`${API_BASE_URL}/user/auth/login`, data);
        return response.data;
        } catch (error) {
            console.log('axios error=>',error.response)
            return error.response ?? error;

        }
    },

    tokenVerify: async (data) => {
        try {
        // Send loginFormData to your backend API
        const response = await axios.post(`${API_BASE_URL}/user/auth/verifyToken`, data);
        return response.data;
        } catch (error) {
            console.log('axios error=>',error.response)
            return error.response ?? error;

        }
    },
};

export default AuthController;
