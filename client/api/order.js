import axios from 'axios'
import { backend_base_api } from './api'

export const getOrders = async () => {
  try {
    const res = await axios.post(`${backend_base_api}/orders`)
    const orders = res.data.data
    return orders
  } catch (e) {
    console.log(e)
  }
}
