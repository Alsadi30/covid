import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FlexContentSpace } from '../../styles/Flex.styled';
import Cart from '../cart';

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
                <Link  href="/">
                    <a style={{ cursor: 'pointer',fontSize:'22px',fontWeight:'500' }}>Covid 19 Shop</a>
                </Link>

                <div>
                    <input type="search" placeholder='Search here..'></input>
                </div>

                <div>
                    <button onClick={showDrawer}><AiOutlineShoppingCart size="25"></AiOutlineShoppingCart></button>
                    <button><CgProfile size="25"></CgProfile></button>
                </div>
            </FlexContentSpace>
            <Cart onClose={onClose} open={open}/>
        </>
    );
};

export default Topbar;