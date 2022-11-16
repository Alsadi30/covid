import styled from 'styled-components';

export const Box = styled.div`
    // border: 1px solid #f4f4f4;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 7px;
    padding: 15px;

    img {
      max-width: 100%;
      margin-top: 15px;
      height: 250px;
      object-fit: cover;
    }

    button {
      transition: all 0.3s ease;
    }

    button:active {
      scale: 1.2;
    }
`;
