import { useStoreActions, useStoreState } from "easy-peasy";
import { BsFillCartPlusFill } from "react-icons/bs";
import styled from "styled-components";
import { FlexContentSpace } from "../styles/Flex.styled";

const Box = styled.div`
    img {
      max-width: 100%;
      height: 350px;
      object-fit: cover;
    }
`

const Product = ({ product }) => {
  const { AuthToken } = useStoreState((state) => state.Auth);
  const { AddProductNoAuth, AddProductThunk } = useStoreActions(
    (actions) => actions.Cart
  );

  const handleAddToCart = () => {
    if (AuthToken) {
      AddProductThunk(product);
    } else {
      // AddProductThunk(product)
      AddProductNoAuth(product);
    }
  };

  console.log(product, 'product')

  return (
    <Box>
      <img src={product?.attributes.thumbnails.data[0].attributes.url} alt={product?.attributes.name}></img>
      <FlexContentSpace>
        <div>
          <h4>{product?.attributes.name}</h4>
          <p>${product?.attributes.variants.data[0].attributes.sale_price}</p>
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
