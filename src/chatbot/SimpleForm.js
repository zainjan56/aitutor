import React from "react";
import ChatBot from 'react-simple-chatbot';
import './SimpleForm.css';
import { FaRobot } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';

const SimpleForm = () => {
    return (
        <div className="OuterDiv">
            <div className='title'>
                <h2 style={{color: "white"}}>Welcome To Your AI Tutor</h2>
            </div><br></br>

            <div className="col-sm-3">
                <div className="IconOne">
                <h1 style={{color: "rgb(110,72,170)", cursor: "pointer"}}><FaRobot /></h1>
                <h1 style={{color: "rgb(230,193,156)", cursor: "pointer"}}><FaUserGraduate 
                /></h1>
                </div>
            </div>
            <div className="col-sm-3">
                <ChatBot id="chatbot"
                    steps={[
                        {
                            id: '1',
                            message: 'What is your name?',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            user: true,
                            trigger: '3',
                        },
                        {
                            id: '3',
                            message: 'Hi {previousValue}, nice to meet you! If you are ready then write Yes for starting your test. ',
                            trigger: '4',
                        },
                        {
                            id: '4',
                            user: true,
                            trigger: '5',
                        },
                        {
                            id: '5',
                            message: 'Python is ________ language?',
                            trigger: '6',
                        },
                        {
                            id: '6',
                            user: true,
                            trigger: '7',
                        },
                        {
                            id: '7',
                            message: 'What is a correct syntax to output "Hello World" in Python?',
                            trigger: '8',
                        },
                        {
                            id: '8',
                            user: true,
                            trigger: '9',
                        },
                        {
                            id: '9',
                            message: 'How do you insert COMMENTS in Python code?',
                            trigger: '10',
                        },
                        {
                            id: '10',
                            user: true,
                            trigger: '11',
                        },
                        {
                            id: '11',
                            message: 'How do you create a variable with the numeric value 5?',
                            trigger: '12',
                        },
                        {
                            id: '12',
                            user: true,
                            trigger: '13',
                        },
                        {
                            id: '13',
                            message: 'Done! Your Test is successfully submitted, we will share your result with you soon...:)',
                            end: true,
                        },
                    ]}
                />
            </div>
            <div className="col-sm-3">
                <div className="IconTwo">
                <h1 style={{color: "rgb(110,72,170)", cursor: "pointer"}}><FaRobot /></h1>
                <h1 style={{color: "rgb(230,193,156)", cursor: "pointer"}}><FaUserGraduate 
                /></h1>
                </div>
            </div>
        </div>
    )
}

export default SimpleForm;