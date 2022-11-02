import GlobalStyles from '../components/styles/Global.styled';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import {StoreProvider, useStoreRehydrated} from 'easy-peasy';
import store from '../store/store';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// Create a client
const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  function WaitForStateRehydration({ children }) {
    const isRehydrated = useStoreRehydrated();
    return isRehydrated ? children : null;
  }
  return (
    <QueryClientProvider client={queryClient}>
    <StoreProvider store={store}>
        <WaitForStateRehydration>
            <GlobalStyles />
            <Component {...pageProps} />
        </WaitForStateRehydration>
    </StoreProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  )
}

export default MyApp
