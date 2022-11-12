import styled from 'styled-components';

export const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${props => props.imagePath});
  background-color: #F0F2F3;
  max-width: 100%;
  height: 400px;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  padding: 50px;
  background-origin: content-box;
  margin: 0 auto;
  border: none;

  h1 {
    font-size: 3rem;
    max-width: 50%;
    line-height: 1.1;
  }
`;