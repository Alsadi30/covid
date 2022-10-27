import styled from "styled-components";
import breakpoint from "../common/breackpoints";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const profileWrapper = styled.section`
  display: grid;
  grid-template-columns: 4fr 8fr;
  padding: 0px 50px;
  grid-column-gap: 20px
  grid-row-gap: 20px
  justify-items: stretch
  align-items: stretch
  @media only screen and ${breakpoint.device.sm}{
    display: grid;
    grid-template-columns: 4fr 8fr;
}
`;

export const asideBar = styled.div``;
