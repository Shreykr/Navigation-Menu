import { useState } from "react";
import { Home } from "@src/pages";
import { createGlobalStyle } from "styled-components";
import GithubCorner from "react-github-corner";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  body{
  }
`;

function App() {
  return (
    <>
      <GithubCorner
        href='https://navigation-menu-1.netlify.app/'
        bannerColor='#fff'
        octoColor='#000'
        size={80}
        direction='right'
      />
      <GlobalStyle />
      <div className='App'>
        <Home />
      </div>
    </>
  );
}

export default App;
