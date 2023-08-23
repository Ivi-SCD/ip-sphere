import styled from "styled-components";

const optionsText = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const Options = styled.ul`
  display: flex;
  align-items: center;
`;

const OptionsItem = styled.li`
  font-size: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1.5em;
  cursor: pointer;
`;

function HeaderOptions() {
  return (
    <Options>
      {optionsText.map((text) => (
        <OptionsItem>
          <p className>{text}</p>
        </OptionsItem>
      ))}
    </Options>
  );
}

export default HeaderOptions;
