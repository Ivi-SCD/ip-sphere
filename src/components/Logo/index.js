import logo from "../../images/logo.svg";
import "./style.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="ipsphere-logo" className="logo-img"></img>
      <p>
        ip<strong>Sphere</strong>
      </p>
    </div>
  );
}

export default Logo;
