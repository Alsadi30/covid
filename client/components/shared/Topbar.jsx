import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FlexContentSpace } from '../styles/Flex.styled';

const Topbar = () => {
    return (
        <FlexContentSpace bg='#F0F2F3'>
            <div>
                <h3>Covid 19 Shop</h3>
            </div>

            <div>
                <input type="search" placeholder='Search here..'></input>
            </div>

            <div>
                <button><AiOutlineShoppingCart size="25"></AiOutlineShoppingCart></button>
                <button><CgProfile size="25"></CgProfile></button>
            </div>
        </FlexContentSpace>
    );
};

export default Topbar;