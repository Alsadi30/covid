import React from 'react';
import products from '../staticData/products';
import { GridLayout } from './styles/Grid.styled';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { FlexContentSpace } from './styles/Flex.styled';

const Product = () => {
    return (
        <>
            <h2>On Sale Products</h2>
            <GridLayout>
                {
                    products?.map(product => <div style={{padding: '0 20px'}}>
                        <img src={product?.image} alt={product?.title}></img>
                        <FlexContentSpace>
                            <div>
                                <h4>{product?.title}</h4>
                                <p>${product?.currentPrice}</p>
                            </div>
                            <div>
                                <button><BsFillCartPlusFill size="35" color="#007580"></BsFillCartPlusFill></button>
                            </div>
                        </FlexContentSpace>
                    </div>)
                }
            </GridLayout>
        </>
    );
};

export default Product;