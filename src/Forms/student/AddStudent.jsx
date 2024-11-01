import React, { useState } from "react";
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import PersonalInformation from "./PersonalInformation";
import GuardianInformation from "./GuardianInformation";

function AddStudent() {
  return (
    <div className="p-3">
      <div className="text-start mb-3">
        <h4>
          <b>Add Student</b>
        </h4>
        <BasicBreadcrumbs />
      </div>
      <PersonalInformation />
      <GuardianInformation />
    </div>
  );
}

export default AddStudent;
