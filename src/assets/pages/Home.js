import MiniNav from "./MiniNav";

import { Button } from "primereact/button";


const Home = () => {


  return (
    <>

      <div className="banner">
        <div className="container text-center">
          <h1 >A full stack-developer</h1>
          <p className="mb-5">Specialising in JS. C#.React. JS</p>
          <Button label="Download CV" className="text-center" />
        </div>
        {/* <div className="py-5"></div> */}
        <MiniNav />
      </div>
    </>
  );
};

export default Home;
