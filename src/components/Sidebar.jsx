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
import { TbTable } from "react-icons/tb";
import { PiExamLight } from "react-icons/pi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoFingerPrint } from "react-icons/io5";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdAddCard } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";

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
      icon: <TbTable style={{ width: "25px" }} />,
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
      // icon: <PiExamLight style={{ width: "25px" }} />,
      icon: <GiBookshelf style={{ width: "25px" }} />,
      subMenu: [
        {
          path: "Exams/Set Exams",
          name: "Set Exams",
          icon: <GoDotFill />,
        },
        {
          path: "Exams/Schedule Exams",
          name: "Schedule Exams",
          icon: <GoDotFill />,
        },
        {
          path: "Exams/Grade Settings",
          name: "Grade Settings",
          icon: <GoDotFill />,
        },
    
      ],
    },



    {
      path: "/Fees",
      name: "Fees",
      icon: <FaRegMoneyBillAlt style={{ width: "25px" }} />,
      subMenu: [
        {
          path: "Fees/Collect Fees",
          name: "Collect Fees",
          icon: <GoDotFill />,
        },
        {
          path: "Fees/Fees Group",
          name: "Fees Group",
          icon: <GoDotFill />,
        },
    

        {
          path: "Fees/Fees Type",
          name: "Fees Type",
          icon: <GoDotFill />,

        },  {
          path: "Fees/Fees Master",
          name: "Fees Master",
          icon: <GoDotFill />,
          
          
        },
        {
          path: "Fees/Account Details",
          name: "Account Details",
          icon: <GoDotFill />,
        },
      ],
    },
    // {
    //   path: "/Fees",
    //   name: "Fees",
    //   icon: <FaRegMoneyBillAlt style={{ width: "25px" }} />,

    // },
    {
      path: "/Attendance",
      name: "Attendance",
      icon: <IoFingerPrint style={{ width: "25px" }} />,
      subMenu: [
        {
          path: "Attendance/Teachers Attendance",
          name: "Teachers Attendance",
          icon: <GoDotFill />,
        },
        {
          path: "Attendance/Staff Attendance",
          name: "Staff Attendance",
          icon: <GoDotFill />,
        },
        {
          path: "Attendance/Attendance History",
          name: "Attendance History",
          icon: <GoDotFill />,
        },
    
      ],
    },




    {
      path: "/Accounts",
      name: "Accounts",
      icon: <LiaCoinsSolid style={{ width: "25px" }} />,
      subMenu: [
        {
          path: "Accounts/Expense",
          name: "Expense",
          icon: <GoDotFill />,
        },
        {
          path: "Accounts/Transaction",
          name: "Transaction",
          icon: <GoDotFill />,
        },

    
      ],
    },

    {
      path: "/Leave",
      name: "Leave",
      icon: <LiaCoinsSolid style={{ width: "25px" }} />,
      subMenu: [
        {
          path: "Leave/Leave Request",
          name: "Leave Request",
          icon: <GoDotFill />,
        },
        {
          path: "Leave/Leave Settings",
          name: "Leave Settings",
          icon: <GoDotFill />,
        },

    
      ],
    },







 
    {
      path: "/User Access",
      name: "User Access",
      icon: <MdAddCard style={{ width: "25px" }} />,
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
