import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdDescription } from 'react-icons/md';
import './Form.css';
import axios from "axios";

const regForm = () => {

    const submitHandler = (e) => {
         e.preventDefault();
         const UserName = e.target.username.value;
         const Email = e.target.email.value;
         const Password = e.target.password.value;
         const Description = e.target.descp.value;
         axios.post("https://www.jamilahmadicp.ml/register_student/",{
            uname:UserName,
            email:Email,
            pwd:Password,
            desc:Description
         }).then(response => {
            console.log(response);
            e.target.reset();
         }).catch(error => {
            console.log(error);
         })
    }
    return (
        <div className="container">
            <Form onSubmit={submitHandler}>
                <p className="title">Student Registration Form</p>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        id="username"
                        name="username"
                        aria-describedby="basic-addon1"
                        required
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><MdEmail /></InputGroup.Text>
                    <Form.Control
                        placeholder="Email"
                        aria-label="Email"
                        id="email"
                        name="email"
                        aria-describedby="basic-addon1"
                        type="email"
                        required
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><RiLockPasswordFill /> 
                    </InputGroup.Text>
                    <Form.Control
                        placeholder="Password"
                        aria-label="Password"
                        id="password"
                        name="password"
                        aria-describedby="basic-addon1"
                        type="password"
                        required
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><MdDescription /> 
                    </InputGroup.Text>
                    <Form.Control
                        placeholder="Description"
                        aria-label="Description"
                        id="descp"
                        name="descp"
                        aria-describedby="basic-addon1"
                        required
                    />
                </InputGroup>
                <div className="d-grid gap-2">
                <Button variant="primary" size="sm" type="submit">
                    Sign In
                </Button>
            </div>
            </Form><br></br>

            <div>
                <p>Forgot your password?<Button variant="link" id="reset">Reset your
                    password</Button></p>
            </div><br></br>
        </div>
    )
}

export default regForm;
