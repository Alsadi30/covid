import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px 0px;
  display: flex;
`;

export const SideBar = styled.div`
  width: 300px;
  height: 100%;
`;

export const SidebarTitle = styled.h1`
  font-size: 18px;
  font-width: 700;
  text-color: #272343;
`;

export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 0;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 16px;
  color: #272343;
  background: #ffffff;
  cursor: pointer;
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  box-sizing: border-box;
  color: #272343;
  font-size: 16px;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
`;

export const pricerWrapper = styled.div`
  dislplay: flex;
`;

export const Input = styled.input`
  outline: none;
  color: #272343;
  font-size: 16px;
  border: 2px solid #029fae;
  border-radius: 3px;
  margin: 2px;
  padding: 2px;
  width: 88px;
`;
export const MainWrapper = styled.div`
  display: grid | inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;
