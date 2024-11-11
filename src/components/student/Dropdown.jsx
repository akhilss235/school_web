import React from "react";

export const Dropdown = ({ label, value, selectedValue, onChange }) => {
  return (
    <div className="d-flex flex-column gap-2" style={{ width: "100%" }}>
      <label className="fw-medium">{label}</label>
      <select
        className="select"
        style={{ height: "50px" }}
        value={selectedValue}
        onChange={onChange}
      >
        {value.map((item, index) => (
          <option value={item} key={index} selected={selectedValue === undefined && index === 0}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
