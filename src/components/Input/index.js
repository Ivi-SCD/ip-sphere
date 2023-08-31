import styled from "styled-components";

const Input = styled.input`
  border: 0.1em solid #ccc;
  background: transparent;
  border-radius: 10em;
  width: 25%;
  padding: 2.5em 7.5em;
  height: 1em;
  color: #fff;
  font-size: 0.75em;
  margin: 0 50em 5em 50em;
  font-style: italic;
  transition: all 0.6s ease-in-out;
  &::placeholder {
    color: #fff;
    font-size: 1.25em;
  }
`;

export default Input;
