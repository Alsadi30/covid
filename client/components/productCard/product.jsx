import { useStoreActions, useStoreState } from "easy-peasy";
import { BsFillCartPlusFill } from "react-icons/bs";
import styled from "styled-components";
import { FlexCenter, FlexContentSpace } from "../styles/Flex.styled";

const Box = styled.div`
    // border: 1px solid #f4f4f4;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 7px;
    padding: 15px;

    img {
      max-width: 100%;
      margin-top: 15px;
      height: 250px;
      object-fit: cover;
    }
`

const Product = ({ product }) => {
  const { AuthToken } = useStoreState((state) => state.Auth);
  const { AddProductNoAuth, AddProductThunk } = useStoreActions(
    (actions) => actions.Cart
  );

  console.log(product, 'products');

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
          <h4>{product.attributes.name}</h4>
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
