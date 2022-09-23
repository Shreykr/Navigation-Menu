import { useState } from "react";
import { HomePage } from "@src/pages";
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
        href='https://github.com/Shreykr/Navigation-Menu'
        bannerColor='#fff'
        octoColor='#000'
        size={80}
        direction='right'
      />
      <GlobalStyle />
      <div className='App'>
        <HomePage />
      </div>
    </>
  );
}

export default App;
