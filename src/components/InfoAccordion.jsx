import React, { useState } from "react";
import Icon from "./SvgComponent";
import { MdKeyboardArrowDown } from "react-icons/md";

const InfoAccordion = ({ title, iconName, size = 24, children, isToggle=true, isBorder=false, isLine=true }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate a unique id for each instance
  const toggleId = `toggle-switch-${title.replace(/\s+/g, "-")}`;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="info-accordion">
      <div
        className="d-flex align-items-center p-3"
        style={{
          borderBottom: isLine ? "2px solid #2393F1" : "",
          backgroundColor: "#EBF5FD",
          borderTopLeftRadius:"15px",
          borderTopRightRadius:"15px",
          borderRadius: isBorder ? "15px" : "none"
        }}
      >
        <span className="me-3">
          <Icon iconName={iconName} fill="white" />
        </span>
        <b style={{ fontSize: size }} className='tiltleresposive'>{title}</b>
          <div className="ms-auto checkbox-wrapper-7" >
          {
            isToggle ?
            (
              <>
                <input
                  className="tgl tgl-ios"
                  id={toggleId} // Use the unique id here
                  type="checkbox"
                  checked={isOpen}
                  onChange={handleToggle}
                />
                <label className="tgl-btn" htmlFor={toggleId}></label>{" "}
              </>
            )
            :(
              <MdKeyboardArrowDown size={30} style={{cursor:"pointer"}} onClick={handleToggle}/>
            )
          }
        </div>
      </div>
      {isOpen && <div className="accordion-body mt-2 p-2 pb-5" style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px'}}>{children}</div>}
    </div>
  );
};

export default InfoAccordion;
