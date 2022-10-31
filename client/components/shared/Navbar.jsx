import React from 'react';
import styled from 'styled-components';
import { Flex, FlexContentAround, Stack } from '../styles/Flex.styled';
import { AiOutlineMenu } from 'react-icons/ai';

const items = ['Home', 'Shop', 'Product', 'Pages', 'About'];

const CategoryPara = styled.a`
    font-size: 22x;
    font-weight: 500;
    padding: 7px 20px;
    border: 1px solid #E1E3E6;
    border-radius: 6px;
    display: flex;
    align-items: center;
`

const Navbar = () => {
    return (
        <FlexContentAround>
            <Stack>
                <div>
                    <CategoryPara href="#"><AiOutlineMenu style={{ marginRight: '7px'}}></AiOutlineMenu>All Categories</CategoryPara>
                </div>

                <ul>
                    {
                        items?.map((item, i) =>
                            <li key={i}>
                                <a href='#'>{item}</a>
                            </li>
                        )
                    }
                </ul>
            </Stack>

            <div>
                <p>Contact: <strong><a href="tel:01771904605">01771904605</a></strong></p>
            </div>
        </FlexContentAround>
    );
};

export default Navbar;