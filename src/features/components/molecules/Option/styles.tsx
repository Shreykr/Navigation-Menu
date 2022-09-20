import styled from "styled-components";
import OptionProps from "./interface";

export const OptionWrapper = styled.div.attrs(
  ({ activeState, indexs }: OptionProps) => ({
    activeState: activeState,
    indexs: indexs,
    className: activeState === indexs ? "active" : "",
  })
)`
  position: relative;
  height: 70px;
  width: 70px;
  z-index: 1;

  .third-container {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
