import styled from "styled-components";
import Props from "@features/InterfacesReusable/interface";
import { OptionWrapper } from "@components/molecules/Option/styles";

export const LabelWrapper = styled.label.attrs(({ htmlFor }) => ({
  htmlFor: htmlFor,
}))<Props>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.height || "0.75em"};
  font-family: "Poppins", sans-serif;
  ${(props) =>
    props.tag === "nav" &&
    `
    // position: relative;
    position: absolute;
    // top:-27px;
    font-weight: 400;
    letter-spacing: 0.05em;
    transition:0.5s;
    user-select:none;
    opacity:0;
    // transform: translateY(0px);
    transform: translateY(20px);

    ${OptionWrapper}.active & {
      opacity:1;
      transform: translateY(10px);
      // transform: translateY(-35px);
    }
  `}
`;
