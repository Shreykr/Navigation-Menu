import React from "react";
import { LabelWrapper } from "./styles";
import Props from "./interface";

const Label: React.FC<Props> = ({ htmlFor, children, color, tag }) => {
  return (
    <LabelWrapper color={color} htmlFor={htmlFor} tag={tag}>
      {children}
    </LabelWrapper>
  );
};

export default Label;
