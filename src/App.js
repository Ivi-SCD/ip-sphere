import Header from "./components/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  color: white;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, rgb(18, 0, 20), rgb(0, 0, 0));
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
