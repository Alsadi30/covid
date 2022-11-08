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
    padding: ${(props) => props.padding ? props.padding : ''};
    margin-top: ${(props) => props.mt ? props.mt : ''};

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
        line-height: 100%;
        color: #272343;
    }

    input {
        padding: 7x 7px;
        width: 350px;
        border-radius: 7px;
        border: 1px solid #cbcdd4;
        font-size: 14px;
    }

    input:focus {
        outline: none;
    }

`

export const FlexContentAround = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 50px 3px 30px;

    ul {
        display: flex;
        padding: 0px 10px;
        margin: 3px;
        list-style: none;
    }

    a {
        margin: 0 7px;
        font-family: 'Roboto', sans-sarif;
        color: black;
        font-size:16px;

        &:hover {
            color: #029FAE;
        }
    }
`
