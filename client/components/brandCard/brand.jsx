import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    img {
        max-width: 100%;
        height: 80px;
        object-fit: cover;
    }
`

const Brand = ({ brand }) => {
    console.log(brand, 'brand')
    return (
        <Box>
            <img src={brand.attributes.avater.data.attributes.url} alt={brand?.attributes.name}></img>
            <p>{ brand.attributes.name }</p>
        </Box>
    );
};

export default Brand;