import { useStoreState } from "easy-peasy";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FlexContentSpace } from "../../styles/Flex.styled";
import Cart from "../cart";
import { useRouter } from 'next/router'

const Topbar = () => {
 
  const router = useRouter()

 const [filterValue, setfilterValue] = useState('')
 
  const { AuthToken } = useStoreState((state) => state.Auth);

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


  return (
    <>
      <FlexContentSpace bg="#F0F2F3">
        <Link href="/">
          <a style={{ cursor: "pointer", fontSize: "22px", fontWeight: "500" }}>
            Covid 19 Shop
          </a>
        </Link>

        <form onSubmit = {handleSubmit} >
          <input onChange={handleChange} type="search" placeholder="Search here.."></input>
        </form>

        <div>
          <button onClick={showDrawer}>
            <AiOutlineShoppingCart size="25"></AiOutlineShoppingCart>
          </button>
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
