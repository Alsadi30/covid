import GlobalStyles from '../components/styles/Global.styled';
import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles></GlobalStyles>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
