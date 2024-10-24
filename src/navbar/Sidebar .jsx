import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsCalendar3Event } from "react-icons/bs";
import { PiCalendarStarLight } from "react-icons/pi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Topbar from "./Topbar";
import "../Styles/Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen((prevState) => !prevState);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => {
    // Implement your logout logic here
    navigate("/login");
  };

  const menuItem = [
    { path: "/Dashboard", name: "Dashboard", icon: <BsCalendar3Event style={{ width: "25px" }} /> },
    { path: "/AdminEvents", name: "Events", icon: <PiCalendarStarLight style={{ width: "25px" }} /> },
  ];

  return (
    <>
      <div className="section d-flex" style={{ fontFamily: "Roboto, sans-serif" }}>
        <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
          <div className="top_section d-flex justify-content-between align-items-center">
            <h2 className="sidebar-title" style={{ display: isOpen ? "block" : "none" }}>
              My App
            </h2>
            <div onClick={toggle} style={{ cursor: "pointer" }}>
              <HiOutlineBars3 style={{ fontSize: "25px" }} />
            </div>
          </div>

          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="linkss" activeClassName="active">
              <div className="icon mt-1 mb-1">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text mt-1 mb-1">
                {item.name}
              </div>
            </NavLink>
          ))}
          <div className="link d-flex" style={{ marginTop: "10%" }} onClick={handleShow}>
            <div className="icon"><FaSignOutAlt /></div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text d-flex">Logout</div>
          </div>
        </div>
        
        <main className="content">
          <Topbar /> {children}
        </main>
      </div>

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Body style={{ height: "180px" }}>
          <div>
            <h6 style={{ textAlign: "center", marginTop: "30px" }}>
              Are you sure you want to logout?
            </h6>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "50px" }}>
            <Button variant="success" onClick={handleClose}>Close</Button>
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const withSideBarLayout = (component) => {
  return <Sidebar>{component}</Sidebar>;
};

export default withSideBarLayout;
