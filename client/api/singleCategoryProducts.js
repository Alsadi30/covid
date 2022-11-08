import axios from 'axios'
import QueryString from 'qs'
import { BackEndApi, backend_base_api } from './api'

export const getCategoryProducts = async categoryName => {
  try {
    const res = await axios.get(
      `${backend_base_api}/categories?filters[name][$eq]=${categoryName}&populate[0]=products`
    )
    const products = res.data.data
    return products
  } catch (e) {
    console.log(e)
  }
}

export const getProducts = async (baseField, baseFieldValue, price, sort) => {
  try {
    const res = await axios.get(
      `${backend_base_api}/categories?populate[products][populate][0]=variants&filters[products][variants][regular_price][$and][$eq]=200`
    )
    const products = res.data.data
    return products
  } catch (e) {
    console.log(e)
  }
}
