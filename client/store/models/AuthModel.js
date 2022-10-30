import {action, thunk} from "easy-peasy";
import {LoginApi, RegisterApi} from "../../api/auth";


const AuthModel = {
    AuthToken: '',
    AuthUser: {},
    AuthSet: action((state, payload) => {
        state.AuthToken = payload.token;
        state.AuthUser = payload.user;
    }),
    AuthClear: action((state) => {
        state.AuthToken = '';
        state.AuthUser = {};
    }),
    LogIn: thunk(async ({AuthSet},payload)=>{
        const data = await LoginApi(payload)
        AuthSet({...data})


    }),
    Register: thunk(async ({AuthSet},payload)=>{
        const data = await RegisterApi(payload)
        AuthSet({...data})
    })

}
export default AuthModel;