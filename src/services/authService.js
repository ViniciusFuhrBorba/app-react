

import axios from '../utils/axios';

class AuthService {

    signIn = (email, password) => {
        return new Promise((resolve, reject) => {
            axios.post('/v1/auth/login', { email, password })
                .then(response => {
                    if (response.data.user) {
                        this.setToken(response.data.token)
                        resolve(response.data.user)
                    } else {
                        reject(response.data.error)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    signUp = (fullName, email, password) => {

    }

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.post('/api/home/me')
                .then(response => {
                    if (response.data.user) {
                        resolve(response.data.user)
                    } else {
                        reject(response.data.error)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    signOut = () => {
        this.removeToken();
    }


    setToken = (token) => {
        if (token) {
            localStorage.setItem('accessToken', token);
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        } else {
            localStorage.setItem('token');
            delete axios.defaults.headers.common.Authorization;
        }
    };

    getToken = () => localStorage.getItem('accessToken');

    removeToken = () => localStorage.removeItem('accessToken')

    isAuthenticated = () => !!this.getToken();

}


const authService = new AuthService();

export default authService;