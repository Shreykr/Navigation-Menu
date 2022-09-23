import React from "react";
import { Home } from "@components/templates";
import { HomePageWrapper } from "./styles";

const HomePage: React.FC<{}> = () => {
  const obj = [
    { iconName: "AiOH", content: "Home" },
    { iconName: "BsP", content: "Profile" },
    { iconName: "BsC", content: "Message" },
    { iconName: "IoCO", content: "Photos" },
    { iconName: "IoSO", content: "Settings" },
  ];
  return (
    <>
      <HomePageWrapper>
        <Home data={obj} />
      </HomePageWrapper>
    </>
  );
};

export default HomePage;
