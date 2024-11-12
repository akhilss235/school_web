import React, { useState } from 'react'
import { toCamelCase } from '../utils/function';
import { useDispatch, useSelector } from 'react-redux';
import { onChange, selectAllModalData } from '../features/modal/modalSlice';

export const RadioButton = ({label, options}) => {
  const dispatch = useDispatch()
  const data = useSelector(selectAllModalData)
  const color = (item) => {
    return item.toLowerCase() === ("pass" || "active") ? "#16BE16" : "#ED1C00";
  };
  
  const handleChange = (e)=>{
    dispatch(onChange(e))
  }

  const name = label === "Result of the Grade" ? "resultGrade" : toCamelCase(label)
  return (
    options.map((item, index) => (
        <div key={index} className="d-flex gap-2">
          <input
            type={"radio"}
            checked={data[name] === item}
            name={name}
            value={data[name]}
            className={`form-check-input ${
              data[name] === item ? "radio-button-checked" : "radio-button-unchecked"
            }`}
          />
          <label
            className={`form-check-label ${
              item.toLowerCase() === "pass" || item.toLowerCase() === "active"
                ? "green"
                : "red"
            }`}
            style={{ color: color(item) }}
            onClick={() => handleChange({name:name, value:item})}
          >
            {item}
          </label>
        </div>
      ))
  )
}
