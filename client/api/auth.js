import {AuthBackEndApi} from "./api";

export  const LoginApi = (data) => {
    return AuthBackEndApi.post('/',{
            identifier: data.email,
            password: data.password
        }).then(r => {
            return {token:r.data.jwt,user:r.data.user}
        }).catch(e => {
            console.log(e)
        })

}

 export const RegisterApi = (data) => {
    return AuthBackEndApi.post('/register',{
        username: data.name,
        email: data.email,
        password: data.password
    }).then(r => {
        return {token:r.data.jwt,user:r.data.user}
    }).catch(e => {
        console.log(e)
    })
}


