import React from 'react';
import Icon from './SvgComponent';

// 
const InfoHeader = ({ title, iconName, size=24 }) => {
  return (
    <div
      className="d-flex  InfoHeaderbg"
      // style={{
      //   backgroundColor: "#EBF5FD",
      //   borderBottom: "2px solid #2393F1",
      //   borderTopLeftRadius:"15px",
      //   borderTopRightRadius:"15px"
      // }}
      
    >
      <h5 className="d-flex">
        <span className="me-3">
          <Icon  iconName={iconName} fill="white" />
        </span>
        <b style={{marginTop:"10px",fontSize:size}} className='tiltleresposive'>{title}</b>
      </h5>
    </div>
  );
};

export default InfoHeader;
