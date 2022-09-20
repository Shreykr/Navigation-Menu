import styled from "styled-components";
import { OptionWrapper } from "@components/molecules/Option/styles";
import Props from "@features/InterfacesReusable/interface";

export const NavWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 400px;
  height: 70px;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  .primary-container {
    display: flex;
    width: 350px;
  }
`;
