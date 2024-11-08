import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Topbar from "./Topbar";
import "../Styles/Sidebar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { PiStudent } from "react-icons/pi";
import logo from "../img/School.png";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { MdFamilyRestroom } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

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
        { path: "/Students List", name: "Students List", icon: <GoDotFill /> },
        {
          path: "Students/Students Promotion",
          name: "Student Promotion",
          icon: <GoDotFill />,
        },
      ],
    },
    {
      path: "/Teachers",
      name: "Teachers",
      icon: <PiChalkboardTeacherThin style={{ width: "25px" }} />,
    },
    {
      path: "/Staffs",
      name: "Staffs",
      icon: <LuUsers style={{ width: "25px" }} />,
    },
    {
      path: "/Parents",
      name: "Parents",
      icon: <MdFamilyRestroom style={{ width: "25px" }} />,
    },
    {
      path: "/Subjects",
      name: "Subjects",
      icon: <GiBookshelf style={{ width: "25px" }} />,
    },
    {
      path: "/Classes",
      name: "Classes",
      icon: <GiTeacher style={{ width: "25px" }} />,
      subMenu: [
        {
          path: "Classes/Class Rooms",
          name: "Class Rooms",
          icon: <GoDotFill />,
        },
        {
          path: "Classes/Classes & Sections",
          name: "Classes & Sections",
          icon: <GoDotFill />,
        },
        {
          path: "Classes/Allocate Class Rooms",
          name: "Allocate Class Rooms",
          icon: <GoDotFill />,
        },
      ],
    },


    {
      path: "/Time Tables",
      name: "Time Table",
      icon: <GiTeacher style={{ width: "25px" }} />,
      subMenu: [
        {
          path: "Time Tables/Set Timing",
          name: "Set Timing",
          icon: <GoDotFill />,
        },
        {
          path: "Time Tables/Schedule Classes",
          name: "Schedule Classes",
          icon: <GoDotFill />,
        },
    
      ],
    },

    

    {
      path: "/Exams",
      name: "Exams",
      icon: <GiBookshelf style={{ width: "25px" }} />,
    },
    {
      path: "/Fees",
      name: "Fees",
      icon: <GiBookshelf style={{ width: "25px" }} />,

    },
    {
      path: "/Attendance",
      name: "Attendance",
      icon: <GiBookshelf style={{ width: "25px" }} />,
    },
    {
      path: "/Accounts",
      name: "Accounts",
      icon: <GiBookshelf style={{ width: "25px" }} />,
    },
    {
      path: "/User Access",
      name: "User Access",
      icon: <GiBookshelf style={{ width: "25px" }} />,
    },

  ];

  const MenuItem = ({ item }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleToggleSubMenu = (e) => {
      e.preventDefault();
      setIsSubMenuOpen((prev) => !prev);
    };

    const isActive = (path) => location.pathname.startsWith(path);
    const isMainActive = () =>
      isActive(item.path) ||
      (item.subMenu && item.subMenu.some((sub) => isActive(sub.path)));

    return (
      <div>
        <NavLink
          to={item.path || "#"}
          className={`linkss ${isMainActive() ? "active" : ""}`}
          onClick={item.subMenu ? handleToggleSubMenu : null}
        >
          <div className="icon mt-1 mb-1">{item.icon}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text mt-2 mb-1"
          >
            <h6>{item.name}</h6>
          </div>
          {item.subMenu && (
            <div className="dropdown-icon" style={{ marginLeft: "auto" }}>
              {isSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          )}
        </NavLink>
        {item.subMenu && isSubMenuOpen && (
          <div
            className="sub-menu"
            style={{ paddingLeft: "30px", display: isOpen ? "block" : "none" }}
          >
            {item.subMenu.map((subItem, subIndex) => (
              <NavLink
                key={subIndex}
                to={subItem.path}
                className={`submenu ${isActive(subItem.path) ? "active" : ""}`}
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
      <Topbar
        toggleOffcanvas={() => setShowModal(!showModal)}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-fluid">
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
          <div className="top_section d-flex justify-content-between align-items-center">
            {/* Optional logo section */}
          </div>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        <main className="content">{children}</main>
      </div>
      <Offcanvas show={showModal} onHide={handleCloseModal}>
        <Offcanvas.Header closeButton>
          <div className="d-flex justify-content-center">
            <img src={logo} alt="Logo" style={{ maxHeight: "40px" }} />
          </div>
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
