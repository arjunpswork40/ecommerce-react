const AuthManagement = {
    getToken: async () => {
        return sessionStorage.getItem('token');
    },
    setToken: async (token) => {
        console.log('token ==> ', token)
        return sessionStorage.setItem('token',token);
    },
    
};

export default AuthManagement;
