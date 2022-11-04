import { BackEndApi, jwtAuthToken } from "./api";

export const getCategoryProducts = async (categoryName) => {
  try {
    BackEndApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtAuthToken}`;
    const res = await BackEndApi.get(
      `/categories?filters[name][$eq]=${categoryName}&populate[0]=products`
    );
    const products = res.data.data;
    return products;
  } catch (e) {
    console.log(e);
  }
};
