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
      webLink: "https://new-bakers-inn.vercel.app/",
      id: 1,
    },
    {
      image: require("../images/ReslellMock.png"),
      title: "Resell Me",
      title2: `Resellme is a platform that helps businesses and individuals provide domains and hosting to their clients. It was created to help businesses leverage the opportunities of the web, especially during the COVID-19 pandemic.

`,
      title3: "View Project",
      webLink: "https://new-project-69460.web.app/",

      id: 2,
    },
    {
      image: require("../images/mobimock.png"),
      title: "The Mobi",
      title2: `The MOBI is Zim’s 1st Mobile Soup Kitchen, dishing out nutritious meals & support to women & children in our most vulnerable & isolated communities.`,
      title3: "View Project",
      webLink: "https://hunternyasha.github.io/6-The-Mobi/",

      id: 3,
    },
  ]);
  return (
    <>
      <div className="project">
        <div className="container-fluid">
          <div className="row">
            {responCards.map((cards) => (
              <div
                className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
                key={cards.id}>
                <div class="card h-100">
                  <img src={cards.image} class="card-img-top" alt="imgMockup" />
                  <div class="card-body">
                    <h5 class="card-title">{cards.title}</h5>
                    <p class="card-text">{cards.title2}</p>
                  </div>
                  <div className="card-body">
                    <NavLink to={cards.webLink} className="card-link">
                      {cards.title3}
                    </NavLink>
                  </div>
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
