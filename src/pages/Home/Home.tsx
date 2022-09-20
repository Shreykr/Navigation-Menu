import React from "react";
import { HomeWrapper } from "./styles";
import { Nav } from "@components/organisms";

const Home: React.FC<{}> = () => {
  return (
    <>
      <HomeWrapper>
        <Nav />
      </HomeWrapper>
    </>
  );
};

export default Home;
