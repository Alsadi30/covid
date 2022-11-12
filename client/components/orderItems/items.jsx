import OrderItem from "./item";
import styled from "styled-components";



const Box = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;

    p {
        font-size: 16px;
    }

    img {
      max-width: 100%;
      height: 50px;
      object-fit: cover;
    }
`;




const OrderItems = ({items}) => {

   
    return (
        <div>
    
               {
                    items?.map(item =>
                        {
                            return(
                                <div  key={item.id}>
                                    <OrderItem item={item} />
                                    </div>
                            )
                        }
                        )
                }
      
        </div>
    );
};



export default OrderItems