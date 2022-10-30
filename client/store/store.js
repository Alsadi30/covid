import {createStore, persist} from "easy-peasy";
import AuthModel from "./models/AuthModel";
import CartModel from "./models/CartModel";

const store = createStore({
    Auth: persist(AuthModel,{storage: 'localStorage'}),
    Cart: persist(CartModel,{storage: 'localStorage'}),

});
export default store;