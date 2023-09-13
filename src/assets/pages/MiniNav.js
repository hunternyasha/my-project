import { NavLink } from "react-router-dom";

const MiniNav = () => {
  return (
    <>
      <nav className="d-flex text-light justify-content-end miniNav">
        <NavLink to="/" className="link">
          01
        </NavLink>
        <NavLink to="/About" className="link">
          02
        </NavLink>
        <NavLink to="/Projects" className="link">
          03
        </NavLink>
        <NavLink to="/Contact" className="link">
          04
        </NavLink>
      </nav>
    </>
  );
};

export default MiniNav;
