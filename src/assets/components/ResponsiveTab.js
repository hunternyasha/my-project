import { useState } from "react";
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
    {
      image: require("../images/nowallsmoc.png"),
      title: "No Walls",
      title2: `No Walls Media, a company founded in 2020 to help businesses communicate with their customers during the COVID-19 pandemic, offers a variety of services, including branding, advertising, and digital marketing.
`,
      title3: "View Project",
      webLink: "https://hunternyasha.github.io/6-The-Mobi/",

      id: 4,
    },
    {
      image: require("../images/Group 3.png"),
      title: "Web Quiz App",
      title2: `This quiz web app is a fun and interactive way to test your knowledge on a variety of topics. The web app features a variety of question types, including multiple choice. You can also choose from a variety of questions, so you can challenge yourself or simply have some fun.
`,
      title3: "View Project",
      webLink: "https://hunternyasha.github.io/6-The-Mobi/",

      id: 5,
    },
  ]);
  return (
    <>
      <div className="project">
        <div className="container-fluid">
          <div className="row g-4">
            {responCards.map((cards) => (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"
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
