import Logo from "../../components/Logo";
import HeaderOptions from "../../components/HeaderOptions";
import HeaderIcons from "../../components/HeaderIcons";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  );
}

export default Header;
