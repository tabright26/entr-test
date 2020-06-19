import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

const AppWrapper = styled.div`
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: white;
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <MainContainer />
    </AppWrapper>
  );
}

export default App;
