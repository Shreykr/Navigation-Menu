import styled from "styled-components";
import { OptionWrapper } from "@components/molecules/Option/styles";

export const IndicatorWrapper = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  background: #13d213;
  border-radius: 50%;
  border: 6px solid #121212;
  transform: translateY(-46px) translateX(-6px);
  transition: 0.5s;

  &::before {
    content: "";
    position: absolute;
    top: 57.2%;
    left: -20px;
    width: 20px;
    height: 20px;
    background: #e8080800;
    border-top-right-radius: 100%;
    box-shadow: 2px -10px 0 0 #121212;
  }

  &::after {
    content: "";
    position: absolute;
    top: 57.2%;
    left: 70.5px;
    width: 20px;
    height: 20px;
    background: #e8080800;
    border-top-left-radius: 100%;
    box-shadow: -1px -10px 0 0 #121212;
  }

  ${OptionWrapper}.active:nth-child(1) ~ & {
    transform: translateY(-46px) translateX(-6px);
  }
  ${OptionWrapper}.active:nth-child(2) ~ & {
    transform: translateY(-46px) translateX(63px);
  }

  ${OptionWrapper}.active:nth-child(3) ~ & {
    transform: translateY(-46px) translateX(133px);
  }
  ${OptionWrapper}.active:nth-child(4) ~ & {
    transform: translateY(-46px) translateX(203px);
  }
  ${OptionWrapper}.active:nth-child(5) ~ & {
    transform: translateY(-46px) translateX(274px);
  }
`;
