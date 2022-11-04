import { BackEndApi, jwtAuthToken } from "./api";

export const getProducts = async () => {
  try {
    BackEndApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtAuthToken}`;
    const res = await BackEndApi.get(
      "/products?populate[0]=thumbnails&populate[1]=variants&filters[variants][on_sale][$eq]=true"
    );
    const products = res.data.data;
    console.log(products);
    return products;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getCategories = async () => {
  try {
    BackEndApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtAuthToken}`;
    const res = await BackEndApi.get("/categories");
    const categories = res.data.data;
    return categories;
  } catch (e) {
    console.log(e);
  }
};

export const getBrands = async () => {
  try {
    BackEndApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtAuthToken}`;
    const res = await BackEndApi.get("/brands?populate[0]=avater");
    const brands = res.data.data;
    return brands;
  } catch (e) {
    console.log(e);
  }
};
