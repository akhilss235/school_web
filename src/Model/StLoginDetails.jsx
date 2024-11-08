import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { CloseIcon } from '../components/CloseIcon';
import { StudentCard } from '../components/student/StudentCard';
import { Table } from '../components/Table';

function StLoginDetails(props) {
  const data = [{
    name:"emma stone",
    "number":"211241252",
    "class": "I A"
  }]
  const columns = ["User Type", "Username", "Password"]
  const rows = [
    {
      "id":"1",
      userType:"student",
      userName: "emma@2020",
      password:"podabaadu"
    },
    {
      "id":"2",
      userType:"student",
      userName: "stoneremma@2020",
      password:"akhilBro"
    },
  ]
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    style={{
      boxShadow: "2px 2px 8px 0px #ABABAB29",  // Custom box shadow style
      border: "none",
    }}
  >
    <div className='d-flex flex-row justify-content-between align-items-center p-3'>
      <Modal.Title id="contained-modal-title-vcenter">Login Details</Modal.Title>
      <CloseIcon onClose={props.onHide} />
    </div>
    <div className='d-flex flex-column gap-5' style={{padding:"20px"}}>
        {
          data.map((item,index)=>(
            <div style={{borderRadius:"10px", backgroundColor:"#EBF5FD", padding:"10px"}} key={index}>
                <StudentCard data={item} isInfo={false} />
            </div>
          ))
        }
        <Table columns={columns} rows={rows} isBorder={false} bgColor='#EBF5FD' />
    </div>
  </Modal>
  
  );
}

export default StLoginDetails;
