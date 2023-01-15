import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Project.css';
import logo from '../project/image1.png';
import Course from './Course';

const Project = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
        <Navbar.Brand href="#home"><img src={logo} alt=''id='img1'/> AI Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Welcome</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Mohamed Zayan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar><br></br>

    <Course />
        </div>
    )
}

export default Project;