import React from 'react';
import styled from 'styled-components';
import { GridLayout } from '../styles/Grid.styled';
import Product from './product';

const Box = styled.div`
    margin-top: 80px;
`

const ProductCards = ({products}) => {

    console.log(products, 'products');
   
    return (
        <Box>
            <h2>On Sale Products</h2>
            <GridLayout>
               {
                    products?.map(product =>
                        {
                            return(
                                <div style={{padding: '0 20px'}} key={product?.id}>
                                    <Product product={product} />
                                    </div>
                            )
                        }
                        )
                }
            </GridLayout>
        </Box>
    );
};

export default ProductCards;