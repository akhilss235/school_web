import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsCalendar3Event } from "react-icons/bs";
import { PiCalendarStarLight } from "react-icons/pi";
import { HiOutlineBars3 } from "react-icons/hi2";
import Topbar from "./Topbar";
import "../Styles/Sidebar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"; // Import the dropdown icons
import { GoDotFill } from "react-icons/go";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // Start with the sidebar open
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const handleCloseModal = () => setShowModal(false);

  const menuItems = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboard style={{ width: "25px" }} />,
      subMenu: [
        { path: "Dashboard", name: "Admin Dashboard", icon : <GoDotFill  />, },
        { path: "Dashboard/Teacher", name: "Teacher Dashboard", icon : <GoDotFill />, },
        { path: "Dashboard/Student", name: "Student Dashboard", icon : <GoDotFill  />, },
      ],
    },
    {
      path: "/Students",
      name: "Students",
      icon: <PiCalendarStarLight style={{ width: "25px" }} />,
    },
  ];

  const MenuItem = ({ item, index }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleToggleSubMenu = (e) => {
      e.preventDefault();
      setIsSubMenuOpen((prev) => !prev);
    };

    return (
      <div key={index}>
        <NavLink 
          to={item.path} 
          className="linkss" 
          activeClassName="active" 
          onClick={item.subMenu ? handleToggleSubMenu : null}
        >
          <div className="icon mt-1 mb-1">{item.icon}</div>
          <div style={{ display: isOpen ? "block" : "none" }} className="link_text mt-1 mb-1">
            {item.name}
          </div>
          {/* Dropdown icon */}
          {item.subMenu && (
            <div className="dropdown-icon" style={{ marginLeft: "auto" }}>
              {isSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          )}
        </NavLink>
        {item.subMenu && isSubMenuOpen && (
          <div className="sub-menu" style={{ paddingLeft: "30px", display: isOpen ? "block" : "none" }}>
            {item.subMenu.map((subItem, subIndex) => (

              <NavLink key={subIndex} to={subItem.path} className="submenu" >
              <div className="icons mt-1 mb-1">{subItem.icon}</div>
                <div className="link_text">{subItem.name}</div>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  };

  const toggleOffcanvas = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="container-fluid">
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
          <div className="top_section d-flex justify-content-between align-items-center">
            <h2 className="sidebar-title" style={{ display: isOpen ? "block" : "none" }}>
              My App
            </h2>
            <div onClick={toggleSidebar} style={{ cursor: "pointer" }}>
              <HiOutlineBars3 style={{ fontSize: "25px" }} />
            </div>
          </div>

          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} index={index} />
          ))}
        </div>
        <main className="content">
          <Topbar toggleOffcanvas={toggleOffcanvas} />
          {children}
        </main>
      </div>

      {/* Offcanvas for smaller screens */}
      <Offcanvas show={showModal} onHide={handleCloseModal}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My App</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} index={index} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const withSideBarLayout = (component) => {
  return <Sidebar>{component}</Sidebar>;
};

export default withSideBarLayout;
