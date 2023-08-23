import profileIcon from "../../images/profile.svg";
import cartIcon from "../../images/cart.svg";
import styled from "styled-components";

const IconItem = styled.li`
  margin-right: 3em;
  width: 2.5em;
  height: 2.5em;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

const icons = [profileIcon, cartIcon];

function HeaderOptions() {
  return (
    <Icons>
      {icons.map((icon) => (
        <IconItem>
          <img src={icon}></img>
        </IconItem>
      ))}
    </Icons>
  );
}

export default HeaderOptions;
