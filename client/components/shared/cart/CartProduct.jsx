import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import styled from 'styled-components';
import { Flex, FlexCenter, FlexContentSpace, Stack } from '../../styles/Flex.styled';

const Box = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;

    p {
        font-size: 16px;
    }
`


const CartProduct = ({ item }) => {
    return (
        <Box>
            <div>
                <img src={item?.image}></img>
            </div>
            <div>
                <div>
                    <h3>TItle</h3>
                    <small>Price $34</small>
                </div>

                <FlexContentSpace mt="10px">
                    <p>$1045</p>
                    <Flex>
                        <button>-</button>
                        <p>2</p>
                        <button>+</button>
                    </Flex>
                    <span><AiFillDelete></AiFillDelete></span>
                </FlexContentSpace>
            </div>
        </Box>
    );
};

export default CartProduct;