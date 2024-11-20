import { useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import jsonData from "../../data.json";

const Nav = () => {
  // TODO: WORK ON SIDE-BAR
  // const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  return (
    <nav className="flex justify-between items-center py-5 px-8" id="nav">
      <div className="left">
        <h1 className="text-lg font-thin font-heading">{jsonData.name} </h1>
        <div className="h-[2px] w-full bg-white/20"></div>
      </div>
      <HiBars2 size={34} className="cursor-pointer" />
    </nav>
  );
};

export default Nav;
