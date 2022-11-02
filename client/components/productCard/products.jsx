import React from 'react';
import { GridLayout } from '../styles/Grid.styled';
import Product from './product';

const ProductCards = ({products}) => {
   
    return (
        <>
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
        </>
    );
};

export default ProductCards;