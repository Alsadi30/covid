import { BackEndApi } from "./api"

  export const getBrandProducts =async (brandName) => {
    try {
        BackEndApi.defaults.headers.common['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3MjcyMTAwLCJleHAiOjE2Njk4NjQxMDB9.u41PhQRIhKyaCzL68X-RVtEBfjWt2xWZb_A_leoMPhw"}`
        const res = await BackEndApi.get(`/brands?filters[name][$eq]=${brandName}&populate[0]=products`)
        const products = res.data.data  
        return products
    } catch (e) {
        console.log(e)
    }
  }