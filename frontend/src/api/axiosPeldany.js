import axios from 'axios';

//axios instance létrehozása a baseURL beállításával
const api = axios.create({  
    baseURL: 'https://jsonplaceholder.typicode.com/users ',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});


export default api;