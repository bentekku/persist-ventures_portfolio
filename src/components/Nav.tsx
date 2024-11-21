import { useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import jsonData from "../../data.json";

const Nav = () => {
  // Optional sidebar state (for later implementation)
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  return (
    <nav
      className="flex justify-between items-center py-4 px-6"
      id="nav"
      aria-label="Main navigation"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-thin font-heading">{jsonData.name}</h1>
        <div className="h-[1px] w-full bg-white/40"></div>
      </div>
      {/* Mobile Button */}
      <button
        aria-label="Open navigation menu"
        className="cursor-pointer lg:hidden"
        onClick={() => setIsSideBarOpen(true)}
      >
        <HiBars2 size={34} />
      </button>

      {/* Mobile menu - Show only on small screens */}
      {isSideBarOpen && (
        <div className="fixed inset-0 bg-black/[98%] z-50 flex justify-center items-center p-4">
          <button
            aria-label="Close navigation menu"
            className="text-white text-7xl absolute top-0 right-[3rem]"
            onClick={() => setIsSideBarOpen(false)}
          >
            &times;
          </button>
          <div className="flex flex-col items-center justify-center space-y-8 mt-16 font-content">
            <a
              href="#hero"
              className="text-white text-xl"
              onClick={() => setIsSideBarOpen(false)}
            >
              Home
            </a>
            <a
              href="#experiences"
              className="text-white text-xl"
              onClick={() => setIsSideBarOpen(false)}
            >
              Experiences
            </a>
            <a
              href="#education"
              className="text-white text-xl"
              onClick={() => setIsSideBarOpen(false)}
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-white text-xl"
              onClick={() => setIsSideBarOpen(false)}
            >
              Skills
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
