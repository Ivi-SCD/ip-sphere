import Logo from "../../components/Logo";
import HeaderOptions from "../../components/HeaderOptions";
import HeaderIcons from "../../components/HeaderIcons";
import "./style.css";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </header>
  );
}

export default Header;
