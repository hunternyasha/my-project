import { NavLink, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className="background">
        <header>
          <NavLink to="/" className="navbar-brand">
            Nyasha Tanganyika
          </NavLink>
          <nav ref={navRef}>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/About" className="nav-link">
              About
            </NavLink>
            <NavLink to="/Projects" className="nav-link">
              My Work
            </NavLink>
            <NavLink to="/Contact" className="nav-link">
              Contact Me
            </NavLink>
          </nav>
          <div className="d-flex  ">
            <button className=" btn" onClick={showNavbar}>
              <Hamburger
                direction="right"
                color="#ffff"
                easing="ease-in"
                duration={0.7}
              />
            </button>
          </div>
        </header>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Navbar;
