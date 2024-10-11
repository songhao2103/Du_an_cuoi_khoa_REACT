import styled from "styled-components";
import BoxRight from "./BoxRight";
import Logo from "./Logo";
import Navigation from "./Navigation";
  
const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 72px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  width: 2090px;
  padding: 0 400px;
  transform: translateX(-400px);
`;

const Header = () => {
  return (
    <BoxHeader>
      <Logo></Logo>
      <Navigation></Navigation>
      <BoxRight></BoxRight>
    </BoxHeader>
  );
};
export default Header;
