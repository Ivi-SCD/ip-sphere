import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "./data";

const SearchContainer = styled.section`
  background-image: linear-gradient(5deg, #49002a, #03001c 99.5%);
  color: #fff;
  text-align: center;
  padding: 2em 0;
  height: 50em;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2.5em;
  font-weight: 700;
  width: 100%;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: #fff;
  font-size: 1.5em;
  font-weight: 400;
  width: 100%;
  text-align: center;
  padding: 0 0 0.4em 0;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  padding: 1.5em;

  img {
    width: 100px;
  }

  p {
    width: 200px;
  }

  &:hover {
    border: 0.1em solid white;
    border-radius: 1em;
    transition: 2s;

    img {
      width: 110px;
    }
  }
`;

const ContainerResultados = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 2em 0 0 0.5em;
`;

function Search() {
  const [searchedBooks, setsearchedBooks] = useState([]);

  return (
    <SearchContainer>
      <Title>Don't you know how to start?</Title>
      <Subtitle>Find your favorite books!</Subtitle>
      <Input
        placeholder="Choose your next book ..."
        onBlur={(evento) => {
          const texto = evento.target.value;
          const booksFiltrados = books.filter((book) =>
            book.nome.toLowerCase().includes(texto.toLowerCase())
          );
          setsearchedBooks(booksFiltrados);
        }}
      />
      {searchedBooks.map((book) => (
        <ContainerResultados>
          <Resultado>
            <p>{book.nome}</p>
            <img src={book.src} alt={book.nome} />
          </Resultado>
        </ContainerResultados>
      ))}
    </SearchContainer>
  );
}

export default Search;
