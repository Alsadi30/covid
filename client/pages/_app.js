import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'antd/dist/antd.css'
import { StoreProvider, useStoreRehydrated } from 'easy-peasy'
import { useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { setAuthToken } from '../api/api'
import GlobalStyles from '../components/styles/Global.styled'
import store from '../store/store'
import '../styles/globals.css'

// Create a client
const queryClient = new QueryClient()

function MyApp ({ Component, pageProps }) {
  function WaitForStateRehydration ({ children }) {
    const isRehydrated = useStoreRehydrated()
    return isRehydrated ? children : null
  }

  useEffect(() => {
    let token = localStorage.getItem('[EasyPeasyStore][0][Auth]')
    if (token) {
      token = JSON.parse(token).data.AuthToken
      setAuthToken(token)
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
