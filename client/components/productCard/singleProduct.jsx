import {
  Input,
  ProductContent,
  ProductTitle,
  ProductWrapper,
} from '../productCard/singleProductElements';
import {Container} from '../styles/Container.styled';
import Button from '../UI/Button';
import RelatedProduct from './relatedProduct';
import {ProductSlide} from './singleProductSlider';
function SingleProductCard({product}) {
  return (
    <div>
      <ProductWrapper>
        <div style={{width: '500px'}}>
          <img
            src={product.attributes.thumbnails.data[0].attributes.url}
            alt={product?.attributes.name}
          />
          <ProductSlide />
        </div>
        <ProductContent>
          {/* <strong>{product.attributes.name}</strong> */}
          <ProductTitle>{product.attributes.name}</ProductTitle>

          <p>
            {product.attributes.variants.data[0].attributes.description}
          </p>
          <p>
            $
            {product.attributes.variants.data[0].attributes.sale_price
              ? product.attributes.variants.data[0].attributes.sale_price
              : product.attributes.variants.data[0].attributes.regular_price}
          </p>
          <div>
            {product.attributes.variants.data[0].attributes.attr.name}
            {' '}
            :
            {' '}
            {product.attributes.variants.data[0].attributes.attr.value}
          </div>
          {/* <Input type="number" /> */}
          <div>
            <Button>Add To Card</Button>
            <Button>Buy Now</Button>
          </div>
        </ProductContent>
      </ProductWrapper>
      <Container>
        <RelatedProduct />
      </Container>
    </div>
  );
}

export default SingleProductCard;
