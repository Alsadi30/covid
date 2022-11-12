import { useStoreState } from 'easy-peasy';
import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styled from 'styled-components';
import useTotal from '../../../hooks/useTotal';
import Cart from '../cart';

const Box = styled.div`
    position: fixed;
    top: 45%;
    right: 0;
    cursor: pointer;
    z-index: 1000;  
    // left: 50%; 
    // transform: translate(-50%, -50%);
`

const CartIcon = styled.div`
    background-color: #F3F4F6;
    padding: 2px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top-left-radius: 10px;
`
 
const PriceBox = styled.div`
    text-align: center;
    padding: 8px 0;
    background: #029FAE;
    border-bottom-left-radius: 10px;

    p {
        color: white;
    }

`

const GlobalCart = () => {
    const [open, setOpen] = useState(false);
    const { CartProducts } = useStoreState(state => state.Cart);
    const { total, subTotal, makeTotal, makesubTotal } = useTotal(CartProducts);

   useEffect(() => {
     makesubTotal()
   }, [subTotal,CartProducts])
   


    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        makeTotal();
    }, [subTotal])

    console.log(total, subTotal, makeTotal, 'from global');


    return (
        <>
            <Box onClick={() => setOpen(!open)}>
                <CartIcon>
                    <span style={{ fontSize: '2rem', color: '#1abb85' }}><AiOutlineShoppingCart></AiOutlineShoppingCart></span>
                    <p>{CartProducts?.length} items</p>
                </CartIcon>
                <PriceBox>
                    <p>$ {subTotal}</p>
                </PriceBox>
            </Box>
            <Cart onClose={onClose} open={open} />

        </>
    );
};

export default GlobalCart;