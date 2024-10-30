import React from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';
import { GoFilter } from 'react-icons/go';
import { IconContext } from 'react-icons';
import BasicBreadcrumbs from '../components/BasicBreadcrumbs';

function StudentListTable() {

  return (
    <div className="p-3">
    <div className=' text-start'> 
    <h4><b>Student List</b></h4>
    
    <BasicBreadcrumbs />
    </div>
<div style={{backgroundColor:''}}>



    <div className="row mb-2 mt-4 align-items-center" style={{gap:"10px"}}>
        <div className="col-auto mt-2">
          <div
            className="card d-flex align-items-center justify-content-center filterbody p-2"
            style={{ height: "35px" }}
          >
            <IconContext.Provider
              value={{ className: "react-icons", size: "1.5em" }}
            >
              <div className="d-flex align-items-center">
                <GoFilter className="Filteric" />
                <span className="Filteric p-1">Filter</span>
              </div>
            </IconContext.Provider>
          </div>
        </div>



        <div className="col-auto mt-2">
          {/* <GetDate
            title={"From"} */}

        </div>

        <div className="col-auto mt-2">
          {/* <GetDate
            title={"To"}
  */}
      
        </div>

        <div className="col-auto mt-2">
          <Form.Control
            placeholder="Search...."
            type="text"

          />
        </div>

        
      </div>
 

    
      {/* <div className="table-responsive">
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Created on</th>
              <th>Account Head</th>
              <th>Sub Account Head</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </Table>
      </div> */}
      </div>
    </div>
  );
}

export default StudentListTable;
