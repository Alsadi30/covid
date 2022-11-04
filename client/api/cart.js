import { BackEndApi, jwtAuthToken } from "./api";

export const createCartApi = async (data, id) => {
  let Data = { data: { products: [data], userId: id } };

  BackEndApi.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${jwtAuthToken}`;
  try {
    const Cart = await BackEndApi.post("/carts", Data);
    return Cart;
  } catch (e) {
    console.log(e);
  }
};

export const updateCartApi = async (data, cartId) => {
  let Data = { data: { products: data } };
  BackEndApi.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${jwtAuthToken}`;
  try {
    const Cart = await BackEndApi.put(`/carts/${cartId}`, Data);
    return Cart;
  } catch (e) {
    console.log(e);
  }
};
