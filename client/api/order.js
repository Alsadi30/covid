import axios from 'axios'
import { toast } from 'react-toastify'
import { backend_base_api } from './api'

export const getOrders = async id => {
  try {
    const res = await axios.get(
      `${backend_base_api}/orders?populate[0]=userId&filters[userId][id][$eq]=${id}&sort[0]=createdAt%3Adesc`
    )
    const orders = res.data.data
    return orders
  } catch (e) {}
}

export const getSingleOrder = async id => {
  try {
    const res = await axios.get(
      `${backend_base_api}/orders/${id}?populate[order_items][populate][0]=product_id`
    )
    const order = res.data.data
    return order
  } catch (e) {
    toast(e.response.data.error.message)
  }
}
