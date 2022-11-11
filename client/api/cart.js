import axios from 'axios'
import { backend_base_api } from './api'

export const createCartApi = async (data, id) => {
  let Data = { data: { products: [data], userId: id } }
  try {
    const Cart = await axios.post(`${backend_base_api}/carts`, Data)
    return Cart
  } catch (e) {
    console.log(e)
  }
}

export const updateCartApi = async (data, cartId) => {
  try {
    let Data = { data: { products: data } }
    const Cart = await axios.put(`${backend_base_api}/carts/${cartId}`, Data)
    return Cart
  } catch (e) {
    console.log(e)
  }
}

export const getCartofUser = async () => {
  try {
    let res = await axios.get(`${backend_base_api}/cartbyuser`)
    let cart = res.data[0]
    return cart
  } catch (e) {
    console.log(e)
  }
}
