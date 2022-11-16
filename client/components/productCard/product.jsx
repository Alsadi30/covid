import { useStoreActions, useStoreState } from "easy-peasy";
import Link from "next/link";
import { BsFillCartPlusFill } from "react-icons/bs";
import styled from "styled-components";
import { FlexCenter, FlexContentSpace } from "../styles/Flex.styled";
import { Box } from "./product.style";



const Product = ({ product }) => {
  const { AuthToken } = useStoreState((state) => state.Auth);
  const { AddProductNoAuth, AddProductThunk } = useStoreActions(
    (actions) => actions.Cart
  );

  const handleAddToCart = () => {
    let cartItem = {
      productId: product.id,
      name: product.attributes.name,
      thumbnail: product.attributes.thumbnails.data[0].attributes.url,
      price: product.attributes.variants.data[0].attributes.sale_price?product.attributes.variants.data[0].attributes.sale_price:product.attributes.variants.data[0].attributes.regular_price,
    }
    if (AuthToken) {
      AddProductThunk(cartItem);
    } else {
      AddProductNoAuth(cartItem);
    }
  };


  return (
    <Box>
      <FlexCenter>
        <img src={product.attributes.thumbnails.data[0].attributes.url} alt={product?.attributes.name}></img>
      </FlexCenter>
      <FlexContentSpace>
        <div>
          <h4><Link href={`/product/${product.attributes.slug}`} >{product.attributes.name}</Link></h4>
          <p>${product.attributes.variants.data[0].attributes.sale_price?product.attributes.variants.data[0].attributes.sale_price:product.attributes.variants.data[0].attributes.regular_price}</p>
        </div>
        <div>
          <button onClick={handleAddToCart}>
            <BsFillCartPlusFill size="35" color="#007580"></BsFillCartPlusFill>
          </button>
        </div>
      </FlexContentSpace>
    </Box>
  );
};

export default Product;
