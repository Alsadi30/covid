import React from 'react';
import { Drawer } from 'antd';
import { FlexCenter, FlexEnd, FlexStart } from '../../styles/Flex.styled';
import EmptyCard from '../../UI/EmptyCard';
import { ProceedButton } from '../../UI/Button';
import { useStoreState } from 'easy-peasy';
import CartProduct from './CartProduct';
import styled from 'styled-components';

const Box = styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
`


const Cart = ({ onClose, open }) => {

    const { CartProducts } = useStoreState(state => state.Cart);

    console.log(CartProducts, 'cardPRodc')


    return (
        <>
            <Drawer title="Shopping Cart" placement="right" onClose={onClose} open={open}>
                {/* <Box> */}
                    {
                        CartProducts.length > 0 ?
                            CartProducts?.map(item => <FlexStart style={{ height: '95%' }} direction="column">
                                <CartProduct item={item} />
                            </FlexStart>) :

                            <FlexCenter style={{ height: '95%' }} direction="column">
                                <EmptyCard />
                                <h3 style={{ marginTop: '10px' }}>Your Card Is Empty</h3>
                            </FlexCenter>
                    }

                    <FlexEnd>
                        <ProceedButton>Proceed To Checkout</ProceedButton>
                    </FlexEnd>
                {/* </Box> */}
            </Drawer>
        </>
    );
};

export default Cart;