import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useStoreActions, useStoreState } from "easy-peasy";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { backend_base_api } from "../../api/api";
import { getCartofUser } from "../../api/cart";
import Footer from "../../components/shared/footer/footer";
import Navbar from "../../components/shared/navbar";
import Topbar from "../../components/shared/topbar";
import { Container } from "../../components/styles/Container.styled";




   


   
      
            const fetchOrder = async (session_id) => {
                try {
               
                    const res = await axios.put(`${backend_base_api}/confirm`,{data:{transaction_id:session_id}})
                    const data = await res.data
                  console.log(data)
                    return data
                   
                } catch (err) {
                    console.log(err)
                }
            }
      
     





const Success = () => {
    const { DeleteCartThunk ,SetDatabaseCart} = useStoreActions(action => action.Cart)
    useEffect(() => {
        ;(async () => {
         const cart = await getCartofUser()
         if (cart) {
           SetDatabaseCart(cart)
         }
       })()
     }, [])
    const router = useRouter()
    const { session_id } = router.query
  
    const { CartId } = useStoreState(state => state.Cart)
  
  
  

    const { data: order, isLoading: isLoading2 } = useQuery({
        queryKey: ['order',session_id],
        queryFn: () => fetchOrder(session_id),
        onSuccess: () => {
            console.log(CartId)
        }
      })
    
   

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Topbar/>
            <Container>
                <Navbar/>

            </Container >
<Footer/>
        </>
    );
};

export default Success;