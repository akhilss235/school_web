import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsCalendar3Event } from "react-icons/bs";
import { PiCalendarStarLight } from "react-icons/pi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Topbar from "./Topbar";
import "../Styles/Sidebar.css";
import Logout from "../Model/Logout";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleLogout = () => {
    navigate("/login");
  };

  const menuItems = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <BsCalendar3Event style={{ width: "25px" }} />,
    },
    {
      path: "/AdminEvents",
      name: "Events",
      icon: <PiCalendarStarLight style={{ width: "25px" }} />,
    },
  ];

  const MenuItem = ({ item }) => (
    <NavLink to={item.path} className="linkss" activeClassName="active">
      <div className="icon mt-1 mb-1">{item.icon}</div>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="link_text mt-1 mb-1"
      >
        {item.name}
      </div>
    </NavLink>
  );

  return (
    <>
      <div
        className="section d-flex"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
          <div className="top_section d-flex justify-content-between align-items-center">
            <h2
              className="sidebar-title"
              style={{ display: isOpen ? "block" : "none" }}
            >
              My App
            </h2>
            <div onClick={toggleSidebar} style={{ cursor: "pointer" }}>
              <HiOutlineBars3 style={{ fontSize: "25px" }} />
            </div>
          </div>

          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}

          <div
            className="link d-flex"
            style={{ marginTop: "10%" }}
            onClick={handleShowModal}
          >
            <div className="icon">
              <FaSignOutAlt />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text d-flex"
            >
              Logout
            </div>
          </div>
        </div>

        <main className="content">
          <Topbar /> {children}
        </main>
      </div>








      
      <Logout
        show={showModal}
        handleClose={handleCloseModal}
        handleLogout={handleLogout}
      />
    </>
  );
};

const withSideBarLayout = (component) => {
  return <Sidebar>{component}</Sidebar>;
};

export default withSideBarLayout;
