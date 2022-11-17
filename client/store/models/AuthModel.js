import { action, thunk } from 'easy-peasy'
import { toast } from 'react-toastify'
import { setAuthToken } from '../../api/api'
import { LoginApi, RegisterApi } from '../../api/auth'

const AuthModel = {
  AuthToken: '',
  AuthUser: {},
  AuthSet: action((state, payload) => {
    state.AuthToken = payload.token
    state.AuthUser = payload.user
  }),
  AuthClear: action(state => {
    state.AuthToken = ''
    state.AuthUser = {}
  }),
  LogIn: thunk(async ({ AuthSet }, payload) => {
    try {
      const data = await LoginApi(payload)
      AuthSet({ ...data })
      if (data) {
        setAuthToken(data.token)
      }
      return !!data
    } catch (e) {
      // toast(e.message)
    }
  }),

  Register: thunk(async ({ AuthSet }, payload) => {
    try {
      const data = await RegisterApi(payload)
      console.log(data)
      AuthSet({ ...data })
      if (data.token) {
        setAuthToken(data.token)
      }
      toast('Account Created Successfully!')
      return !!data
    } catch (e) {
      toast(e.message)
    }
  })
}
export default AuthModel
