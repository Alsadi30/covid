import GlobalStyles from '../components/styles/Global.styled';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import {StoreProvider} from 'easy-peasy';
import store from '../store/store';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
    <GlobalStyles></GlobalStyles>
    <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
