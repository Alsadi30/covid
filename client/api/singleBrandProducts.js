import { BackEndApi } from './api'

export const getBrandProducts = async brandName => {
  try {
    const res = await BackEndApi.get(
      `/brands?filters[name][$eq]=${brandName}&populate[0]=products`
    )
    const products = res.data.data
    return products
  } catch (e) {
    console.log(e)
  }
}
