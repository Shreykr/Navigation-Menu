import React from "react";
import { OptionWrapper } from "./styles";
import { Icons } from "@components/atoms";
import { Label } from "@components/atoms";
import Props from "@features/InterfacesReusable/interface";
import OptionProps from "./interface";

const Option: React.FC<Props & OptionProps> = ({
  iconName,
  color,
  tag,
  children,
  activeState,
  onToggle,
  indexs,
}) => {
  return (
    <OptionWrapper activeState={activeState} indexs={indexs}>
      <div className='third-container ' onClick={() => onToggle(indexs)}>
        <Icons color={color} iconName={iconName} tag={tag} />
        <Label color={color} tag={tag}>
          {children}
        </Label>
      </div>
    </OptionWrapper>
  );
};

export default Option;
