import { toast } from 'react-toastify'
import { AuthBackEndApi } from './api'

export const LoginApi = data => {
  return AuthBackEndApi.post('/', {
    identifier: data.email,
    password: data.password
  })
    .then(r => {
      toast('You login successfully!')
      return { token: r.data.jwt, user: r.data.user }
    })
    .catch(e => {
      console.log(e)
      toast(e.response.data.error.message)
    })
}

export const RegisterApi = data => {
  return AuthBackEndApi.post('/register', {
    username: data.name,
    email: data.email,
    password: data.password
  })
    .then(r => {
      return { token: r.data.jwt, user: r.data.user }
    })
    .catch(e => {
      // add toast
      console.log(e)
      toast(e.response.data.error.message)
    })
}
