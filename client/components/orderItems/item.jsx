import React from 'react';
import styled from 'styled-components';
import { Flex, FlexContentSpace } from '../styles/Flex.styled';

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

function OrderItem({item}) {
  console.log (item);
  return <Box>
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
        <p>{item?.quentity}</p> 
      </Flex>
    </FlexContentSpace>
  </div>
</Box>;
}

export default OrderItem;
