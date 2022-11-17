import axios from 'axios'
import { backend_base_api } from './api'

export const getBrandProducts = async brandName => {
  try {
    const res = await axios.get(
      `${backend_base_api}/brands?filters[name][$eq]=${brandName}&populate[0]=products`
    )
    const products = res.data.data
    return products
  } catch (e) {
    toast(e.response.data.error.message)
  }
}
