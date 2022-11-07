import { useStoreState } from "easy-peasy";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FlexContentSpace } from "../../styles/Flex.styled";
import Cart from "../cart";

const Topbar = () => {
  const { AuthToken } = useStoreState((state) => state.Auth);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FlexContentSpace bg="#F0F2F3" padding="15px 50px">
        <Link href="/">
          <a style={{ cursor: "pointer", fontSize: "22px", fontWeight: "500" }}>
            Covid 19 Shop
          </a>
        </Link>

        <div>
          <input type="search" placeholder="Search here.."></input>
        </div>

        <div>
          <button onClick={showDrawer}>
            <AiOutlineShoppingCart size="25"></AiOutlineShoppingCart>
          </button>
          {AuthToken ? (
            <Link href="/checkout">
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
