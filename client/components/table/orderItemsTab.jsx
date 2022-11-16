import React, { useEffect, useState } from 'react';
import {
    STable,
    STBody,
    STBodyTR,
    STD,
    STH,
    STHead,
    STHeadTR
} from './table.style';

const OrderItemTab = ({data}) => {
  const [order, setOrder] = useState (null);
  useEffect (
    () => {
      setOrder (data);
    },
    [data]
  );

  const head = ['PRODUCT NAME', 'QUANTITY'];
  return (
    <STable>
      <STHead>
        <STHeadTR>
          {head.map ((item, index) => <STH key={index}>{item}</STH>)}
        </STHeadTR>
      </STHead>
      <STBody>
        {order !== null
          ? order.map ((item, index) => (
              <STBodyTR key={index*Math.random(10)}>
                <STD key={index*Math.random(1000)}>
                  {item.attributes.product_id.data.attributes?.name}
                </STD>
                <STD key={index*Math.random(101)}>
                  {item.attributes.quantity}
                </STD>
              
              </STBodyTR>
            ))
          : null}
      </STBody>
    </STable>
  );
};

export default OrderItemTab;
