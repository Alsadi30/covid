import axios from 'axios'
import { backend_base_api } from './api'

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
      `${backend_base_api}/products?populate[0]=category&populate[1]=variants&populate[2]=thumbnails&filters[variants][regular_price][$lte]=${price}&filters[${baseField}][name][$eq]=${baseFieldValue}&sort[0]=name%3A${sort}`
    )
    const products = res.data.data
    return products
  } catch (e) {
    console.log(e)
  }
}
