import { useState } from "react";
import { Container } from "../styles/Container.styled";
import Button from "../UI/Button";

import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  Input,
  ListItem,
  SideBar,
  SidebarTitle,
  Wrapper,
} from "./elements";

function SingleCategory() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <Container>
      <Wrapper>
        <SideBar>
          <SidebarTitle>Shop Sidebar</SidebarTitle>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>Brand</DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  <ListItem>Mangoes</ListItem>
                  <ListItem>Apples</ListItem>
                  <ListItem>Oranges</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
          <pricerWrapper>
            <Input placeholder="min price" />
            <Input placeholder="max price" />
            <Button bg="#029FAE">Filter</Button>
          </pricerWrapper>
        </SideBar>
      </Wrapper>
    </Container>
  );
}

export default SingleCategory;
