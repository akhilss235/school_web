import React from 'react';
import { ReactComponent as MobileIcon } from '../img/Group 1000002232.svg'; 
import { ReactComponent as EmailIcon } from '../img/Mask group.svg'; 
import { ReactComponent as HostelIcon } from '../img/hostel.svg'; 
import { ReactComponent as TransportIcon } from '../img/transport.svg'; 
import { ReactComponent as Parents } from '../img/Parents.svg'; 
import { ReactComponent as Student } from '../img/Student.svg'; 
import { ReactComponent as DocumentIcon } from '../img/document.svg'; 
import { ReactComponent as PdfIcon } from '../img/pdf.svg'; 
import { ReactComponent as AddressIcon } from '../img/map.svg'; 
import { ReactComponent as LocationIcon } from '../img/location.svg';
import { ReactComponent as PinIcon } from '../img/pin.svg';
import { ReactComponent as SchoolIcon } from '../img/school.svg';

const icons = {
  mobile: MobileIcon,
  email: EmailIcon,
  hostel:HostelIcon,
  transport:TransportIcon,
  Parents:Parents,
  Student:Student,
  Documents:DocumentIcon,
  Pdf:  PdfIcon,
  Address:AddressIcon,
  Location:LocationIcon,
  Pin:PinIcon,
  School:SchoolIcon
};

const Icon = ({ iconName, width = "30px", height = "30px", fill="#EBF5FD" }) => {
  const IconComponent = icons[iconName];

  if (!IconComponent) {
    return null; 
  }

  return (
    <div style={{width:"50px", height:"50px", "backgroundColor":fill ,borderRadius:"10px"}} className='d-flex justify-content-center align-items-center' >
        <IconComponent width={width} height={height} />
    </div>
  );
};

export default Icon;
