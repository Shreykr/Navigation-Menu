import React from "react";
import { NavTemplateWrapper } from "./styles";
import { Nav } from "@components/organisms";
import Props from "@features/InterfacesReusable/interface";

const Home: React.FC<Props> = ({ data }) => {
  return (
    <NavTemplateWrapper>
      <Nav data={data} />
    </NavTemplateWrapper>
  );
};

export default Home;
