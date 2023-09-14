import { useState } from "react";
import MiniNav from "./MiniNav";
import img from "../images/Group 1.png";
import PageTransions from "../components/PageTransions";
import { NavLink } from "react-router-dom";

const About = () => {
  const aboutTitles = {
    heading: "About Me",
    heading2: `Hello there! I am a skilled web developer with expertise in a variety of languages and technologies. 
    My passion lies in creating interactive and user-friendly websites that leave a lasting impression.
    With a strong focus on front-end development, my toolset includes popular frameworks like ReactJS and 
    JavaScript to bring life to stunning, dynamic web applications.`,
    heading3: "My Skills",
    btnTile: "Hire Me",
  };

  const [aboutSkills] = useState([
    {
      title: "HTML5 & CSS",
      title2: "Javascript",
      title3: "React.js",
      id: 1,
    },
    {
      title: "Debugging and Problem-Solving",
      title2: "Cross-Functional Collaboration",
      title3: "Cross-Browser Compatibility",
      id: 2,
    },
  ]);

  return (
    <>
      <PageTransions>
        <div className="about">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center">
                <img src={img} alt="" className="img-fluid " />
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                <h2 className="mb-3">{aboutTitles.heading}</h2>
                <p>{aboutTitles.heading2}</p>
                <div className="row">
                  <h3 className="mb-4 mt-3">{aboutTitles.heading3}</h3>
                  {aboutSkills.map((abTitles) => (
                    <div className="col-12 col-md-6" key={abTitles.id}>
                      <ul>
                        <li>{abTitles.title}</li>
                        <li>{abTitles.title2}</li>
                        <li>{abTitles.title3}</li>
                      </ul>
                    </div>
                  ))}
                </div>
                <NavLink to='/Contact'>
                  {" "}
                  <button className="btn bg-light mt-4">
                    {aboutTitles.btnTile}
                  </button>
                </NavLink>
              </div>
            </div>
            <MiniNav />
          </div>
        </div>
      </PageTransions>
    </>
  );
};

export default About;
