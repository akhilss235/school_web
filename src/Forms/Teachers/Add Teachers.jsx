import React, { useState } from "react";
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import PersonalInformation from "./PersonalInformation";
import InfoHeader from "../../components/InfoHeader";
import StAdderss from "./StAdderss";
import TransportInformation from "./TransportInformation";
import HostelInformation from "./HostelInformation";
import StDocuments from "./StDocuments";
import StudentLoginDetails from "./StudentLoginDetails";
import ParentLoginDetails from "./ParentLoginDetails";
import WorkExperience from "./WorkExperience";
import Payroll from "./Payroll";
function AddTeachers() {
  return (
    <div className="p-3">
      <div className="text-start mb-3">
        <h4>
          <b>Add Teachers</b>
        </h4>
        <BasicBreadcrumbs />
      </div>
      <div className="mt-3">
        <PersonalInformation />
      </div>
      <div className="mt-5">
      <div className="mt-5">
     <WorkExperience />
        </div>

        <div className="mt-5">
          <InfoHeader iconName="Address" title="Address" />
          <StAdderss />
        </div>

        <div className="mt-5">
          <InfoHeader iconName="Payroll" title="Payroll" />
          <Payroll />
        </div>





        <div className="mt-5">
          <TransportInformation />
        </div>
        <div className="mt-5">
          <HostelInformation />
        </div>
        <div className="mt-5">
          <StDocuments />
        </div>
        <div className="mt-5">
        </div>
        <div className="mt-5">
          <InfoHeader
            iconName="StudentLoginDetails"
            title="Student Login Details"
          />
          <StudentLoginDetails />
        
        </div>
        <div className="mt-5">
          <InfoHeader
            iconName="StudentLoginDetails"
            title="Parent Login Details"
          />
          <ParentLoginDetails />
 
        </div>
        <div className="d-flex justify-content-end mt-5 me-5 mb-5">
          <button type="button" className="btn btn-white mx-2" style={{color:'red',backgroundColor:'white',width:'200px'}}>
          Discard
          </button>
          <button type="submit" className="btn btn-primary"style={{color:'#FFFFFF',backgroundColor:'#148CF0',width:'200px'}}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTeachers;

// function AddStudent() {

//   const [studentData, setStudentData] = useState({
//     personalInfo: {},
//     fatherInfo: {},
//     motherInfo: {},
//   });

//   const handleInputChange = (section, field, value) => {
//     setStudentData((prevData) => ({
//       ...prevData,
//       [section]: {
//         ...prevData[section],
//         [field]: value,
//       },
//     }));
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch("/api/students", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(studentData),
//       });
//       if (response.ok) {
//         console.log("Student added successfully!");
//       } else {
//         console.error("Error adding student");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       const response = await fetch(`/api/students/${studentData.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(studentData),
//       });
//       if (response.ok) {
//         console.log("Student updated successfully!");
//       } else {
//         console.error("Error updating student");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="p-3">
//       <div className="text-start mb-3">
//         <h4>
//           <b>Add Student</b>
//         </h4>
//         <BasicBreadcrumbs />
//       </div>

//       <div className="mt-3">
//         <PersonalInformation
//           data={studentData.personalInfo}
//           onInputChange={(field, value) => handleInputChange("personalInfo", field, value)}
//         />
//       </div>

//       <div className="mt-5">
//         <InfoHeader iconName="Parents" title="Parents & Guardian Information" />
//         <ParentInfo
//           title="Father’s Info"
//           titles="Father"
//           data={studentData.fatherInfo}
//           onInputChange={(field, value) => handleInputChange("fatherInfo", field, value)}
//         />
//         <ParentInfo
//           title="Mother’s Info"
//           titles="Mother"
//           data={studentData.motherInfo}
//           onInputChange={(field, value) => handleInputChange("motherInfo", field, value)}
//         />

//         <div className="d-flex justify-content-end mt-5">
//           <button type="button" className="btn btn-danger mx-2">
//             Cancel
//           </button>
//           <button type="button" onClick={handleSave} className="btn btn-primary">
//             Save
//           </button>
//           <button type="button" onClick={handleUpdate} className="btn btn-secondary mx-2">
//             Update
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddStudent;

// import React from "react";
// import Form from "react-bootstrap/Form";

// const ParentInfo = ({ title, data, onInputChange }) => {
//   return (
//     <div className="section1">
//       <h4 className="mt-5">{title}</h4>
//       <div className="row">
//         <Form.Group className="col-sm-3 mt-3">
//           <Form.Label>{title} Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={data.name || ""}
//             onChange={(e) => onInputChange("name", e.target.value)}
//             placeholder={`Enter ${title} Name`}
//           />
//         </Form.Group>
//         <Form.Group className="col-sm-3 mt-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={data.email || ""}
//             onChange={(e) => onInputChange("email", e.target.value)}
//             placeholder="Enter Email"
//           />
//         </Form.Group>
//       </div>
//     </div>
//   );
// };

// export default ParentInfo;
