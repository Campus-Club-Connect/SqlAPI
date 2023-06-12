import "./navbar.scss";
import LogoColor from "./../../assets/logoColor.png";

// Fontawesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";

import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import NavDropDown from "../navDropDown/NavDropDown";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const tooltipToggleText = darkMode ? "Night" : "Day";

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={LogoColor} alt="" />
        </Link>
      </div>

      <div className="right">
        <div className="center">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div
              className={`nav homeIcon ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faHouse} />
              <span className="tooltip-text">Home</span>
            </div>
          </Link>

          <Link
            to={`/clubs`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className={`nav club ${
                location.pathname === "/clubs" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faUserGroup} />
              <span className="tooltip-text">Clubs</span>
            </div>
          </Link>

          <Link
            to={`/polls`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className={`nav polls ${
                location.pathname === "/polls" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faSquarePollVertical} />
              <span className="tooltip-text">Polls</span>
            </div>
          </Link>
        </div>

        <div className="rightInside">
          <div className="utils">
            {darkMode ? (
              <FontAwesomeIcon icon={faToggleOff} onClick={toggle} />
            ) : (
              <FontAwesomeIcon icon={faToggleOn} onClick={toggle} />
            )}
            <span className="tooltip-text">{tooltipToggleText}</span>
          </div>

          <Link to={`/profile/${currentUser.id}`}>
            <div className="user">
              <img
                src={"/upload/" + currentUser.profilePic}
                alt=""
                // onClick={() => setOpen(!open)}
              />
              {/* <FontAwesomeIcon icon={faChevronDown} className="dropDown" /> */}
              {/* {open && <NavDropDown setOpen={setOpen} />} */}{" "}
              {/* Maybe in the future */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
