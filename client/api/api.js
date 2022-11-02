import axios from "axios";

export const backend_base_api = 'http://localhost:1337/api';

 export const AuthBackEndApi = axios.create({
    baseURL: `${backend_base_api}/auth/local`,
});

export const BackEndApi = axios.create({
    baseURL: `${backend_base_api}`
});



export const setAuthToken = token => {
    if(token){
        BackEndApi.defaults.headers.common['Authorization'] = `Bearer ${token}` 
        console.log( BackEndApi.defaults.headers.common['Authorization'])
    }else{
        axios.defaults.headers.common['Authorization'] = ''
    }
}

