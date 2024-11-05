import React from 'react'
import Form from 'react-bootstrap/Form';

function StAdderss() {
  return (
    <div>
    <div className='row mt-3'> 
<div className='col-sm-6'>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><b>Current Address</b></Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Enter Current Address...'/>
      </Form.Group>
</div>
<div className='col-sm-6'>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><b>Permanent Address</b></Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Enter Permanent Address...'/>
      </Form.Group>
</div>
    </div>
     
    </div>
  )
}

export default StAdderss