import { useState } from "react";
import { Card } from "primereact/card";
import { NavLink } from "react-router-dom";
const ResponsiveTab = () => {
  const [responCards] = useState([
    {
      image: require("../images/bakerInnMock.png"),
      title: "Bakers Inn",
      title2: `Baker's Inn is a popular bakery chain that specializes in delicious pastries, bread, and cakes. 
            The goal of this project is to redesign the current Baker's Inn website to enhance its user experience, 
            showcase their products effectively, and increase online engagement and conversions.`,
      title3: "View Project",
      id: 1,
    },
    {
      image: require("../images/ReslellMock.png"),
      title: "Resell Me",
      title2: `Baker's Inn is a popular bakery chain that specializes in delicious pastries, bread, and cakes. 
            The goal of this project is to redesign the current Baker's Inn website to enhance its user experience, 
            showcase their products effectively, and increase online engagement and conversions.`,
      title3: "View Project",
      id: 2,
    },
    {
      image: require("../images/bakerInnMock.png"),
      title: "Pan Africa",
      title2: `Baker's Inn is a popular bakery chain that specializes in delicious pastries, bread, and cakes. 
            The goal of this project is to redesign the current Baker's Inn website to enhance its user experience, 
            showcase their products effectively, and increase online engagement and conversions.`,
      title3: "View Project",
      id: 3,
    },
  ]);
  return (
    <>
      <div className="responsive">
        <div className="container-fluid">
          <div className="row">
            {responCards.map((cards) => (
              <div
                className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center"
                key={cards.id}>
                <div className="card">
                  <Card title={cards.title}>
                    <img src={cards.image} alt="imgMockup" className="img-fluid" />
                    <p className="m-0"> 
                    {cards.title2}
                    </p>
                    <NavLink >{cards.title3}</NavLink>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveTab;
