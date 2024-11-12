import React, { useState } from 'react'
import { toCamelCase, color, checkColor } from '../utils/function';
import { useDispatch, useSelector } from 'react-redux';
import { onChange, selectAllModalData } from '../features/modal/modalSlice';

export const RadioButton = ({label, options}) => {
  const dispatch = useDispatch()
  const data = useSelector(selectAllModalData)
  console.log("data", data)
  const name = label === "Result of the Grade" ? "resultGrade" : toCamelCase(label)
  
  const handleChange = (item)=>{
    dispatch(onChange({name:name, value:item}))
  }
  
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
            className={`form-check-label ${checkColor(item)}`}
            style={{ color: color(item)}}
            onClick={() => handleChange(item)}
          >
            {item}
          </label>
        </div>
      ))
  )
}
