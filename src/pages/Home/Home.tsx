import React from "react";
import { HomeWrapper } from "./styles";
import { Nav } from "@components/organisms";

const Home: React.FC<{}> = () => {
  return (
    <>
      <HomeWrapper>
        <Nav color='red' iconName='GiHG' />
      </HomeWrapper>
    </>
  );
};

export default Home;
