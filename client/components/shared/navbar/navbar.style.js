import styled from 'styled-components';

export const CategoryPara = styled.a`
    font-size: 18x;
    font-weight: 500;
    padding: 3px 10px 3px 10px;
    border: 1px solid #E1E3E6;
    border-radius: 6px;
    display: flex;
    align-items: center;

    ul li ul.dropdown{
        min-width: 100%; /* Set width of the dropdown */
        background: #f2f2f2;
        display: block;
        position: absolute;
        z-index: 999;
        left: 0;
    }
    ul li:hover ul.dropdown{
        display: block;	/* Display the dropdown */
    }
    ul li ul.dropdown li{
        display: block;
    }
`;
