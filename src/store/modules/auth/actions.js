import axios from 'axios';


const registerUser = async (context, obj) => {
    const response = (await axios.post('https://viento-sandbox.herokuapp.com/auth/register', obj)).data;
    console.log(response);
    try {
        localStorage.setItem('token', response.object);
    } catch (e) {
        throw alert(e);
    }
};

const login = async (context, obj) => {
    const response = (await axios.post('https://viento-sandbox.herokuapp.com/auth/login', obj)).data;
    console.log(response);
    try {
        localStorage.setItem('token', response.message);
    } catch (e) {
        throw console.log(e);
    }
};

export default {
    registerUser,
    login,
};