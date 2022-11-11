import axios from 'axios'
import { backend_base_api } from './api'

export const getSingleProduct = async slug => {
  try {
    const res = await axios.get(
      `${backend_base_api}/products?filters[name][$eq]=${slug}&populate[0]=variants`
    )
    const product = res.data.data
    return product
  } catch (e) {
    console.log(e)
  }
}

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${backend_base_api}/products`)
    const products = res.data.data
    return products
  } catch (e) {
    console.log(e)
  }
}
