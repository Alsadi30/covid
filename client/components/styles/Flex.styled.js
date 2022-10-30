import styled from "styled-components";

export const Stack = styled.div`
    display: flex;

`

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

export const FlexEnd = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
    background-color: ${(props) => props.bg ? props.bg : ''};
    padding: 15px 50px;

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
        padding: 8px 5px;
        width: 350px;
        border-radius: 7px;
        border: 1px solid #cbcdd4;
        font-size: 16px;
    }

    input:focus {
        outline: none;
    }

`

export const FlexContentAround = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px 10px 50px;

    ul {
        display: flex;
        list-style: none;
    }

    a {
        margin: 0 10px;
        font-family: 'Roboto', sans-sarif;
        color: black;

        &:hover {
            color: #029FAE;
        }
    }
`
