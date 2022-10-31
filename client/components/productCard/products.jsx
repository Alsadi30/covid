import React from 'react';
import products from '../../staticData/products';
import { GridLayout } from '../styles/Grid.styled';
import Product from './product';

const ProductCards = () => {
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