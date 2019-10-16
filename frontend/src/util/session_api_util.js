import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const highscore =(userData)=>{
    return axios.get('/api/users/highscore', userData);
}
export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  
    return axios.post('/api/users/login', userData);
};