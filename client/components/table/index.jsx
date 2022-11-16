import React from 'react';
import {
  STable,
  STBody,
  STBodyTR,
  STD,
  STH,
  STHead,
  STHeadTR,
} from './table.style';
import format from 'date-fns/format';
import Link from 'next/link';

const Table = ({data}) => {
  const head = ['OrderID', 'OrderTime', 'Status', 'Payment', 'Total', 'Action'];

  return (
    <STable>
      <STHead>
        <STHeadTR>
          {head.map ((item, index) => (
            <STH key={index * Math.random (100)}>{item}</STH>
          ))}
        </STHeadTR>
      </STHead>
      <STBody>
        {data.map ((item, index) => (
          <STBodyTR key={index * Math.random (100)}>
            <STD key={index * Math.random (100)}>{item.id}</STD>
            <STD key={index * Math.random (100)}>
              {format (Date.parse (item.attributes.createdAt), 'MMM do, yyyy')}
            </STD>
            <STD key={index * Math.random (100)}>
              {item.attributes.delivery ? 'Delivered' : 'Panding'}
            </STD>
            <STD key={index * Math.random (100)}>{item.attributes.status}</STD>
            <STD key={index * Math.random (100)}>
              {item.attributes.total_price}
            </STD>
            <STD key={index * Math.random (100)}>
              <Link href={`/dashboard/${item.id}`}> Details </Link>
            </STD>
          </STBodyTR>
        ))}
      </STBody>
    </STable>
  );
};

export default Table;
