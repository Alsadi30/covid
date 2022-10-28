import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
`
export const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => props.direction ? props.direction : ''};
`

export const FlexCenterD = styled.div`
    display: flex;
    // align-items: center;
    flex-direction: column;
`

export const FlexContentSpace = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.bg ? props.bg : ''}

    img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    button {
        background-color: #F0F2F3;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        margin: 0 7px;
    }

    h3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 120%;
        color: #272343;
    }

    input {
        padding: 10px 5px;
        width: 250px;
        border-radius: 7px;
        border: 1px solid #cbcdd4;
    }

    input:focus {
        outline: none;
    }

`

export const FlexContentAround = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        list-style: none;
        display: flex;
    }

    a {
        margin: 0 10px;
        font-family: 'Roboto', sans-sarif;
    }
`