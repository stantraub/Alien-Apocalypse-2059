import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};


export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  
    return axios.post('/api/users/login', userData);
};

export const updateHighScore = (userData, highscore) => {
    return axios.patch('/api/users/highscore/1', {userData, highscore})
}

export const fetchHighscores = () => {
    return axios.get('/api/users/highscores')
}