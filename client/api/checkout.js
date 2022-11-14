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
  try {
    const res = await axios.post(`${backend_base_api}/order-items`, data)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const ConfirmOrderPayment = async session_id => {
  try {
    const res = await axios.put(`${backend_base_api}/confirm`, {
      data: { transaction_id: session_id }
    })
    const data = await res.data
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}
