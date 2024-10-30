import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"; 
import { GoDotFill } from "react-icons/go";
import Topbar from "./Topbar";
import "../Styles/Sidebar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { PiStudent } from "react-icons/pi";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const handleCloseModal = () => setShowModal(false);

  const menuItems = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <MdOutlineSpaceDashboard style={{ width: "25px" }} />,
    },
    {
      path: "/Students",
      name: "Students",
      icon: <PiStudent style={{ width: "25px" }} />,
      subMenu: [
        { path: "/Students", name: "Students List", icon: <GoDotFill /> },
        { path: "/Promotion", name: "Students Promotion", icon: <GoDotFill /> },
      ],
    },
  ];

  const MenuItem = ({ item }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
      if (item.subMenu) {
        const isActiveSubMenu = item.subMenu.some(subItem => location.pathname.includes(subItem.path));
        setIsSubMenuOpen(isActiveSubMenu);
      }
    }, [location.pathname, item.subMenu]);

    const handleToggleSubMenu = (e) => {
      e.preventDefault();
      setIsSubMenuOpen((prev) => !prev);
    };

    const isMainActive = () => {
      return (
        location.pathname === item.path ||
        (item.subMenu && item.subMenu.some(subItem => location.pathname === subItem.path))
      );
    };

    return (
      <div>
        <NavLink 
          to={item.path} 
          className={`linkss ${isMainActive() ? "active" : ""}`} 
          onClick={item.subMenu ? handleToggleSubMenu : null}
        >
          <div className="icon mt-1 mb-1">{item.icon}</div>
          <div style={{ display: isOpen ? "block" : "none" }} className="link_text mt-1 mb-1">
         <h6>
         {item.name}
         </h6>  
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

  return (
    <>
      <Topbar toggleOffcanvas={() => setShowModal(!showModal)} toggleSidebar={toggleSidebar} />

      <div className="container-fluid">
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
          <div className="top_section d-flex justify-content-between align-items-center">
            {/* Optional logo section */}
          </div>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        <main className="content">
          {children}
        </main>
      </div>
      <Offcanvas show={showModal} onHide={handleCloseModal}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My App</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
