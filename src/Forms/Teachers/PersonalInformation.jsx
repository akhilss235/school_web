import React, { useState } from "react";
import IMG from "../../img/Upload.png";
import { CiSquareAlert } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import InfoHeader from "../../components/InfoHeader";
import Select from "react-select";

function PersonalInformation() {
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImagePreview(URL.createObjectURL(file));
        };
        const myData = [
          { label: "English", value: 1 },
          { label: "Malayalam", value: 2 },
        ];
      
        const [selectedType, setSelectedType] = useState("Types1");
      
        const handleTypeClick = (type) => {
          setSelectedType(type);
        };
      
    const handleRemoveImage = () => {
      setImagePreview(null);
    };
    const customStyles = {
      container: (provided) => ({
        ...provided,
        flex: 1,
      }),
      control: (provided) => ({
        ...provided,
        borderColor: "#ccc",
      }),
    };
  return (
    <div style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px' }}>



      <InfoHeader iconName="Student" title="Personal Information" />
<div className="p-3 pb-5">


      <div className="d-flex justify-content-start mt-5 " style={{backgroundColor:'#FFFFFF'}}>
        {/* Image preview or placeholder */}
        <div>
          {imagePreview ? (
            <img
              src={imagePreview}
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
        
          <label htmlFor="file-upload" className="custom-file-upload mx-3 mb-2">
            Upload
          </label>
          <input
            id="file-upload"
            type="file"

            accept="image/*"
            onChange={handleFileChange}
          />

          <button
            type="button"
            className="btn btns mx-3"
            onClick={handleRemoveImage} 
            style={{ backgroundColor: "#148CF0", color: "#FFFFFF" }}
          >
            Remove
          </button>

          <div ><p className="Upload">Upload image size 4MB, Format JPG, PNG, SVG</p></div>
        </div> 
      </div>

      <div className="row ">
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Teacher Id</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Teacher  Id" />
        </div>

        <div className="col-sm-3 mt-3">
        <Form.Label>
            <b>First Name</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </div>

        <div className="col-sm-3 mt-3">
        <Form.Label>
            <b>Last Name</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </div>
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Date of Joining</b>
          </Form.Label>
          <Form.Control type="date"/>
        </div>
      </div>







      <div className="row">
        <div className="col-sm-3 mt-3">
        <Form.Label>
            <b>Class</b>
          </Form.Label>
          <Form.Select>
            <option> select Class</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>

        <div className="col-sm-3 mt-3">
        <Form.Label>
            <b>Section</b>
          </Form.Label>
          <Form.Select>
            <option> select Section</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>

        <div className="col-sm-3 mt-3">
        <Form.Label>
            <b>Subject</b>
          </Form.Label>
          <Form.Select>
            <option> select Subject</option>
            <option value="1">English</option>
          </Form.Select>{" "}
        </div>
        <div className="col-sm-3 mt-3">
        <Form.Label>
            <b>Gender</b>
          </Form.Label>
          <Form.Select>
            <option> select Gender</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>


      </div>







      <div className="row">
        <div className="col-sm-3 mt-3">
        <Form.Label>
            <b>Primary Contact Number </b>
          </Form.Label>
        <Form.Control type="number" placeholder="Enter Primary Contact Number" />

        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Email Address</b>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter " />
        </div>
  
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Blood Group</b>
          </Form.Label>
          <Form.Select>
            <option> select Blood Group</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>
        <div className="col-sm-3 mt-3">
        <Form.Label>
            <b>Date of Birth</b>
          </Form.Label>
          <Form.Control type="date" placeholder="Enter Date of Birth" />
        </div>
      </div>







      <div className="row">
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Father’s Name</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Father’s Name" />

        </div>

        <div className="col-sm-3 mt-3">
        <Form.Label>
            <b>Mother’s Name</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Mother’s Name" />

        </div>

        <div className="col-sm-3 mt-3">
        <Form.Label>
            <b>Marital Status</b>
          </Form.Label>
          <Form.Select>
            <option> select Marital Status</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Mother Tongue</b>
          </Form.Label>
          <Form.Select>
            <option> select Mother Tongue</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Qualification</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Qualification"
          />
        </div>

        <div className="col-sm-3 mt-3">
        <Form.Label>Language Known </Form.Label>
          <Select
            name="Language"
            options={myData}
            isMulti={true}
            closeMenuOnSelect={false}
            styles={customStyles}
       
          />
        </div>
      </div>
</div>
    </div>
  )
}

export default PersonalInformation