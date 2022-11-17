import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import {
  ProductContent,
  ProductTitle,
  ProductWrapper
} from '../productCard/singleProductElements';
import { Container } from '../styles/Container.styled';
import Button from '../UI/Button';


function SingleProductCard({ product }) {

  const { AuthToken } = useStoreState(state => state.Auth)
  const { AddProductNoAuth, AddProductThunk } = useStoreActions(
    (actions) => actions.Cart
  );

  const [price,setPrice] = useState(product.attributes.variants.data[0].attributes.sale_price
    ? product.attributes.variants.data[0].attributes.sale_price
    : product.attributes.variants.data[0].attributes.regular_price)
  
  const [variant, setVariant] = useState(product.attributes.variants.data[0].attributes.attr.value)

  const handleChange = (e) => {
    setVariant(e.target.value)
  }
  
  
  useEffect(() => {
    product.attributes.variants.data.map((item, i) => { 

      if (item.attributes.attr.value === variant) {
  
       setPrice(item.attributes.sale_price?item.attributes.sale_price:item.attributes.regular_price)
     }
    })
  
    
  }, [variant])
  
  

  const handleAddToCart = () => {
    let cartItem = {
      productId: product.id,
      name: product.attributes.name,
      thumbnail: product.attributes.thumbnails.data[0].attributes.url,
      price: price
    }
    if (AuthToken) {
      AddProductThunk(cartItem);
    } else {
      AddProductNoAuth(cartItem);
    }
  };






  return (
    <Container>
      <ProductWrapper>
        <div style={{width: '500px'}}>
          <img
            src={product.attributes.thumbnails.data[0].attributes.url}
            alt={product?.attributes.name}
          />
       
        </div>
        <ProductContent>
          <ProductTitle>{product.attributes.name}</ProductTitle>

          <div>
            {product.attributes.variants.data[0].attributes.description}
          </div>
          <div>
            $
            {price}
          </div>
          <div>
            {product.attributes.variants.data[0].attributes.attr.name}
            {' '}
            :
          <select onChange={handleChange}>
            {product.attributes.variants.data.map((item, i) => {
            return <option kay={i} value={item.attributes.attr.value}>{item.attributes.attr.value}</option>
            })}
            </select>
          </div>
        
         
          <button onClick={handleAddToCart}>
            <BsFillCartPlusFill size="35" color="#007580"></BsFillCartPlusFill>
          </button>
          
        </ProductContent>
      </ProductWrapper>
      
    </Container>
  );
}

export default SingleProductCard;
