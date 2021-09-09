import React from "react";
import { useState } from "react";
import { NavItem } from "../Components/NavItem/NavItem";

interface SideNavProps {}

const items = ["Rental", "Apartment", "House", "Sales"];
const color = "green";
const width = 200;

export const SideNav: React.FC<SideNavProps> = ({}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="side-nav">
      {items.map((item, idx) => (
        <NavItem
          variant={color}
          width={width}
          idx={idx}
          key={idx}
          selectedIdx={selectedIdx}
          handleClick={setSelectedIdx}
        >
          {item}
        </NavItem>
      ))}
    </div>
  );
};
