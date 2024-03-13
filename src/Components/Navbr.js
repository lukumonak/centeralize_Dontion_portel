import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
function Nvbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <nav className="nvbr">
      <div className="container1">
        <h3 className="logo">logo</h3>

        <ul className={mobile ? "nv-links-mobile" : "nv-links"}>
          <Link to='/'><li>Home</li></Link>
          <Link to='/aboutus'><li>About Us</li></Link>
          <Link to='/help'><li>Need Help</li></Link>
          <Link to='/publication'><li>Publication</li></Link>
          <Link to='/donate'><li>Donate</li></Link>
          <Link><li>
        </li></Link>
      <Link><li>
        <Navbar variant="dark" bg="dark" >
      
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              title="Support us"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Monitary support</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Collaboration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Volunteer</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </li></Link>
    </ul>

        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)} >
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
export default Nvbar