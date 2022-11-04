import { BackEndApi, jwtAuthToken } from "./api";

export const getOrders = async () => {
  try {
    BackEndApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtAuthToken}`;
    const res = await BackEndApi.get(`/orders`);
    const orders = res.data.data;
    return orders;
  } catch (e) {
    console.log(e);
  }
};
