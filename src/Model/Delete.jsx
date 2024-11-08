import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { CloseIcon } from '../components/CloseIcon';

function Delete(props) {

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

  </Modal>
  
  );
}



export default Delete