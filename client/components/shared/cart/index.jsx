import { Drawer } from 'antd';
import { useStoreState } from 'easy-peasy';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import useTotal from '../../../hooks/useTotal';
import { FlexCenter, FlexEnd } from '../../styles/Flex.styled';
import { ProceedButton } from '../../UI/Button';
import EmptyCard from '../../UI/EmptyCard';
import CartProduct from './CartProduct';

const Box = styled.div`
        display: flex;
        // justify-content: space-between;
        flex-direction: column;
`


const Cart = ({ onClose, open }) => {

    const { Cart, Auth } = useStoreState(state => state);
    let CartProducts = Cart.CartProducts
    const { total, subTotal, makeTotal, makesubTotal } = useTotal(CartProducts);

    useEffect(() => {
     makesubTotal()
   }, [subTotal,CartProducts])
   


    return (
        <>
            <Drawer title="Shopping Cart" placement="right" onClose={onClose} open={open}>
                <Box>
                    {
                        CartProducts ?
                            CartProducts?.map(item => <Box>
                                <CartProduct item={item} />
                            </Box>) :

                            <FlexCenter style={{ height: '95%' }} direction="column">
                                <EmptyCard />
                                <h3 style={{ marginTop: '10px' }}>Your Card Is Empty</h3>
                            </FlexCenter>
                    }

                    
                    {Auth.AuthToken ? (
            <Link href="/checkout">
             <FlexEnd>
                        <ProceedButton>Proceed To Checkout</ProceedButton>
                    </FlexEnd>
            </Link>
          ) : (
            <Link href="/login">
            <FlexEnd>
                        <ProceedButton>Proceed To Checkout</ProceedButton>
                    </FlexEnd>
            </Link>
          )}
                </Box>
            </Drawer>
        </>
    );
};

export default Cart;