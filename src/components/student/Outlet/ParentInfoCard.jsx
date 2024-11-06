import React from 'react'
import { StudentCard } from '../StudentCard';

export const ParentInfoCard = ({data}) => {
    const fields = ["Phone Number", "Email"]
    return (
        <div className='parent-card'>
        <StudentCard data={data} isInfo={false}/>
        {
            fields.map((field, index) => (
                <div  className='d-flex  flex-column contact-cont' key={index} style={{width:"100%"}}>
                    <p className='m-0 fw-semibold p-0'>{field}:</p>
                    <p className='m-0 p-0'>{field === "Email" ? data?.email :data?.phone}</p>
                </div>
            ))
        }
        </div>
    )
}

const styles = {
    photo: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '16px',
    },
    info:{
        display: 'flex',
        flexDirection: 'row',
    }
}
