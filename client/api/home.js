import axios from 'axios'
import { backend_base_api } from './api'

export const getProducts = async () => {
  try {
    const res = await axios.get(
      `${backend_base_api}/products?populate[0]=thumbnails&populate[1]=variants&filters[variants][on_sale][$eq]=true`
    )
    const products = res.data.data
    return products
  } catch (e) {
    console.log(e)
    return e
  }
}

export const getCategories = async () => {
  try {
    const res = await axios.get(`${backend_base_api}/categories`)
    const categories = res.data.data
    return categories
  } catch (e) {
    console.log(e)
  }
}

export const getBrands = async () => {
  try {
    const res = await axios.get(`${backend_base_api}/brands?populate[0]=avater`)
    const brands = res.data.data
    return brands
  } catch (e) {
    console.log(e)
  }
}

export const getFilterdProducts = async url => {
  try {
    const res = await axios.get(
      `${backend_base_api}/products?${url}&populate[0]=thumbnails&populate[1]=variants`
    )
    const products = res.data.data
    return products
  } catch (e) {
    console.log(e)
  }
}
