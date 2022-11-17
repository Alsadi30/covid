import styled from 'styled-components';

export const ProductWrapper = styled.div`
  padding: 80px 150px;
  display: flex;
  gap: 20px;
`;

export const ProductContent = styled.div`
  h1 {
    font-size: 20px;
  }
 
  div select{
    padding: 10px 0px;
    margin:10px;
  }
`;

export const Input = styled.input`
  outline: none;
  color: #272343;
  font-size: 16px;
  border: 2px solid #029fae;
  border-radius: 3px;
  margin: 2px;
  padding: 2px;
  width: 200px;
`;

export const ProductTitle = styled.h1`
  font-size: 20px;
`;
