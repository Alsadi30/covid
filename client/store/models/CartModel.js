import { action, thunk } from 'easy-peasy'
import { toast } from 'react-toastify'
import { createCartApi, deleteCart, updateCartApi } from '../../api/cart'

const CheckInCartInc = (CartProducts, payload) => {
  const isInCart = CartProducts.findIndex(product => {
    return product.productId === payload.productId
  })

  let data = {}

  if (isInCart === -1) {
    data = {
      productId: payload.productId,
      name: payload.name,
      thumbnail: payload.thumbnail,
      price: payload.price,
      quentity: 1
    }
  } else {
    data = CartProducts?.map((product, i) => {
      if (product.productId === payload.productId) {
        return (CartProducts[i] = {
          productId: payload.productId,
          name: payload.name,
          thumbnail: payload.thumbnail,
          price: payload.price,
          quentity: parseInt(CartProducts[i].quentity) + parseInt(1)
        })
      } else {
        return product
      }
    })
  }

  return { data, isInCart }
}

const ProductInCartDec = (CartProducts, payload) => {
  const isInCart = CartProducts.findIndex(product => {
    return product.productId === payload.productId
  })
  const data = CartProducts?.map((product, i) => {
    if (product.productId === payload.productId) {
      return (CartProducts[i] = {
        productId: payload.productId,
        name: payload.name,
        thumbnail: payload.thumbnail,
        price: payload.price,
        quentity: parseInt(CartProducts[i].quentity) - parseInt(1)
      })
    } else {
      return product
    }
  })
  return { data, isInCart }
}

const CartModel = {
  CartId: '',
  CartProducts: [],
  AddProduct: action((state, payload) => {
    payload.id ? (state.CartId = payload.id) : (state.CartId = '')
    state.CartProducts = [...payload.attributes.products]
    toast('Product added to the cart', { autoClose: 100 })
  }),
  AddProductNoAuth: action((state, payload) => {
    const CartProducts = state.CartProducts
    let { data, isInCart } = CheckInCartInc(CartProducts, payload)
    if (isInCart === -1) {
      state.CartProducts = [...state.CartProducts, data]
    }
    toast('Product added to the cart', { autoClose: 100 })
  }),
  RemoveProduct: action((state, payload) => {
    state.CartProducts = state.CartProducts.filter(
      product => product.productId !== payload.productId
    )
    toast('Product Removed', { autoClose: 100 })
  }),
  AddProductThunk: thunk(
    async ({ AddProduct }, payload, { getState, getStoreState }) => {
      const cartId = getState().CartId
      const CartProducts = getState().CartProducts

      let { data, isInCart } = CheckInCartInc(CartProducts, payload)

      if (!cartId) {
        try {
          let userId = getStoreState().Auth.AuthUser.id
          const createdCart = await createCartApi(data, userId)
          AddProduct(createdCart.data.data)
        } catch (e) {
          toast(e.message)
        }
      } else {
        try {
          if (isInCart !== -1) {
            const updatedCart = await updateCartApi(data, cartId)
            AddProduct(updatedCart.data.data)
          } else {
            const Data = [...CartProducts, data]
            const updatedCart = await updateCartApi(Data, cartId)
            AddProduct(updatedCart.data.data)
          }
        } catch (e) {
          toast(e.message)
        }
      }
    }
  ),
  RemoveProductThunk: thunk(
    async ({ RemoveProduct }, payload, { getState }) => {
      RemoveProduct(payload)
      const { CartId, CartProducts } = getState()
      try {
        updateCartApi(CartProducts, CartId)
      } catch (e) {
        toast(e.message)
      }
    }
  ),

  DecreaseProductQuantityNoAuth: action((state, payload) => {
    let product = state.CartProducts.find(
      item => item.productId === payload.productId
    )
    if (product.quentity <= 1) {
      state.CartProducts = state.CartProducts.filter(
        product => product.productId !== payload.productId
      )
    } else {
      let data = ProductInCartDec(state.CartProducts, payload)
      state.CartProducts = data.data
    }
    toast('Product quantity decremented', { autoClose: 100 })
  }),

  DecreaseProductQuantityThunk: thunk(
    async (
      { AddProduct, RemoveProduct, RemoveProductThunk },
      payload,
      { getState, getStoreState }
    ) => {
      const cartId = getState().CartId
      const CartProducts = getState().CartProducts

      let { data, isInCart } = ProductInCartDec(CartProducts, payload)

      let product = CartProducts.find(
        item => item.productId === payload.productId
      )
      if (product.quentity < 1) {
        if (!cartId) {
          RemoveProduct(payload)
        } else {
          RemoveProductThunk(payload)
        }
      } else {
        if (!cartId) {
          try {
            let userId = getStoreState().Auth.AuthUser.id
            const createdCart = await createCartApi(data, userId)
            AddProduct(createdCart.data.data)
          } catch (e) {
            toast(e.message)
          }
        } else {
          try {
            const updatedCart = await updateCartApi(data, cartId)
            AddProduct(updatedCart.data.data)
          } catch (e) {
            toast(e.message)
          }
        }
      }
    }
  ),

  SetDatabaseCart: action((state, payload) => {
    state.CartId = payload.id
    state.CartProducts = payload.products
  }),

  ClearCart: action(state => {
    state.CartId = ''
    state.CartProducts = []
  }),

  DeleteCartThunk: thunk(async ({ ClearCart }, payload) => {
    let cart = deleteCart(payload)
    ClearCart()
  })
}

export default CartModel
