import { useState, useEffect } from "react";
import { HiBars2 } from "react-icons/hi2";
import jsonData from "../../data.json";

const Nav = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSideBarOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isSideBarOpen]);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth <= 1024) {
        if (currentScrollY > 50 && currentScrollY < lastScrollY) {
          setIsNavVisible(true); // Show nav when scrolling up
        } else {
          setIsNavVisible(false); // Hide nav when scrolling down
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsSideBarOpen(false); // Close the sidebar
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 bg-transparent backdrop-blur-sm transition-transform transition-opacity duration-300 ${
        isNavVisible || window.innerWidth > 1024
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
      id="nav"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-thin font-heading">{jsonData.name}</h1>
          <div className="h-[1px] w-full bg-white/40"></div>
        </div>

        <button
          aria-label="Open navigation menu"
          className="cursor-pointer lg:hidden"
          onClick={() => setIsSideBarOpen(true)}
        >
          <HiBars2 size={34} />
        </button>
      </div>

      {isSideBarOpen && (
        <div className="fixed inset-0 bg-black/[98%] z-50 flex justify-center items-center p-4 h-screen w-full">
          <button
            aria-label="Close navigation menu"
            className="text-white text-7xl absolute top-0 right-[3rem]"
            onClick={() => setIsSideBarOpen(false)}
          >
            &times;
          </button>
          <div className="flex flex-col items-center justify-center space-y-8 mt-16 font-content text-lg text-white font-semibold">
            <button onClick={() => scrollToSection("hero")}>Home</button>
            <button onClick={() => scrollToSection("experiences")}>
              Experiences
            </button>
            <button onClick={() => scrollToSection("education")}>
              Education
            </button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
