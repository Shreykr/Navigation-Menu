import styled from "styled-components";
import { OptionWrapper } from "@components/molecules/Option/styles";
import IconInterface from "./interface";

export const IconWrapper = styled.div<IconInterface>`
  ${(props) =>
    props.tag === "nav" &&
    `
    position : "relative";
    display: block;
    line-height: 75px;
    font-size: 30px;
    text-align: center;
    transition: 0.5s;
    color: ${props.color || "black"};

    ${OptionWrapper}.active & {
      transform: translateY(-35px);
      color: ${props.color || "#FCF951FF"};
    }
  `}
`;
