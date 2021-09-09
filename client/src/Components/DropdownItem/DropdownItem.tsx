import React from "react";
import "./style.css";

interface DropdownItemProps {
  idx: number;
  selected: boolean;
  width: number;
  handleSelect: (idx: number) => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  idx,
  selected,
  handleSelect,
  width,
}) => {
  return (
    <div
      className={`item ${selected ? "selected" : ""}`}
      style={{ width }}
      onClick={() => handleSelect(idx)}
    >
      {children}
    </div>
  );
};
