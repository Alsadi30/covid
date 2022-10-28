import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FlexContentSpace } from '../styles/Flex.styled';
import CartDrawer from './Drawer';

const Topbar = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <FlexContentSpace bg='#F0F2F3'>
                <div>
                    <h3>Covid 19 Shop</h3>
                </div>

                <div>
                    <input type="search" placeholder='Search here..'></input>
                </div>

                <div>
                    <button onClick={showDrawer}><AiOutlineShoppingCart size="25"></AiOutlineShoppingCart></button>
                    <button><CgProfile size="25"></CgProfile></button>
                </div>
            </FlexContentSpace>
            <CartDrawer onClose={onClose} open={open}></CartDrawer>
        </>
    );
};

export default Topbar;