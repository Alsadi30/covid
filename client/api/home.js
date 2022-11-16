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
    toast(e.message)
  }
}

export const getCategories = async () => {
  try {
    const res = await axios.get(`${backend_base_api}/categories`)
    const categories = res.data.data
    return categories
  } catch (e) {
    toast(e.message)
  }
}

export const getBrands = async () => {
  try {
    const res = await axios.get(`${backend_base_api}/brands?populate[0]=avater`)
    const brands = res.data.data
    return brands
  } catch (e) {
    toast(e.message)
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
    toast(e.message)
  }
}

export const getLatestProducts = async () => {
  try {
    const res = await axios.get(
      `${backend_base_api}/products?populate[0]=thumbnails&populate[1]=variants&sort[0]=createdAt%3Adesc&pagination[page]=1&pagination[pageSize]=10`
    )
    const products = res.data.data
    return products
  } catch (e) {
    toast(e.message)
  }
}
