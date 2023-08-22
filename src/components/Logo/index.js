import logo from "../../images/logo.svg";
import "./style.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="ipsphere-logo"></img>
      <p>
        ip<strong>Sphere</strong>
      </p>
    </div>
  );
}

export default Logo;
