import React, { useState } from "react";
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import InfoHeader from "../../components/InfoHeader";
import StAdderss from "../student/StAdderss";
import PersonalInformation from "./PersonalInformation";
import WorkExperience from "../Teachers/WorkExperience";
import Payroll from "../Teachers/Payroll";
import Leaves from "../Teachers/Leaves";
import BankAccountDetail from "../Teachers/BankAccountDetail";
import TransportInformation from "../student/TransportInformation";
import HostelInformation from "../student/HostelInformation";
import StDocuments from "../student/StDocuments";
import StaffLoginDetails from "./StaffLoginDetails";

function AddStaff() {
  return (
    <div className="p-3">
      <div className="text-start mb-3">
        <h4>
          <b>Add Staff</b>
        </h4>
        {/* <BasicBreadcrumbs /> */}
        <BasicBreadcrumbs />
      </div>
      <div className="mt-3">
        {/* <PersonalInformation /> */}
        <PersonalInformation />
      </div>

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
      <div className="mt-3">
        <InfoHeader iconName="Leaves" title="Leaves" />

        <Leaves />
      </div>
      <div className="mt-5">
        <InfoHeader iconName="BankAccountDetail" title="Bank Account Detail" />
        {/* <BankAccountDetail /> */}
        <BankAccountDetail />
      </div>
      <div className="mt-5">
        <TransportInformation />
      </div>
      <div className="mt-5">
        <HostelInformation />
      </div>
      <div className="mt-5">
        {" "}
        <StDocuments />{" "}
      </div>
      <div className="mt-5">
        <InfoHeader
          iconName="StudentLoginDetails"
          title="Staff Login Details"
        />
        <StaffLoginDetails />
      </div>
      <div className="mt-5"></div>
      <div className="d-flex justify-content-end mt-5 me-5 mb-5">
        <button
          type="button"
          className="btn btn-white mx-2"
          style={{ color: "red", backgroundColor: "white", width: "200px" }}
        >
          Discard
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            color: "#FFFFFF",
            backgroundColor: "#148CF0",
            width: "200px",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddStaff;
