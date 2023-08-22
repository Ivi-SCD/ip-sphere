import "./style.css";
import profileIcon from "../../images/profile.svg";
import cartIcon from "../../images/cart.svg";

const icons = [profileIcon, cartIcon];

function HeaderOptions() {
  return (
    <ul className="icons">
      {icons.map((icon) => (
        <li className="icons-item">
          <img src={icon}></img>
        </li>
      ))}
    </ul>
  );
}

export default HeaderOptions;
