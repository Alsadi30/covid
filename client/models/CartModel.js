import {action} from "easy-peasy";

const CartModel ={
    CartProducts: [],
    AddProduct: action((state, payload) => {
        state.CartProducts.push(...payload);
    }),
    RemoveProduct: action((state, payload) => {
        state.CartProducts = state.CartProducts.filter((product) => product.id !== payload.id);
    }),
    ClearCart: action((state) => {
        state.CartProducts = [];
    })

}

export default CartModel;