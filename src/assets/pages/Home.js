import { NavLink } from "react-router-dom";
import MiniNav from "./MiniNav";

import { Button } from "primereact/button";


const Home = () => {


  return (
    <>
      <div className="banner">
        <div className="container text-center">
          <h1>A full stack-developer</h1>
          <p className="mb-5">Specialising in JS. C#.React. JS</p>
          <NavLink to="https://docs.google.com/document/d/1-iei2I7q0gNEXzPt9_7eajAQJA1_hAyiWoKLanAofko/edit?usp=sharing">
            <Button label="Download CV" className="text-center" />
          </NavLink>
        </div>
        {/* <div className="py-5"></div> */}
        <MiniNav />
      </div>
    </>
  );
};

export default Home;
