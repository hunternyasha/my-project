import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import React, { useRef } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { AnimatePresence } from "framer-motion";
import Loading from "../components/Loading";
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Projects = React.lazy(() => import("./Projects"));
const Contact = React.lazy(() => import("./Contact"));

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const location = useLocation();

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
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/About"
            element={
              <React.Suspense fallback={<Loading />}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="/Projects"
            element={
              <React.Suspense fallback={<Loading />}>
                <Projects />
              </React.Suspense>
            }
          />
          <Route
            path="/Contact"
            element={
              <React.Suspense fallback={<Loading />}>
                <Contact />
              </React.Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
