import axios from 'axios'
import { backend_base_api } from './api'

export const createAddress = async (data, userId) => {
  const Data = { ...data, userId: userId }
  try {
    const Address = await axios.post(`${backend_base_api}/addresses`, {
      data: Data
    })
    return Address
  } catch (e) {
    console.log(e)
  }
}

export const createOrder = async (data, userId) => {
  const Data = { ...data, userId: userId }
  try {
    const Order = await axios.post(`${backend_base_api}/orders`, { data: Data })
    return Order
  } catch (e) {
    console.log(e)
  }
}

export const getCoupon = async data => {
  console.log(data)
  try {
    const res = await axios.get(
      `${backend_base_api}/cupons?filters[name][$eq]=${data}`
    )
    const discount = res.data.data
    return discount
  } catch (error) {
    console.log(error)
    return error
  }
}

export const handleBuy = async data => {
  try {
    const res = await axios.post(`${backend_base_api}/orders`, data)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const createOrderItem = async data => {
  console.log('called')
  try {
    const res = await axios.post(`${backend_base_api}/order-items`, data)
    return res.data
  } catch (e) {
    console.log(e)
  }
}
