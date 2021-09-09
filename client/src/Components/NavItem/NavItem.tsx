import React, { Dispatch, SetStateAction } from "react";
import "./style.css";

interface NavItemProps {
  variant: "red" | "blue" | "green";
  width: number;
  idx: number;
  selectedIdx: number;
  handleClick: Dispatch<SetStateAction<number>>;
}

export const NavItem: React.FC<NavItemProps> = ({
  children,
  variant,
  width,
  idx,
  selectedIdx,
  handleClick,
}) => {
  return (
    <div
      className={`nav-item ${variant} ${selectedIdx === idx ? "selected" : ""}`}
      style={{ width }}
      onClick={() => handleClick(idx)}
    >
      <div>{children}</div>
      <span className="highlight"></span>
    </div>
  );
};
