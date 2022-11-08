import axios from 'axios'

export const backend_base_api = 'http://localhost:1337/api'

export const AuthBackEndApi = axios.create({
  baseURL: `${backend_base_api}/auth/local`
})

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    axios.defaults.headers.common['Authorization'] = ''
  }
}
