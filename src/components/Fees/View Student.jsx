// import React, { useState } from "react";
// import {  Table, Row, Col, } from "react-bootstrap"; // Import Dropdown
// import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";

// import { useNavigate } from "react-router-dom";
// import StLoginDetails from "../../Model/StLoginDetails";
// import StInactivate from "../../Model/StInactivate";
// import { LiaEyeSolid } from "react-icons/lia";
// import Search from "../../filter/Search";
// import AcademicYear from "../../filter/AcademicYear";
// import Mode from "../../filter/Mode";
// import Status from "../../filter/Status";
// import StaticFilter from "../../filter/StaticFilter";
// import { GoDotFill } from "react-icons/go";

// function ViewStudent() {
//   const [modalShow, setModalShow] = useState(false);
//   const [modalInactivate, setModalInactivate] = useState(false);

//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className="text-start mb-3">
//         <h4>
//           <b>Collect Fees</b>
//         </h4>
//         <BasicBreadcrumbs />
//       </div>

//       <Row
//         className="align-items-center mb-4"
//         style={{ backgroundColor: "#FFFFFF" }}
//       >
//         <Col xs={12} md={6} lg={8} className="d-flex flex-wrap">
//           <div className="me-3 mb-2 mb-md-0">
//             <AcademicYear />
//           </div>
//           <div className="me-3 mb-2 mb-md-0">
//             <StaticFilter />
//           </div>
//           <div className="me-3 mb-2 mb-md-0">
//             <Mode />
//           </div>
//           <div className="me-3 mb-2 mb-md-0">
//             <Status />{" "}
//           </div>
//         </Col>

//         <Col
//           xs={12}
//           md={3}
//           lg={4}
//           className="d-flex justify-content-md-end mt-2 mt-md-0"
//         >
//           <Search />
//         </Col>
//       </Row>

//       <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
//         <Table responsive>
//           <thead style={{ color: "#505050" }}>
//             <tr>
//             <th><div class="checkbox-wrapper-46">
//   <input class="inp-cbx" id="cbx-46" type="checkbox" />
//   <label class="cbx" for="cbx-46"><span>
//     <svg width="12px" height="10px" viewbox="0 0 12 10">
//       <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
//     </svg></span>
//   </label>
// </div></th>

//               <th>Fees Type</th>
//               <th>Due Date</th>
//               <th>Date</th>
//               <th>Amount</th>
//               <th>Mode</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td><div class="checkbox-wrapper-46">
//   <input class="inp-cbx" id="cbx-47" type="checkbox" />
//   <label class="cbx" for="cbx-47"><span>
//     <svg width="12px" height="10px" viewbox="0 0 12 10">
//       <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
//     </svg></span>
//   </label>
// </div></td>
//               <td>Emma Thomas</td>
//               <td>I</td>
//               <td>A</td>
//               <td>20240015678</td>
//               <td>Emma Thomas</td>
//               <td  >
//               <div style={{ color: "#16BE16",backgroundColor:'#ECF9EA' }}>
//               <GoDotFill /> Paid

//               </div>
//               </td>
//               <td>
//                 <LiaEyeSolid />
//               </td>
//             </tr>
//           </tbody>
//         </Table>
//       </div>
//       <StLoginDetails show={modalShow} onHide={() => setModalShow(false)} />
//       <StInactivate
//         show={modalInactivate}
//         onHide={() => setModalInactivate(false)}
//       />
//     </div>
//   );
// }

// export default ViewStudent;

import React, { useState } from "react";
import {  Table, Row, Col, } from "react-bootstrap"; // Import Dropdown
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";

import { useNavigate } from "react-router-dom";
import StLoginDetails from "../../Model/StLoginDetails";
import StInactivate from "../../Model/StInactivate";
import { LiaEyeSolid } from "react-icons/lia";
import Search from "../../filter/Search";
import AcademicYear from "../../filter/AcademicYear";
import Mode from "../../filter/Mode";
import Status from "../../filter/Status";
import StaticFilter from "../../filter/StaticFilter";
import { GoDotFill } from "react-icons/go";


function ViewStudent() {
  const [modalShow, setModalShow] = useState(false);
    const [modalInactivate, setModalInactivate] = useState(false);
  
    const navigate = useNavigate();
  
  return (
    <div>
           <div>
       <div className="text-start mb-3">
        <h4>
          <b>Collect Fees</b>
        </h4>
        <BasicBreadcrumbs />   </div>

       <Row
        className="align-items-center mb-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Col xs={12} md={6} lg={8} className="d-flex flex-wrap">
          <div className="me-3 mb-2 mb-md-0">
            <AcademicYear />
          </div>
          <div className="me-3 mb-2 mb-md-0">
            <StaticFilter />
          </div>
          <div className="me-3 mb-2 mb-md-0">
            <Mode />
          </div>
          <div className="me-3 mb-2 mb-md-0">
            <Status />
          </div>
        </Col>

        <Col
          xs={12}
          md={3}
          lg={4}
          className="d-flex justify-content-md-end mt-2 mt-md-0"
        >
          <Search />
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
            <th><div class="checkbox-wrapper-46">
  <input class="inp-cbx" id="cbx-46" type="checkbox" />
  <label class="cbx" for="cbx-46"><span>
    <svg width="12px" height="10px" viewbox="0 0 12 10">
      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </svg></span>
  </label>
</div></th>

              <th>Fees Type</th>
              <th>Due Date</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div class="checkbox-wrapper-46">
  <input class="inp-cbx" id="cbx-47" type="checkbox" />
  <label class="cbx" for="cbx-47"><span>
    <svg width="12px" height="10px" viewbox="0 0 12 10">
      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </svg></span>
  </label>
</div></td>
              <td>Emma Thomas</td>
              <td>I</td>
              <td>A</td>
              <td>20240015678</td>
              <td>Emma Thomas</td>
              <td  >
              <div style={{ color: "#16BE16",backgroundColor:'#ECF9EA' }}>
              <GoDotFill /> Paid

              </div>
              </td>
              <td>
                <LiaEyeSolid />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      {/* <StLoginDetails show={modalShow} onHide={() => setModalShow(false)} />
      <StInactivate
        show={modalInactivate}
        onHide={() => setModalInactivate(false)}
      /> */}
    </div>
    </div>
  )
}

export default ViewStudent