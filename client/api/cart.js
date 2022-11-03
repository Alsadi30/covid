import { BackEndApi } from "./api"


export const createCartApi = async (data,id) =>{
    let Data = {'data':{"products": [data], userId:id}}
    
    BackEndApi.defaults.headers.common['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3MjcyMTAwLCJleHAiOjE2Njk4NjQxMDB9.u41PhQRIhKyaCzL68X-RVtEBfjWt2xWZb_A_leoMPhw"}`
    try {
        const Cart = await BackEndApi.post('/carts',Data)
        return Cart
    
    } catch (e) {
        console.log(e)
    }
    
} 


export const updateCartApi = async (data,cartId) =>{
    let Data = {'data':{"products": data }}
    BackEndApi.defaults.headers.common['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3MjcyMTAwLCJleHAiOjE2Njk4NjQxMDB9.u41PhQRIhKyaCzL68X-RVtEBfjWt2xWZb_A_leoMPhw"}`
   try {
    const Cart = await BackEndApi.put(`/carts/${cartId}`,Data)
    return Cart

   } catch (e) {
    console.log(e)
   } 
  } 