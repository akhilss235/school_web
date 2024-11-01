import React, { useEffect, useState } from 'react';
import { IconCard } from './IconCard';

export const TravelInfo = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [activeItem, setActiveItem] = useState("Hostel");
    const item = ["Hostel", "Transporation"];
    
    const data = {
        Hostel: [
            {
                id: "1",
                icon: "hostel",
                title: "Embel Hostel",
                value: "23"
            },
        ],
        Transporation: [
            {
                id: "1",
                icon: "transport",
                title: "Bus Route",
                value: "T.Nager",
                nestedValue:[
                    {
                        id:1,
                        title:"Bus Number",
                        "value":"TN 01 AB 2541"
                    },
                    {
                        id:2,
                        title:"Pickup Point",
                        "value":"T.Nager"
                    },
                ]
            },
        ]
    };
    const [displayedData, setDisplayedData] = useState(data[activeItem]);

    const handleChangeItem = (item) => {
        setIsVisible(false);
        setTimeout(() => {
            setActiveItem(item)
            setDisplayedData(data[item]);
            setIsVisible(true); 
        }, 500); 
    };

    console.log("displayedData", displayedData)

    return (
        <div className='info' style={{ gap: "10px", padding: "0px" }}>
            <div className='d-flex flex-row gap-3 justify-content-center align-items-center' style={{ borderBottom: "1px solid #EBF5FD" }}>
                {item.map((item, index) => (
                    <p className={`m-0 fw-semibold item ${activeItem === item ? "item-active" : ""}`} style={{ fontSize: "17px", cursor: "pointer" }} key={index} onClick={() => handleChangeItem(item)}>{item}</p>
                ))}
            </div>
            <div className='d-flex flex-column gap-4' style={{ padding: "10px", transition:".5s easeInOut" }}>
                <div className={`icon-card-container ${isVisible ? 'icon-card-visible' : ''}`}>
                    <IconCard data={displayedData} isGray={true}/>
                </div>
                <div className={`d-flex flex-row gap-3 align-items-center icon-card-container ${isVisible ? 'icon-card-visible' : ''}`}>
                    {
                        displayedData[0]?.nestedValue?.map((item)=>(
                        <div key={item.id}>
                            <p className='m-0' style={{ color:"#7A7A7A",fontSize:"14px",height: "20px" }}>{item.title}</p>
                            <p className='m-0 fw-semibold' style={{ fontSize:"14px",height: "20px" }}>{item.value}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
