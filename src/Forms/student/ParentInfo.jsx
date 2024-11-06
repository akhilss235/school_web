import React, { useState } from "react";
import IMG from "../../img/Upload.png";
import Form from "react-bootstrap/Form";

const ParentInfo = ({ title ,titles}) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div   style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px'}} className="p-2 pb-5">
      <h4 className="mt-5">{title}</h4>
      <div className="d-flex justify-content-start mt-3">
        <div>
          <img
            src={image || IMG}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "150px" }}
          />
        </div>
        <div className="mx-3">
          <label htmlFor={`${title}-file-upload`} className="custom-file-upload mx-3 mb-2">
            Upload
          </label>
          <input
            id={`${title}-file-upload`}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="btn mx-3"
            onClick={handleRemoveImage}
            style={{ backgroundColor: "#148CF0", color: "#FFFFFF" }}
          >
            Remove
          </button>
          <div>Upload image size 4MB, Format JPG, PNG, SVG</div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>{titles} Name</b>
          </Form.Label>
          <Form.Control type="text" placeholder={`Enter ${title} Name`} />
        </div>
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Email</b>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </div>
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Phone Number</b>
          </Form.Label>
          <Form.Control type="tel" placeholder="Enter Phone Number" />
        </div>
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Occupation</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Occupation" />
        </div>
      </div>
    </div>
  );
};

export default ParentInfo;
