import React from 'react';
import Icon from './SvgComponent';
// 
const InfoHeader = ({ title, iconName }) => {
  return (
    <div
      className="d-flex p-3 mt-5"
      style={{
        backgroundColor: "#EBF5FD",
        borderBottom: "2px solid #2393F1",
      }}
    >
      <h4 className="d-flex">
        <span className="me-3">
          {/* <Icon iconName={iconName} fill="white" /> */}
          <Icon  iconName={iconName} fill="white"/>
        </span>
        <b className="mt-2">{title}</b>
      </h4>
    </div>
  );
};

export default InfoHeader;
