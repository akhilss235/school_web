import React from "react";
import Modal from "react-bootstrap/Modal";
import { Input } from "../components/Input";
import { CloseIcon } from "../components/CloseIcon";
import { Dropdown } from "../components/student/Dropdown";
import { StudentCard } from "../components/student/StudentCard";
import { InputDropdown } from "../components/InputDropdown";
import { ModalButton } from "../components/ModalButton";
import { toCamelCase } from "../utils/function";

function NewSubject({
  show,
  onHide,
  title,
  data,
  isInactive = false,
  isDelete = false,
  label = "",
  btnTitle,
}) {
  const buttonTitle = btnTitle === "" ? title : btnTitle;

  const Form = ({ item }) =>
    item.name.toLowerCase() === "duration" ? (
      <InputDropdown label={item?.name} value={item?.value} />
    ) : item.type === "select" ? (
      <Dropdown label={item?.name} value={item?.value} />
    ) : item.type === "input" ? (
      <Input label={item?.name} />
    ) : (
      <Input label={item?.name} type={item.type} options={item.options} />
    );

  const FormContainer = ({ data }) => 
    data.map((item, index) =>
      Array.isArray(item) ? (
        <div key={index} className="modal-form-input" style={{ width: "100%" }}>
          {item.map((it) => (
            <Form key={it.id} item={it} />
          ))}
        </div>
      ) : (
        <Form key={item.id} item={item} />
      )
    );
  

  const isLabelEmpty = label === "";
  return (
    <Modal
      {...{ show, onHide }}
      size="auto"
      border="none"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        className={`d-flex flex-row ${
          isLabelEmpty
            ? "justify-content-between"
            : "justify-content-center position-relative"
        } align-items-center p-3`}
      >
        <Modal.Title id="contained-modal-title-vcenter fw-semibold'">
          {title}
        </Modal.Title>
        <div
          style={{ position: !isLabelEmpty ? "absolute" : "", right: "20px" }}
        >
          <CloseIcon onClose={onHide} />
        </div>
      </div>
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center p-3">
        {(isInactive || isDelete) && (
          <div className="d-flex flex-column gap-3 justifu-content-center align-items-center">
            {data && <StudentCard data={data} isInfo={false} />}
            <p className="m-0">Are you sure you want to {label}</p>
          </div>
        )}
        {data && !isInactive && <FormContainer data={data} />}
      </div>
      <ModalButton onHide={onHide} buttonTitle={buttonTitle} />
    </Modal>
  );
}

export default NewSubject;
