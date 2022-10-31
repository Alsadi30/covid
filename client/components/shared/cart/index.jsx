import React from 'react';
import { Drawer } from 'antd';
import { FlexCenter, FlexEnd } from '../../styles/Flex.styled';
import EmptyCard from '../../UI/EmptyCard';
import { ProceedButton } from '../../UI/Button';


const Cart = ({ onClose, open }) => {
    return (
        <>
            <Drawer title="Shopping Cart" placement="right" onClose={onClose} open={open}>
                <FlexCenter style={{ height: '95%' }} direction="column">
                    <EmptyCard/>
                    <h3 style={{ marginTop: '10px' }}>Your Card Is Empty</h3>
                </FlexCenter>
                <FlexEnd >
                    <ProceedButton>Proceed To Checkout</ProceedButton>
                </FlexEnd>
            </Drawer>
        </>
    );
};

export default Cart;