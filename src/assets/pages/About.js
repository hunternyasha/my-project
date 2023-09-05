import { useState } from "react";

const About = () => {

  const aboutTitles = {
    heading: "About Me",
    heading2: `Hello there! I am a skilled web developer with expertise in a variety of languages and technologies. 
    My passion lies in creating interactive and user-friendly websites that leave a lasting impression.
    With a strong focus on front-end development, my toolset includes popular frameworks like ReactJS and 
    JavaScript to bring life to stunning, dynamic web applications.`,
    heading3: "My Skills",
    btnTile:'Hire Me'
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
      <div className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h1>Picture</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h2>{aboutTitles.heading}</h2>
              <p>{aboutTitles.heading2}</p>
              <div className="row">
                <h3>{aboutTitles.heading3}</h3>
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
              <button className="btn bg-light">
                {aboutTitles.btnTile}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
