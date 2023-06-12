import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import "./navDropDown.scss";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const NavDropDown = () => {
  const [activeMenu, setActiveMenu] = useState("main"); // settings, animals
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon={faGear} />}
            rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
            goToMenu="main"
          />
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Button1</DropdownItem>
          <DropdownItem>Button2</DropdownItem>
          <DropdownItem>Button3</DropdownItem>
          <DropdownItem>Button4</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default NavDropDown;
