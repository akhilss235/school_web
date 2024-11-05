import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { CloseIcon } from '../components/CloseIcon';
import { StudentCard } from '../components/student/StudentCard';

function StInactivate(props) {
  const data = {
    name:"enk peru illada",
    "number":"211241252",
    "class":"yeeii"
  }

  return (
    <Modal
    {...props}
    className='custom-modal'
    size="auto"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <div className='d-flex flex-row justify-content-center align-items-center p-3' style={{position:"relative"}}>
      <Modal.Title id="contained-modal-title-vcenter " className='text-center'>Inactivate Student</Modal.Title>
      <div style={{position:"absolute", right:"20px"}}>
        <CloseIcon onClose={props.onHide} />
      </div>
    </div>
    <div className='d-flex flex-column align-items-center justify-content-center gap-3' style={{padding:"20px", borderbottom:"1px solid #EBF5FD"}}>
      <StudentCard data={data} isInfo={false}/>
      <p className='m-0'>Are you sure you want to inactivate the student?</p>
      <div className='d-flex flex-row justify-content-center align-items-center gap-2'>
          <div 
            className='discard-btn' 
            onClick={props.onHide}
          >
            <p className="sign-in">Discard</p>
          </div>
          <div className="login-button" style={{width:"200px", height:"50px"}}>
            <p className="sign-in">Inactivate Student</p>
          </div>
        </div>
    </div>
  </Modal>
  
  );
}


export default StInactivate