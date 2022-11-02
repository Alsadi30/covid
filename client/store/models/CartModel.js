import { action, thunk } from "easy-peasy";
import { createCartApi, updateCartApi } from "../../api/cart";

const CheckInCart = (CartProducts, payload) => {
  const isInCart = CartProducts.findIndex((product) => {
    return product.productId === payload.id;
  });

  let data;

  if (isInCart === -1) {
    data = {
      productId: payload.id,
      name: payload.attributes.name,
      price: payload.attributes.variants.data[0].attributes.sale_price,
      quentity: 1,
    };
  } else {
    data = CartProducts?.map((product, i) => {
      if (product.productId === payload.id) {
        return (CartProducts[i] = {
          productId: payload.id,
          name: payload.attributes.name,
          price: payload.attributes.variants.data[0].attributes.sale_price,
          quentity: parseInt(CartProducts[i].quentity) + parseInt(1),
        });
      } else {
        return product;
      }
    });
  }
  return { data, isInCart };
};

const CartModel = {
  CartId: "",
  CartProducts: [],
  AddProduct: action((state, payload) => {
    payload.id ? (state.CartId = payload.id) : (state.CartId = "");
    state.CartProducts = [...payload.attributes.products];
  }),
  AddProductNoAuth: action((state, payload) => {
    const CartProducts = state.CartProducts;
    let { data, isInCart } = CheckInCart(CartProducts, payload);
    if (isInCart === -1) {
      console.log("called");
      state.CartProducts = [...state.CartProducts, data];
    }
  }),
  RemoveProduct: action((state, payload) => {
    state.CartProducts = state.CartProducts.filter(
      (product) => product.productId !== payload.id
    );
  }),
  ClearCart: action((state) => {
    state.CartProducts = [];
  }),

  AddProductThunk: thunk(async ({ AddProduct }, payload, { getState }) => {
    const cartId = getState().CartId;
    const CartProducts = getState().CartProducts;

    let { data, isInCart } = CheckInCart(CartProducts, payload);

    if (!cartId) {
      try {
        const createdCart = await createCartApi(data);
        AddProduct(createdCart.data.data);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        if (isInCart !== -1) {
          const updatedCart = await updateCartApi(data, cartId);
          AddProduct(updatedCart.data.data);
        } else {
          const Data = [...CartProducts, data];
          const updatedCart = await updateCartApi(Data, cartId);
          AddProduct(updatedCart.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }),
};

export default CartModel;
