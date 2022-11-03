import { BackEndApi } from "./api"

  export const getCategoryProducts =async (categoryName) => {
    try {
        BackEndApi.defaults.headers.common['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3MjcyMTAwLCJleHAiOjE2Njk4NjQxMDB9.u41PhQRIhKyaCzL68X-RVtEBfjWt2xWZb_A_leoMPhw"}`
        const res = await BackEndApi.get(`/categories?filters[name][$eq]=${categoryName}&populate[0]=products`)
        const products = res.data.data  
        return products
    } catch (e) {
        console.log(e)
    }
  }