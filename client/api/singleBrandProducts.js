import { BackEndApi, jwtAuthToken } from "./api";

export const getBrandProducts = async (brandName) => {
  try {
    BackEndApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtAuthToken}`;
    const res = await BackEndApi.get(
      `/brands?filters[name][$eq]=${brandName}&populate[0]=products`
    );
    const products = res.data.data;
    return products;
  } catch (e) {
    console.log(e);
  }
};
