import React from 'react';
import { ReactComponent as MobileIcon } from '../img/Group 1000002232.svg'; 
import { ReactComponent as EmailIcon } from '../img/Mask group.svg'; 

const icons = {
  mobile: MobileIcon,
  email: EmailIcon,
};

const Icon = ({ iconName, width = "30px", height = "30px", fill = "black" }) => {
  const IconComponent = icons[iconName];

  if (!IconComponent) {
    return null; 
  }

  return (
    <div style={{width:"50px", height:"50px", "backgroundColor":"#EBF5FD", borderRadius:"10px"}} className='d-flex justify-content-center align-items-center'>
        <IconComponent width={width} height={height} />
    </div>
  );
};

export default Icon;
