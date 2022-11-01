import GlobalStyles from '../components/styles/Global.styled';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import {StoreProvider, useStoreRehydrated} from 'easy-peasy';
import store from '../store/store';

function MyApp({ Component, pageProps }) {
  function WaitForStateRehydration({ children }) {
    const isRehydrated = useStoreRehydrated();
    return isRehydrated ? children : null;
  }
  return (
    <StoreProvider store={store}>
        <WaitForStateRehydration>
            <GlobalStyles />
            <Component {...pageProps} />
        </WaitForStateRehydration>
    </StoreProvider>
  )
}

export default MyApp
