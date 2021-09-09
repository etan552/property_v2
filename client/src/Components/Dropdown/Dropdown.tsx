import React, { useState } from "react";
import { DropdownItem } from "../DropdownItem/DropdownItem";
import { ArrowDropDownRounded } from "@material-ui/icons";
import "./style.css";

interface DropdownProps {
  options: string[];
  initialOption?: number;
  width?: number;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  initialOption = 0,
  width = 150,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(initialOption);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (idx: number) => {
    setIsOpen(!isOpen);
    setSelectedIdx(idx);
  };

  return (
    <div className="drop-down" style={{ width }}>
      {/* drop down - input */}
      <div className="input-box" onClick={() => handleClick()}>
        <input className="text" value={options[selectedIdx]} />
        <span className="select-arrow">
          <ArrowDropDownRounded style={{ color: "green" }} />
        </span>
      </div>

      {/* drop down - menu */}
      <div
        className={`drop-down-wrapper ${isOpen ? "show" : "hide"}`}
        style={{ width: width - 10 }}
      >
        {options.map((option, idx) => (
          <DropdownItem
            key={idx}
            idx={idx}
            selected={selectedIdx === idx ? true : false}
            handleSelect={handleSelect}
            width={width - 10}
          >
            {option}
          </DropdownItem>
        ))}
      </div>
    </div>
  );
};
