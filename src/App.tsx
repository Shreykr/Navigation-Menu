import { useState } from "react";
import { Home } from "@src/pages";
import { createGlobalStyle } from "styled-components";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  body{
    
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Home />
      </div>
    </>
  );
}

export default App;
