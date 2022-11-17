import { Drawer } from 'antd';
import { FlexCenter, FlexEnd, FlexStart } from '../../styles/Flex.styled';
import EmptyCard from '../../UI/EmptyCard';
import { useStoreState } from 'easy-peasy';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import useTotal from '../../../hooks/useTotal';
import { ProceedButton } from '../../UI/Button';
import CartProduct from './CartProduct';

const Box = styled.div`
        display: flex;
        // justify-content: space-between;
        flex-direction: column;
`


const Cart = ({ onClose, open }) => {

    const { Cart, Auth } = useStoreState(state => state);
    let CartProducts = Cart.CartProducts
    const { subTotal, makesubTotal } = useTotal(CartProducts);

    useEffect(() => {
        makesubTotal()
    }, [subTotal, CartProducts])



    return (
        <>
            <Drawer title="Shopping Cart" placement="right" onClose={onClose} open={open}>
                <Box style={{ height: '100%' }}>

                    <div style={{ flexGrow: 1 }}>
                        {
                            CartProducts.length > 0 ?
                                CartProducts?.map((item, i) => <>
                                    <FlexStart key={i * Math.random(100)} direction="column">
                                        <CartProduct key={i * Math.random(1000)} item={item} />
                                    </FlexStart>
                                </>
                                ) :

                                <FlexCenter style={{ height: '95%' }} direction="column">
                                    <EmptyCard />
                                    <h3 style={{ marginTop: '10px' }}>Your Card Is Empty</h3>
                                </FlexCenter>
                        }

                    </div>

                    {Auth.AuthToken ? (
                        <Link href="/checkout">
                            {/* <FlexEnd> */}
                            <ProceedButton>Proceed To Checkout</ProceedButton>
                            {/* </FlexEnd> */}
                        </Link>
                    ) : (
                        <Link href="/login">
                            {/* <FlexEnd> */}
                            <ProceedButton>Proceed To Checkout</ProceedButton>
                            {/* </FlexEnd> */}
                        </Link>
                    )}
                </Box>
                {/* </Box> */}
            </Drawer>
        </>
    );
};

export default Cart;