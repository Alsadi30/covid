import {
  Input,
  ProductContent,
  ProductTitle,
  ProductWrapper,
} from "../productCard/singleProductElements";
import { Container } from "../styles/Container.styled";
import Button from "../UI/Button";
import RelatedProduct from "./relatedProduct";
import { ProductSlide } from "./singleProductSlider";
function SingleProductCard() {
  return (
    <>
      <ProductWrapper>
        <div style={{ width: "500px" }}>
          <img
            src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
            alt=""
          />
          <ProductSlide />
        </div>
        <ProductContent>
          <strong>Laptop</strong>
          <ProductTitle>Dell Laptop 234HP</ProductTitle>
          <p>
            Brand: <strong>Dell</strong>
          </p>
          <p>
            An apple mobile which is nothing like apple, Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Esse, fugiat!
          </p>
          <Input type="number" />
          <div>
            <Button>Add To Card</Button>
            <Button>Boy Now</Button>
          </div>
        </ProductContent>
      </ProductWrapper>
      <Container>
        <RelatedProduct />
      </Container>
    </>
  );
}

export default SingleProductCard;
