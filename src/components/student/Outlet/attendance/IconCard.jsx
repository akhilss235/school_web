import React from "react";
import Icon from "../../../SvgComponent";
// import { Row, Col } from "react-bootstrap";

export const IconCard = ({
  data,
  isGray = false,
  isAddress = false,
  isBorder = false,
  borderColor = "",
}) => {
  return (
    <div 
    className="d-flex" 
    >
    {data?.map((item) => (
      <div
        key={item.id}
        className="d-flex p-3" // Use Bootstrap class for padding, or you can set custom styles below
        style={{
          background: "white",
          borderRadius: '10px',
        //   margin: '10px', // This adds space between the cards
          display: 'flex',
          alignItems: 'center',
          flexGrow:'1',
          border: `1px solid ${item.icon === "Present" ? "#D5FDCE":
          item.icon === "Absent" ? "#ECCDD5" :
          item.icon === "FirstHalf" ? "#E2CCE2":
          item.icon === "Late" ? "#F9EED1" :
          "white"}`
          // width: '250px', // You can adjust the width as needed
        }}
      >
        <div style={{ width: '50px', marginRight: '10px' }}>
          <Icon
            iconName={item.icon}
            fill={
              item.icon === "Present" ? "#D5FDCE":
              item.icon === "Absent" ? "#ECCDD5" :
              item.icon === "FirstHalf" ? "#E2CCE2":
              "white"
            }
            width={item.icon === "Present" ? "35px" : "25px"}
            height="30px"
          />
        </div>
        <div >
          <p
            className="m-0"
            style={{ color: "black", fontSize: isAddress ? "14px" : "" }}
          >
            {item.title}
          </p>
          <p
            className="m-0"
            style={{
              color: "#7A7A7A",
              fontSize: isAddress ? "12px" : "",
            }}
          >
            {item.value}
          </p>
        </div>
      </div>
    ))}
  </div>
  );
};
