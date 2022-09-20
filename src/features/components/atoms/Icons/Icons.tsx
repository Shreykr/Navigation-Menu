import React from "react";

import { AiOutlineHome } from "react-icons/Ai";
import { BsPerson, BsChat } from "react-icons/bs";
import { IoCameraOutline, IoSettingsOutline } from "react-icons/io5";
import Props from "@features/InterfacesReusable/interface";
import { IconWrapper } from "./styles";

const Icons: React.FC<Props> = ({ iconName, color, tag }) => {
  return (
    <IconWrapper color={color} tag={tag}>
      {iconName === "AiOH" && <AiOutlineHome />}
      {iconName === "BsP" && <BsPerson />}
      {iconName === "BsC" && <BsChat />}
      {iconName === "IoCO" && <IoCameraOutline />}
      {iconName === "IoSO" && <IoSettingsOutline />}
    </IconWrapper>
  );
};

export default Icons;
