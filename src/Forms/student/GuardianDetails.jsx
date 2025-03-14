import React, { useState } from "react";
import IMG from "../../img/Upload.png";
import Form from "react-bootstrap/Form";
function GuardianDetails() {
  const [GuardianDetails, setGuardianDetails] = useState(null);

  const handleGuardianDetails = (e) => {
    const file = e.target.files[0];
    setGuardianDetails(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setGuardianDetails(null);
  };

  return (
    <div>
      <div className="section1 mb-5 p-2 pb-5" style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px'}} >
        <h4 className="mt-5">Guardian Details</h4>
        <div class="radio-wrapper-2">
          <label for="example-3">
            <b>If Guardian Is</b>
          </label>

          <div className="mx-3">
            <input id="example-2" type="radio" name="radio-examples" />
            <label for="example-2">Parents</label>
          </div>
          <div className="mx-3">
            <input id="example-2" type="radio" name="radio-examples" />
            <label for="example-2">Guardian</label>
          </div>
          <div className="mx-3">
            <input id="example-2" type="radio" name="radio-examples" />
            <label for="example-2">Others</label>
          </div>
        </div>

        <div className="d-flex justify-content-start mt-5">
          {/* Image preview or placeholder */}
          <div>
            {GuardianDetails ? (
              <img
                src={GuardianDetails}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "150px" }}
              />
            ) : (
              <img
                src={IMG}
                alt="Placeholder"
                style={{ maxWidth: "100%", maxHeight: "150px" }}
              />
            )}
          </div>
          <div className="mx-3">
            <label
              htmlFor="file-uploads"
              className="custom-file-upload mx-3 mb-2"
            >
              Upload
            </label>
            <input
              id="file-uploads"
              type="file"
              accept="image/*"
              onChange={handleGuardianDetails}
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
              <b> Name</b>
            </Form.Label>
            <Form.Control type="text" placeholder={`Enter  Name`} />
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
    </div>
  );
}

export default GuardianDetails;
