import { BackEndApi } from "./api";

export const getSingleProduct = async (slug) => {
  try {
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
    const res = await BackEndApi.get(`/products`);
    const products = res.data.data;
    return products;
  } catch (e) {
    console.log(e);
  }
};
