import {action} from "easy-peasy";

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

}
export default AuthModel;