import {createStore, persist} from "easy-peasy";
import AuthModel from "./store/models/AuthModel";
import CartModel from "./store/models/CartModel";

const store = createStore({
    Auth: persist(AuthModel),
    Cart: persist(CartModel),

});
export default store;