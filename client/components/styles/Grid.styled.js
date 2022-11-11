import styled from "styled-components";

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
    // padding: 0 30px;

    img {
        height: auto;
        max-width: 100%;
        object-fit: cover;
    }

    h4 {
        color: #007580;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 130%;
        text-transform: capitalize;
    }

    p {
        font-weight: 700;
        font-size: 24px;
        opacity: 0.8;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
        height: auto;
        max-width: 100%;
        object-fit: cover;
    }
`

export const GridFraction = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;

    li {
        list-style: none;
        font-size: 16px;
        padding: 4px 0;
        cursor: pointer;

        &:hover {
            color: #029FAE;
        }
    }
`