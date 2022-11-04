import { BackEndApi, jwtAuthToken } from "./api";

export const getSingleProduct = async (slug) => {
  try {
    BackEndApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtAuthToken}`;
    const res = await BackEndApi.get(
      `/products?filters[name][$eq]=${slug}&populate[0]=variants`
    );
    const product = res.data.data;
    return product;
  } catch (e) {
    console.log(e);
  }
};

export const getAllProducts = async () => {
  try {
    BackEndApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtAuthToken}`;
    const res = await BackEndApi.get(`/products`);
    const products = res.data.data;
    return products;
  } catch (e) {
    console.log(e);
  }
};
