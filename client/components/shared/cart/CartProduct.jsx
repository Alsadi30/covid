import {action, useStoreActions, useStoreState} from 'easy-peasy';
import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
import styled from 'styled-components';
import {Flex, FlexContentSpace} from '../../styles/Flex.styled';

const Box = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;

    p {
        font-size: 14px;
    }

    img {
      max-width: 100%;
      height: 50px;
      object-fit: cover;
    }
`;

const CartProduct = ({item}) => {
  const {AuthToken} = useStoreState (state => state.Auth);
  const {
    AddProductNoAuth,
    AddProductThunk,
    RemoveProduct,
    RemoveProductThunk,
    DecreaseProductQuantityNoAuth,
    DecreaseProductQuantityThunk,
  } = useStoreActions (actions => actions.Cart);

  const handleAddToCart = () => {
    if (AuthToken) {
      AddProductThunk (item);
    } else {
      AddProductNoAuth (item);
    }
  };

  const handleRemoveFromCart = () => {
    if (AuthToken) {
      RemoveProductThunk (item);
    } else {
      RemoveProduct (item);
    }
  };
  const handleDecrease = () => {
    if (AuthToken) {
      DecreaseProductQuantityThunk (item);
    } else {
      DecreaseProductQuantityNoAuth (item);
    }
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
            <button onClick={handleDecrease}>-</button>
            <p>{item?.quentity}</p>
            <button onClick={handleAddToCart}>+</button>
          </Flex>
<<<<<<< HEAD
          <span style={{ cursor: 'pointer' }} onClick={handleRemoveFromCart}><AiFillDelete color="red"/></span>
=======
          <span onClick={handleRemoveFromCart}><AiFillDelete /></span>
>>>>>>> 27d194fbe233ae68d96d2e6109555cb55dc34be1
        </FlexContentSpace>
      </div>
    </Box>
  );
};

export default CartProduct;
