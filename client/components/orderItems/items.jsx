import {useState} from 'react';
import CartProduct from '../shared/cart/CartProduct';
import {ProceedButton} from '../UI/Button';
import TextInput from '../UI/TextInput';
import {OrderItemsFrame, SubOrderFrame} from './items.style';

const OrderItems = ({items, subTotal, discount, total, checkCoupon}) => {
  const [data, setData] = useState ();

  const handleChange = e => {
    setData (e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault ();
    checkCoupon (data);
  };

  return (
    <OrderItemsFrame>
      <ul>
        {items.map (item => {
          return (
            <li div key={item.id}>
              <CartProduct item={item} />
            </li>
          );
        })}
      </ul>
      <SubOrderFrame>
        <div>
          <TextInput
            display="inline"
            type="text"
            margin="0.2rem"
            padding="0.4rem"
            placeholder="Add Coupon"
            onChange={handleChange}
          />
          <ProceedButton onClick={handleSubmit} padding="0.5rem" width="20%">
            Apply
          </ProceedButton>
        </div>
        <div>
          <span> SubTotal : </span>
          <span>${subTotal}</span>
        </div>
        <div>
          <span> Discount :</span>
          <span> ${discount}</span>

        </div>
        <div>
          <span> Total : </span>
          <span> ${total}</span>

        </div>
      </SubOrderFrame>
    </OrderItemsFrame>
  );
};

export default OrderItems;
