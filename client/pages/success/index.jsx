import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {backend_base_api} from '../../api/api';
import { ConfirmOrderPayment } from '../../api/checkout';
import Footer from '../../components/shared/footer/footer';
import Navbar from '../../components/shared/navbar';
import Topbar from '../../components/shared/topbar';
import {Container} from '../../components/styles/Container.styled';



const Success = () => {
  const router = useRouter ();
  const {session_id} = router.query;

  const {data: order, isLoading: isLoading2} = useQuery ({
    queryKey: ['order', session_id],
    queryFn: () => ConfirmOrderPayment (session_id),
  });
    
    console.log(order)

  return (
    <>
      <Head>
        <title>Success</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <Container>
        <Navbar />
        
      </Container>
      <Footer />
    </>
  );
};

export default Success;
