import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../img/School.png";
import { IoCalendarOutline } from "react-icons/io5";
import Profile from "./Profile";
import Notifications from "./Notifications";
import AddNew from "./AddNew";

function Topbar({ toggleOffcanvas }) {
  return (
    <Navbar
      className="navbar-custom p-4"
      style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "##FFFFFF" }}
    >
      <div className="d-flex justify-content-between align-items-center w-100 flex-wrap">
        <div className="d-flex align-items-center">
          <HiOutlineBars3
            onClick={toggleOffcanvas}
            className="Offcanvasicons me-2"
            style={{ cursor: "pointer", fontSize: "25px" }}
          />
          <Navbar.Brand href="/Dashboard">
            <img src={logo} alt="Logo" style={{ maxHeight: "40px" }} />
          </Navbar.Brand>
        </div>

        <div className="d-flex justify-content-end align-items-center flex-wrap ">
          <div className="card" style={{ borderColor: "#D9D9D9" }}>
            <div className="d-flex mx-1 p-2">
              <span style={{ color: "#505050" }}>
                <IoCalendarOutline /> Academic Year: 2024/2025
              </span>
            </div>
          </div>
          <div className="card mx-1" style={{ borderColor: "#D9D9D9" }}>
            <AddNew />
          </div>
          <div className="card mx-1" style={{ borderColor: "#D9D9D9" }}>
            <Notifications />
          </div>
          <div className="card mx-1 " style={{ borderColor: "#D9D9D9" }}>
            <Profile />
          </div>
        </div>
      </div>

      {/* CSS for better responsiveness */}
      <style jsx>{`
        @media (max-width: 700px) {
          .navbar-custom {
            padding: 1rem;
          }
          .Offcanvasicons {
            font-size: 20px;
          }
          .card {
            width: auto;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default Topbar;
