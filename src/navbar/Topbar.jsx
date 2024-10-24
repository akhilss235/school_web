import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineBars3 } from "react-icons/hi2";

function Topbar({ toggleOffcanvas }) {
  const location = useLocation();

  return (
    <Navbar className="navbar-custom" style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#FFFFFF' }}>
      <div className="top_section d-flex justify-content-between align-items-center">
        <HiOutlineBars3 onClick={toggleOffcanvas} style={{ cursor: 'pointer' }} className='Offcanvasicons'/>
        <Navbar.Brand href="/" className='d-flex mx-2'>
          {/* Uncomment to add a logo */}
          {/* <img src={logo} alt="Logo" style={{ width: '40px' }} /> */}
          <Nav className="me-auto " style={{ color: '#203583' }}>
            <b>INDIAN</b>
          </Nav>
        </Navbar.Brand>
      </div>
    </Navbar>
  );
}

export default Topbar;
