import MiniNav from "./MiniNav";

import { Button } from "primereact/button";


const Home = () => {


  return (
    <>

      <div className="banner">
        <div className="container-fluid text-center">
          <h1>A full stack-developer</h1>
          <p>Specialising in JS. C#.React. JS</p>
          <Button label="Download CV" className="text-center" />
        </div>
        <MiniNav />
      </div>
    </>
  );
};

export default Home;
