import { BackEndApi } from "./api"

  export const getSingleProduct =async (slug) => {
    try {
        BackEndApi.defaults.headers.common['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3MjcyMTAwLCJleHAiOjE2Njk4NjQxMDB9.u41PhQRIhKyaCzL68X-RVtEBfjWt2xWZb_A_leoMPhw"}`
        const res = await BackEndApi.get(`/products?filters[name][$eq]=${slug}&populate[0]=variants`)
        const product = res.data.data  
        return product
    } catch (e) {
        console.log(e)
    }
  }




  export const getAllProducts =async () => {
    try {
        BackEndApi.defaults.headers.common['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3MjcyMTAwLCJleHAiOjE2Njk4NjQxMDB9.u41PhQRIhKyaCzL68X-RVtEBfjWt2xWZb_A_leoMPhw"}`
        const res = await BackEndApi.get(`/products`)
        const products = res.data.data  
        return products
    } catch (e) {
        console.log(e)
    }
  }