import { useStoreState } from "easy-peasy";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FlexContentSpace } from "../../styles/Flex.styled";
import Cart from "../cart";
import { useRouter } from 'next/router';
import styled from "styled-components";
import { Badge } from "antd";

const Form = styled.form`
    input {
      padding: 10px;

      &:focus {
        border: 1px solid #029FAE;
      }
    }
`

const Topbar = () => {

  const router = useRouter()

  const [filterValue, setfilterValue] = useState('')

  const { AuthToken } = useStoreState((state) => state.Auth);
  const { CartProducts } = useStoreState(state => state.Cart);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { value } = event.target
    setfilterValue(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (filterValue !== '') {
      const words = filterValue.split(' ');
      const joined = words.join('-')
      router.push(`/filter/${joined}`)
    } else {
      alert('Set a value to filter')
    }
  }


  const totalCount = CartProducts.reduce((acc , curr) => {
    return acc + curr.quentity;
}, 0)


  return (
    <>
      <FlexContentSpace bg="#F0F2F3" padding="15px 50px">
        <Link href="/">
          <a style={{ cursor: "pointer", fontSize: "22px", fontWeight: "500", color: '#029FAE' }}>
            Covid 19 Shop
          </a>
        </Link>

        <Form onSubmit={handleSubmit} >
          <input onChange={handleChange} type="search" placeholder="Search here.."></input>
        </Form>

        <div>
          <Badge count={totalCount} style={{marginRight: '7px'}}>
            <button onClick={showDrawer}>
              <AiOutlineShoppingCart size="25"></AiOutlineShoppingCart>
            </button>
          </Badge>
          {AuthToken ? (
            <Link href="/dashboard">
              <button>
                <CgProfile size="25"></CgProfile>
              </button>
            </Link>
          ) : (
            <Link href="/login">
              <button>
                <CgProfile size="25"></CgProfile>
              </button>
            </Link>
          )}
        </div>
      </FlexContentSpace>
      <Cart onClose={onClose} open={open} />
    </>
  );
};

export default Topbar;
