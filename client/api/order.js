import { BackEndApi } from "./api"

  export const getOrders =async () => {
  
    try {
        BackEndApi.defaults.headers.common['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3MjcyMTAwLCJleHAiOjE2Njk4NjQxMDB9.u41PhQRIhKyaCzL68X-RVtEBfjWt2xWZb_A_leoMPhw"}`
        const res = await BackEndApi.get(`/orders`)
        const orders = res.data.data  
        return orders     
    } catch (e) {
        console.log(e)
    }
  }