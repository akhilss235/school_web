import React from "react";
import { toCamelCase } from "../../utils/function";
import { useDispatch, useSelector } from "react-redux";
import { onChange, selectAllModalData } from "../../features/modal/modalSlice";

export const Dropdown = ({ label, value, selectedValue }) => {
  const dispatch = useDispatch()
  const name = toCamelCase(label)
  const data = useSelector(selectAllModalData)

  const handleChange = (e)=>{
    dispatch(onChange({name:e.target.name, value:e.target.value}))
  }
  return (
    <div className="d-flex flex-column gap-2" style={{ width: "100%" }}>
      <label className="fw-medium">{label}</label>
      <select
        className="select"
        style={{ height: "50px" }}
        value={data[name]}
        onChange={(e)=>handleChange(e)}
        name={name}
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
