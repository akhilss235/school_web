import React from 'react'

export const DefaultShow = ({ item, columns, title }) => {
  return (
    <div 
      className="default-cont" 
      style={{
        width: "100%", 
        display: "flex", 
        flexWrap: title === "Profile Details" ? "wrap" : "nowrap",
        gap: "20px", // add spacing between items
      }}
    >
      {Object.entries(columns).map(([key, value], index) => (
        <div 
          className='d-flex flex-column gap-1 align-items-start' 
          key={index} 
          style={{
            minWidth: title === "Profile Details" ? "200px" : "auto", // Adjust width for "Profile Details"
            flex: title === "Profile Details" ? "1 0 200px" : "auto" // Adjust flex-basis to wrap items nicely
          }}
        >
          <p 
            className="m-0 fw-semibold" 
            style={{ 
              color: "black", 
              fontSize: "16px" 
            }}
          >
            {key}
          </p>
          <p 
            className='m-0' 
            style={{
              color: "#7A7A7A", 
              fontSize: "14px" 
            }}
          >
            {item[value]}
          </p>
        </div>
      ))}
    </div>
  )
}
