import styled from 'styled-components';

export const OrderItemsFrame = styled.div`
display:flex;
flex-direction:column;
max-width: 560px;
width: 100%;
border: 1px solid #e6e6e6;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
margin-left:50px;
padding:20px;

ul {
    list-style-type: none;
  }
`;
export const SubOrderFrame = styled.div`
display:flex;
flex-direction:column;
padding:40px;

div{
    display:flex;
    justify-content: space-between
}
span{
    padding:15px 10px 0px 10px; 
}
`;
