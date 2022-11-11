import GlobalStyles from '../components/styles/Global.styled'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { StoreProvider, useStoreRehydrated, useStoreState } from 'easy-peasy'
import store from '../store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect } from 'react'
import { setAuthToken } from '../api/api'
import { getCartofUser } from '../api/cart'

// Create a client
const queryClient = new QueryClient()

function MyApp ({ Component, pageProps }) {
  function WaitForStateRehydration ({ children }) {
    const isRehydrated = useStoreRehydrated()
    return isRehydrated ? children : null
  }

  let cart = {}

  useEffect(() => {
    let token = localStorage.getItem('[EasyPeasyStore][0][Auth]')
    if (token) {
      token = JSON.parse(token).data.AuthToken
      let isSet = setAuthToken(token)
      ;(async () => {
        const cart = await getCartofUser()
        console.log(cart)
      })()
      if (isSet) {
        console.log('asdj')

        console.log(cart)
      }
    }
  }, [])

  // console.log(cart)

  return (
    <StoreProvider store={store}>
      <WaitForStateRehydration>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </WaitForStateRehydration>
    </StoreProvider>
  )
}

export default MyApp
