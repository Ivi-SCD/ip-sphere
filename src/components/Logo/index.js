import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 1.25em;
  font-family: "Poppins", sans-serif;
  padding: 0.75em;

  img {
    width: 3.75em;
  }
`;

const LogoImage = styled.img`
  margin-right: 0.5em;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="ipsphere-logo" />
      <p>
        ip<strong>Sphere</strong>
      </p>
    </LogoContainer>
  );
}

export default Logo;
