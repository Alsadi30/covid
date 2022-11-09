import {action, useStoreActions, useStoreState} from 'easy-peasy';
import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
import styled from 'styled-components';
import {
  Flex,
  FlexCenter,
  FlexContentSpace,
  Stack,
} from '../../styles/Flex.styled';

const Box = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;

    p {
        font-size: 16px;
    }

    img {
      max-width: 100%;
      height: 50px;
      object-fit: cover;
    }
`;

const CartProduct = ({item}) => {
  console.log (item);

  const cart = useStoreActions (action => action.Cart);

  const handleDecrease = () => {};
  const handleRemove = () => {
    cart.RemoveProduct (item);
  };
  return (
    <Box>
      <div>
        <img src={item.thumbnail} />
      </div>
      <div>
        <div>
          <h3>{item?.name}</h3>
          <small>Price ${item?.price}</small>
        </div>

        <FlexContentSpace mt="10px">
          <p>${item?.quentity * item?.price}</p>
          <Flex>
            <button>-</button>
            <p>{item?.quentity}</p>
            <button>+</button>
          </Flex>
          <span style={{ cursor: 'pointer' }} onClick={handleRemove}><AiFillDelete /></span>
        </FlexContentSpace>
      </div>
    </Box>
  );
};

export default CartProduct;
