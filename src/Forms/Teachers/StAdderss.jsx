import React from 'react'
import Form from 'react-bootstrap/Form';

function StAdderss() {
  return (
    <div style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px'}} className='p-2 pb-5'>
    <div className='row mt-3 '> 
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