import CartProduct from "../shared/cart/CartProduct";
import styled from "styled-components";
import { ProceedButton } from "../UI/Button";
import TextInput from "../UI/TextInput";
import { useState } from "react";

const OrderItemsFrame = styled.div`
display:flex;
flex-direction:column;
max-width: 560px;
width: 100%;
border: 1px solid #e6e6e6;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
margin-left:50px;
padding:20px;

ul {
    list-style-type: none;
  }
`
const SubOrderFrame = styled.div`
display:flex;
flex-direction:column;
padding:40px;

div{
    display:flex;
    justify-content: space-between
}
span{
    padding:15px 10px 0px 10px; 
}
`

const OrderItems = ({items,subTotal, discount, total,checkCoupon}) => {

    const [data,setData] = useState()

    const handleChange = (e) => {
     console.log(e.target.value)
    setData(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        checkCoupon(data)
    }

    return (
        <OrderItemsFrame>
    <ul>
               {
                    items?.map(item =>
                        {
                            return(
                                <li div key={item.id}>
                                   <CartProduct item={item} />
                                </li>
                            )
                        }
                        )
                }
            </ul>
            <SubOrderFrame>
                <div>
                    <TextInput display='inline' type="text" margin='0.2rem' padding= '0.4rem' placeholder="Add Coupon" onChange={handleChange} /> 
                    <ProceedButton onClick={handleSubmit} padding='0.5rem' width= "20%" >Apply</ProceedButton>
                </div>
            <div>
                    <span>  SubTotal : </span>
                    <span>${subTotal}</span>
            </div>
                <div>
                <span>   Discount :</span>
                    <span>  ${discount}</span>
              
            </div>
                <div>
                <span>   Total : </span>
                    <span>    ${total}</span>
             
                </div>
                </SubOrderFrame>
        </OrderItemsFrame>
    );
};



export default OrderItems