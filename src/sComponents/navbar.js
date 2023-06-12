import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  background-color: #2c73d2;
  color: white;
  padding: 10px;
  width: 100vw;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 100px;
`;

const NavItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #0f4c8b;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 150px;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #2c73d2;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  ${DropdownContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const DropdownItem = styled.li`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0f4c8b;
  }
`;

const SNavbar = () => {
  const [isClubDropdownOpen, setIsClubDropdownOpen] = useState(false);

  const handleDropdownMouseEnter = () => {
    setIsClubDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsClubDropdownOpen(false);
  };

  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink to="/admin/">ADMINS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/users">ALL USERS</NavLink>
        </NavItem>
        <NavItem>
          <DropdownContainer
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <DropdownHeader>CLUBS</DropdownHeader>
            {isClubDropdownOpen && (
              <DropdownMenu>
                <DropdownItem>
                  <NavLink to="/admin/clubs/gtech" className="opt">
                    Gtech
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/admin/clubs/rovers" className="opt">
                    Rovers
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/admin/clubs/startup" className="opt">
                    StartUp
                  </NavLink>
                </DropdownItem>
                {/* Add more dropdown options here */}
              </DropdownMenu>
            )}
          </DropdownContainer>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/cca">CCA</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/logout">LOGOUT</NavLink>
        </NavItem>
        {/* Add more navigation links here */}
      </NavList>
    </NavbarContainer>
  );
};

export default SNavbar;
