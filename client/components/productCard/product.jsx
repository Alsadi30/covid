import { BsFillCartPlusFill } from 'react-icons/bs';
import { FlexContentSpace } from '../styles/Flex.styled';

const Product = ({product}) =>{
    return (
       <>
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
                        </>
                 
    )
}

export default Product