import React from "react";
import { Dropdown } from "../Components/Dropdown/Dropdown";
import { SideNav } from "./SideNav";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const dropDownOptions: string[] = [
    "Wellington",
    "Auckland",
    "Waikato",
    "Hawke's Bay",
  ];
  return (
    <div className="home-page">
      <Dropdown options={dropDownOptions}></Dropdown>
    </div>
  );
};
