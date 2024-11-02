import React from 'react'
import { StudentCard } from '../StudentCard';

export const ParentInfoCard = ({data}) => {
    const fields = ["Phone Number", "Email"]
    return (
        <div className='d-flex justify-content-between align-items-center'>
        <StudentCard data={data} isInfo={false}/>
        {
            fields.map((field, index) => (
                <div  className='d-flex align-items-center flex-column px-3' key={index}>
                    <p className='m-0 fw-semibold'>{field}:</p>
                    <p className='m-0'>{field === "Email" ? data?.email :data?.phone}</p>
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
