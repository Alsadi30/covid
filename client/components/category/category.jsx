import {useState} from 'react';
import ProductCards from '../productCard/products';
import Button from '../UI/Button';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  Input,
  ListItem,
  PricerWrapper,
  SideBar,
  SidebarTitle,
  Wrapper,
} from './elements.style';

function SingleCategory({products}) {
  const [isOpen, setIsOpen] = useState (false);
  const toggling = () => setIsOpen (!isOpen);
  return (
    <Wrapper>
      <SideBar>
        <SidebarTitle>Shop Sidebar</SidebarTitle>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>Brand</DropDownHeader>
          {isOpen &&
            <DropDownListContainer>
              <DropDownList>
                <ListItem>Mangoes</ListItem>
                <ListItem>Apples</ListItem>
                <ListItem>Oranges</ListItem>
              </DropDownList>
            </DropDownListContainer>}
        </DropDownContainer>
        <PricerWrapper>
          <Input placeholder="min price" />
          <Input placeholder="max price" />
          <Button bg="#029FAE">Filter</Button>
        </PricerWrapper>
      </SideBar>
      <div style={{width: '80%'}}>
        <ProductCards products={products} heading={'Category Products'} />
      </div>
    </Wrapper>
  );
}

export default SingleCategory;
