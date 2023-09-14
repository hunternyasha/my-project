import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerTitles = {
    title: "Nyasha Tanganyika",
    title2: "Front-end Web Developer",
  };
  const [social] = useState([
    {
      image: "https://img.icons8.com/ios-filled/65/github.png",
      navLink: 'https://github.com/hunternyasha',
      id: 1
    },
    {
      image: 'https://img.icons8.com/fluency/65/linkedin.png',
      navLink: 'https://www.linkedin.com/in/nyasha-tanganyika-a9636124a/',
      id: 2
    },
    {
      image:' https://img.icons8.com/fluency/65/facebook-new.png',
      navLink: 'https://www.facebook.com/nyashahunter.tanganyika',
      id: 3
    }
  ])
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <h4>{footerTitles.title}</h4>
              <h5>{footerTitles.title2}</h5>
            </div>
            <div className="col-12 col-md-6 col-lg-4  align-items-center d-flex">
              <nav className="d-flex text-light footerNav">
                <NavLink to="/" className="nav-link active">
                  Home
                </NavLink>
                <NavLink to="/About" className="nav-link">
                  About
                </NavLink>
                <NavLink to="/Projects" className="nav-link">
                  My Projects
                </NavLink>
                <NavLink to="/Contact" className="nav-link">
                  Conact Me
                </NavLink>
              </nav>
            </div>
            <div className="col-12 col-md-6 col-lg-4 align-items-center social-icons d-flex">
              {social.map((icons) => (
                <div className="icons" key={icons.id}>
                  <NavLink to={icons.navLink}>
                    <img
                      src={icons.image}
                      alt="social link"
                      className="img-fluid mx-5"
                    />
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />

        <div className="d-flex justify-content-between copyRight container">
          <h4>Terms & Conditions | Privacy | Policies</h4>
          <h4>Nyasha Tanganyika 2023</h4>
        </div>
      </footer>
    </>
  );
}

export default Footer;