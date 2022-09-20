import React from "react";
import { Option } from "@components/molecules";
import { NavWrapper } from "./styles";
import Indicator from "./Helpers/Indicator/Indicator";
import Props from "@features/InterfacesReusable/interface";

const Nav: React.FC<Props> = () => {
  const obj = [
    { iconName: "AiOH", content: "Home" },
    { iconName: "BsP", content: "Profile" },
    { iconName: "BsC", content: "Message" },
    { iconName: "IoCO", content: "Photos" },
    { iconName: "IoSO", content: "Settings" },
  ];
  const [activeState, setActiveState] = React.useState<number>(0);
  const toggle = (index: number) => setActiveState(index);
  return (
    <NavWrapper>
      <div className='primary-container'>
        {obj.map((object, index) => {
          return (
            <Option
              activeState={activeState}
              onToggle={toggle}
              iconName={object.iconName}
              tag='nav'
              indexs={index}
              key={index}>
              {object.content}
            </Option>
          );
        })}
        <Indicator />
      </div>
    </NavWrapper>
  );
};

export default Nav;
