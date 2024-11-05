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
import { ReactComponent as Siblings } from '../img/Siblings.svg';
import { ReactComponent as WarningIcon } from '../img/warning.svg';


// import { ReactComponent as Addres } from '../img/Addres.svg';
// import { ReactComponent as TransportInformation } from '../img/Transport.svg';
import { ReactComponent as HostelInformation } from '../img/HostelInformation.svg';
// import { ReactComponent as Documents } from '../img/Documents.svg';
import { ReactComponent as PreviousSchoolDetails } from '../img/PreviousSchoolDetails.svg';
import { ReactComponent as StudentLoginDetails } from '../img/StudentLoginDetails.svg';
<<<<<<< Updated upstream
import { ReactComponent as WorkExperience } from '../img/WorkExperience.svg';
=======
import { ReactComponent as PresentIcon } from '../img/present.svg';
import { ReactComponent as AbsentIcon } from '../img/absent.svg';
import { ReactComponent as FirstHalfIcon } from '../img/firsthalf.svg';
import { ReactComponent as HolidayIcon } from '../img/holiday.svg';
>>>>>>> Stashed changes

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
  School:SchoolIcon ,
  Siblings:Siblings ,
  // Addres:Addres,
  // TransportInformation:TransportInformation,
  HostelInformation:HostelInformation,
  // Documents:Documents,
  PreviousSchoolDetails:PreviousSchoolDetails ,
  StudentLoginDetails:StudentLoginDetails,
  Warning:WarningIcon,
<<<<<<< Updated upstream
  WorkExperience:WorkExperience,
=======
  Present:PresentIcon,
  Absent:AbsentIcon,
  FirstHalf:FirstHalfIcon,
  Holiday:HolidayIcon,
>>>>>>> Stashed changes
};

const Icon = ({ iconName, fill="#EBF5FD" }) => {
  const IconComponent = icons[iconName];

  if (!IconComponent) {
    return null; 
  }

  return (
    <div style={{"backgroundColor":fill ,borderRadius:"10px"}} className='d-flex justify-content-center align-items-center svgsection' >
        <IconComponent  className='iconsvg'/>
    </div>
  );
};

export default Icon;
