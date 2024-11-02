import React, { useState } from 'react';
import Icon from './SvgComponent';

const InfoAccordion = ({ title, iconName, size = 24, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate a unique id for each instance
  const toggleId = `toggle-switch-${title.replace(/\s+/g, '-')}`;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="info-accordion">
      <div className="d-flex align-items-center p-3" style={{ borderBottom: '2px solid #2393F1', backgroundColor: '#EBF5FD' }}>
        <span className="me-3">
          <Icon iconName={iconName} fill="white" />
        </span>
        <b style={{ fontSize: size }}>{title}</b>
        <div className="ms-auto checkbox-wrapper-7">
          <input
            className="tgl tgl-ios"
            id={toggleId}  // Use the unique id here
            type="checkbox"
            checked={isOpen}
            onChange={handleToggle}
          />
          <label className="tgl-btn" htmlFor={toggleId}></label>  {/* Link label to unique id */}
        </div>
      </div>
      {isOpen && (
        <div className="accordion-body mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default InfoAccordion;
