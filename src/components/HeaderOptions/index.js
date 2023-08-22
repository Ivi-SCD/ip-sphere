import "./style.css";

const optionsText = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function HeaderOptions() {
  return (
    <ul className="options">
      {optionsText.map((text) => (
        <li className="options-item">
          <p className>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default HeaderOptions;
