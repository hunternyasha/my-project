import { useState } from "react";
import { Ripple } from "primereact/ripple";
import { Button } from "primereact/button";
import { Route, Routes, useNavigate } from "react-router-dom";
import MoreProjects from "../pages/MoreProjects";

const ProcjectTab = () => {
  const [bakers] = useState([
    {
      title: "Bakers Inn Website",
      title2: `Baker's Inn is a popular bakery chain that specializes in delicious pastries, 
        bread, and cakes. The goal of this project is to redesign the current Baker's Inn website 
        to enhance its user experience, showcase their products effectively, and increase online engagement and conversions.`,
      title3: `Responsive and Mobile-friendly: Ensure the website design is responsive and optimized for mobile devices to 
        accommodate the growing number of users accessing the website through smartphones and tablets.`,
      btnTitle: "View Project",
      btnTitle2: "More Projects",
      id: 1,
    },
    {
      image: require("../images/BakerInnMock1.png"),
      id: 2,
    },
  ]);
  const navigate = useNavigate();
  const navigateToMorePrejects = () => {
    navigate("/MoreProjects");
  };
  return (
    <>
      <div className="row">
        {bakers.map((bakersTitle) => (
          <div
            className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
            key={bakersTitle.id}>
            <h2>{bakersTitle.title}</h2>
            <p>{bakersTitle.title2}</p>
            <p>{bakersTitle.title3}</p>
            <img src={bakersTitle.image} alt="" className="img-fluid" />
            <div className="d-flex">
              <Button label={bakersTitle.btnTitle} className="p-ripple">
                <Ripple />
              </Button>

              <Button onClick={navigateToMorePrejects} label={bakersTitle.btnTitle2} />
            </div>
          </div>
        ))}
      </div>

      <Routes>
        <Route path="/MoreProjects" element={<MoreProjects />} />
      </Routes>
    </>
  );
};

export default ProcjectTab;
