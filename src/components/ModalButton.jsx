import React from 'react'
import { useDispatch } from 'react-redux'
import { resetState } from '../features/modal/modalSlice'

export const ModalButton = ({onHide, buttonTitle}) => {
    const dispatch = useDispatch()
    const handleDiscard = ()=>{
        dispatch(resetState())
        onHide()
    }
  return (
    <div className="d-flex flex-row justify-content-center align-items-center gap-2 p-3">
    <div className="discard-btn" onClick={handleDiscard}>
      <p className="sign-in">Discard</p>
    </div>
    <div
      className="login-button"
      style={{ width: "200px", height: "50px" }}
    >
      <p className="sign-in">{buttonTitle}</p>
    </div>
  </div>
  )
}
