import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"; 
import { GoDotFill } from "react-icons/go";
import { PiCalendarStarLight } from "react-icons/pi";
import Topbar from "./Topbar";
import "../Styles/Sidebar.css";
import Offcanvas from "react-bootstrap/Offcanvas";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const handleCloseModal = () => setShowModal(false);

  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <MdOutlineDashboard style={{ width: "25px" }} />,
      subMenu: [
        { path: "/", name: "Admin Dashboard", icon: <GoDotFill /> },
        { path: "/Dashboard/Teacher", name: "Teacher Dashboard", icon: <GoDotFill /> },
        { path: "/Dashboard/Student", name: "Student Dashboard", icon: <GoDotFill /> },
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
    const location = useLocation();

    useEffect(() => {
      if (item.subMenu) {
        const isActiveSubMenu = item.subMenu.some(subItem => location.pathname.includes(subItem.path));
        setIsSubMenuOpen(isActiveSubMenu);
      } else {
        setIsSubMenuOpen(false);
      }
    }, [location.pathname, item.subMenu]);

    const handleToggleSubMenu = (e) => {
      e.preventDefault();
      setIsSubMenuOpen(prev => !prev);
    };

    const isActive = () => {
      if (item.subMenu) {
        return item.subMenu.some(subItem => location.pathname === subItem.path);
      }
      return location.pathname === item.path;
    };

    return (
      <div key={index}>
        <NavLink 
          to={item.path} 
          className={`linkss ${isActive() ? "active" : ""}`} 
          onClick={item.subMenu ? handleToggleSubMenu : null}
        >
          <div className="icon mt-1 mb-1">{item.icon}</div>
          <div style={{ display: isOpen ? "block" : "none" }} className="link_text mt-1 mb-1">
            {item.name}
          </div>
          {item.subMenu && (
            <div className="dropdown-icon" style={{ marginLeft: "auto" }}>
              {isSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          )}
        </NavLink>
        {item.subMenu && isSubMenuOpen && (
          <div className="sub-menu" style={{ paddingLeft: "30px", display: isOpen ? "block" : "none" }}>
            {item.subMenu.map((subItem, subIndex) => (
              <NavLink 
                key={subIndex} 
                to={subItem.path} 
                className={`submenu ${location.pathname === subItem.path ? "active" : ""}`}
              >
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
