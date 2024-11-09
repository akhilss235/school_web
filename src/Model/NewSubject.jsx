import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { CloseIcon } from '../components/CloseIcon';
import { Dropdown } from '../components/student/Dropdown';
import { Input } from '../components/Input';
import { StudentCard } from '../components/student/StudentCard';

function NewSubject({show, onHide, title, data, isInactive=false, isDelete=false, label="", btnTitle}) {

  const buttonTitle = btnTitle === "" ? title : btnTitle

  const Form = ({item}) => (
    item.type === "select" ?
      <Dropdown label={item?.name} value={item?.value} />
      : item.type === "input" ?
        <Input label={item?.name} />
        : null
  );

  return (
    <Modal
    {...{show, onHide}}
    size="auto"
    border="none"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    {
      label === "" ?
      <div className='d-flex flex-row justify-content-between align-items-center p-3'>
        <Modal.Title id="contained-modal-title-vcenter fw-semibold'">{title}</Modal.Title>
        <CloseIcon onClose={onHide} />
      </div> :
      <div className='d-flex flex-row justify-content-center align-items-center p-3' style={{position:"relative"}}>
        <Modal.Title id="contained-modal-title-vcenter " className='text-center fw-semibold'>{title}</Modal.Title>
        <div style={{position:"absolute", right:"20px"}}>
          <CloseIcon onClose={onHide} />
        </div>
      </div>
    }
      <div className='d-flex flex-column gap-1 justifu-content-center align-items-center p-3'>
        {
          (isInactive || isDelete) &&
          <div className='d-flex flex-column gap-3 justifu-content-center align-items-center'>
            {
              data &&
              <StudentCard data={data} isInfo={false}/>
            }
            <p className='m-0'>Are you sure you want to {label}</p>
          </div>
        }
        {
          data && !isInactive && data.map((item, index) => {
            console.log("item", Array.isArray(item))
            return(
            Array.isArray(item) ? (
              <div key={index} className='d-flex flex-row gap-4' style={{ width: "100%" }}>
                {item.map((it) => (
                  <Form key={it.id} item={it} />
                ))}
              </div>
            ) : (
              <Form key={item.id} item={item} />
            )
          )})
        }
      </div>
    <div className='d-flex flex-row justify-content-center align-items-center gap-2 p-3'>
        <div 
          className='discard-btn' 
          onClick={onHide}
        >
          <p className="sign-in">Discard</p>
        </div>
        <div className="login-button" style={{width:"200px", height:"50px"}}>
          <p className="sign-in">{buttonTitle}</p>
        </div>
      </div>
  </Modal>
  
  );
}



export default NewSubject