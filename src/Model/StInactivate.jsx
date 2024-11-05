import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CloseIcon } from '../components/CloseIcon';
import { StudentCard } from '../components/student/StudentCard';
import { Table } from '../components/Table';

function StInactivate(props) {

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
      <Modal.Title id="contained-modal-title-vcenter " className='text-center'>Inactivate Student</Modal.Title>
      <CloseIcon onClose={props.onHide} />
    </div>
    <div className='d-flex flex-column gap-5' style={{padding:"20px"}}>
   gggg
    </div>
  </Modal>
  
  );
}


export default StInactivate