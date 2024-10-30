import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

function Notifications() {
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
      <div className="p-2"  onClick={toggleDropdown}>
        <IoMdNotificationsOutline
          style={{ color: "#505050", fontSize: "25px" }}
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
            width: "300px",
            padding: "10px",
            opacity: 1,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            transform: "translateY(0)",
          }}
          className={`dropdown-menu ${showDropdown ? "show" : ""}`}
        >
          <div className="d-flex align-items-center mb-2">
            {/* <img
              alt="Profile"
              style={{ maxHeight: "40px", borderRadius: "50%", marginRight: "10px" }}
            /> */}
            <div>
              <p className="mb-0"><b>Kevin Larry</b></p>
              <p className="mb-0" style={{ fontSize: "0.9rem", color: "#148CF0" }}>Administrator</p>
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
     My Profile
          </div>
 
        </div>
      )}
    </div>
  );
}

export default Notifications;
