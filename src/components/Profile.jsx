import React, { useState } from "react";
import profile from "../img/profile.png"; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";

function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="position-relative">
      <div style={{ cursor: "pointer" }} onClick={toggleDropdown}>
        <img
          src={profile}
          alt="Profile"
          style={{ maxHeight: "40px" }}
        />
      </div>

      {showDropdown && (
        <div
          style={{
            position: "absolute",
            right: 0,
            zIndex: 1000,
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            width: "200px",
            padding: "10px",
            opacity: 1,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            transform: "translateY(0)",
          }}
          className={`dropdown-menu ${showDropdown ? "show" : ""}`}
        >
          <div className="d-flex align-items-center mb-2">
            <img
              src={profile}
              alt="Profile"
              style={{ maxHeight: "40px", borderRadius: "50%", marginRight: "10px" }}
            />
            <div>
              <p className="mb-0"><b>Kevin Larry</b></p>
              <p className="mb-0" style={{ fontSize: "0.9rem", color: "#6c757d" }}>Administrator</p>
            </div>
          </div>

          <div
            className="dropdown-item"
            style={{
              cursor: "pointer",
              padding: "8px 12px",
              borderRadius: "4px",
              backgroundColor: hoveredItem === "settings" ? "#f1f1f1" : "transparent",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={() => handleMouseEnter("settings")}
            onMouseLeave={handleMouseLeave}
            onClick={() => console.log('Settings clicked')}
          >
            <CgProfile /> My Profile
          </div>
          <div
            className="dropdown-item"
            style={{
              cursor: "pointer",
              padding: "8px 12px",
              borderRadius: "4px",
              backgroundColor: hoveredItem === "logout" ? "#f1f1f1" : "transparent",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={() => handleMouseEnter("logout")}
            onMouseLeave={handleMouseLeave}
            onClick={() => console.log('Logout clicked')}
          >
            <CiLogout /> Logout
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
