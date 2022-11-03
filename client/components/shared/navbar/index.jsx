import React from 'react';
import styled from 'styled-components';
import { Flex, FlexContentAround, Stack } from '../../styles/Flex.styled';
import { AiOutlineMenu } from 'react-icons/ai';
import NavItem from './navItem';


const items = ['Home', 'Shop', 'Product', 'Pages', 'About'];

const CategoryPara = styled.a`
    font-size: 18x;
    font-weight: 500;
    padding: 3px 10px 3px 10px;
    border: 1px solid #E1E3E6;
    border-radius: 6px;
    display: flex;
    align-items: center;
`

const Navbar = ({categories}) => {
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
                                 <NavItem item={item} />
                            </li>
                        )
                    }
                </ul>
            </Stack>

            <div>
                <p style={{ fontSize:'16px',fontWeight:'500' }}>Contact: <strong><a href="tel:01771904605">01771904605</a></strong></p>
            </div>
        </FlexContentAround>
    );
};

export default Navbar;