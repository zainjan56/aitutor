import React from 'react';
import './Course.css';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Typography from '@mui/material/Typography';
import "react-tooltip/dist/react-tooltip.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import img from '../project/title1.png';
import imgTwo from '../project/title3.png';
import imgThree from '../project/title4.png';

const Course = () => {

    const nowOne = 35;
    const nowTwo = 51;
    const nowThree = 40;
    const nowFour = 70;
    const nowFive = 75;

    return (
        <div>
            <div className='container'>
                <p id='courseTitle'><b>Registered Courses</b></p>

                <Row xs={2} md={3}>
                    <Col>
                        <Card>
                            <div className='cardArea'>
                                <Card.Img variant="top" src={img} className='cardImg' />
                                <h1 className='courseName1'>Python</h1>
                            </div>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className='toolTip'>
                                        <div id="app-title">
                                            <h1 className='headingTwo'>Variables</h1>
                                            <Typography paragraph><ProgressBar now= 
                                             {nowOne}
                                                label=
                                                {`${nowOne}%`} variant='warning' />
                                            </Typography><br>
                                            </br>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                        <div id="app-titleTwo">
                                            <h1 className='headingTwo'>Conditional
                                                Statements</h1>
                                            <Typography paragraph><ProgressBar now=
                                                {nowTwo} label=
                                                {`${nowTwo}%`} /></Typography><br></br>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                        <div id="app-titleThree">
                                            <h1 className='headingTwo'>Functions</h1>
                                            <Typography paragraph><ProgressBar now= 
                                             {nowThree}
                                                label={`${nowThree}%`} variant='warning' 
                                                 />
                                            </Typography><br></br>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                        <div id="app-titleFour">
                                            <h1 className='headingTwo'>Loops</h1>
                                            <Typography paragraph><ProgressBar now= 
                                             {nowFour}
                                                label=
                                                {`${nowFour}%`} /></Typography><br></br>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                        <div id="app-titleFive">
                                            <h1 className='headingTwo'>Lists</h1>
                                            <Typography paragraph><ProgressBar now= 
                                             {nowFive}
                                                label=
                                                {`${nowFive}%`} /></Typography><br></br>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card>
                            <div className='cardArea' id='areaTwo'>
                                <Card.Img variant="top" src={imgTwo} className='cardImg' />
                                <h1 className='courseName1'>C++</h1>
                            </div>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className='toolTip'>
                                        <div id="appOne">
                                            <h1 className='headingTwo'>Variables</h1>
                                            <Typography paragraph><ProgressBar now= 
                                             {nowOne}
                                                label=
                                                {`${nowOne}%`} variant='warning' /> 
                                                 </Typography>
                                            <br></br>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                        <div id="appTwo">
                                            <h1 className='headingTwo'>Conditional 
                                             Statements</h1>
                                            <Typography paragraph><ProgressBar now= 
                                             {nowTwo} label=
                                                {`${nowTwo}%`} /></Typography><br></br>
                                            
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="appThree">
                                    <h1 className='headingTwo'>Functions</h1>
                                    <Typography paragraph><ProgressBar now={nowThree} 
                                    label=
                                        {`${nowThree}%`} variant='warning' /> 
                                        </Typography> 
                                    <br></br>
                                    </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <div className='cardArea' id='areaThree'>
                                <Card.Img variant="top" src={imgThree} 
                                 className='cardImg' id='imageThree'/>
                                <h1 className='courseName1'>Java</h1>
                            </div>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleOne">
                                    <h1 className='headingTwo'>Variables</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} variant='warning' /></Typography><br>
                                    </br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleTwo">
                                    <h1 className='headingTwo'>Conditional 
                                     Statements</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} /></Typography><br></br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleThree">
                                    <h1 className='headingTwo'>Functions</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} variant='warning' /></Typography><br>
                                    </br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleFour">
                                    <h1 className='headingTwo'>Loops</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} /></Typography><br></br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleFive">
                                    <h1 className='headingTwo'>Lists</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} /></Typography><br></br>
                                    </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <div className='cardArea' id='areaFour'>
                                <Card.Img variant="top" src={img} className='cardImg' />
                                <h1 className='courseName1'>Python</h1>
                            </div>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleOne">
                                    <h1 className='headingTwo'>Variables</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} variant='warning' /></Typography><br>
                                    </br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleTwo">
                                    <h1 className='headingTwo'>Conditional 
                                     Statements</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} /></Typography><br></br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleThree">
                                    <h1 className='headingTwo'>Functions</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} variant='warning' /></Typography><br>
                                    </br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleFour">
                                    <h1 className='headingTwo'>Loops</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} /></Typography><br></br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleFive">
                                    <h1 className='headingTwo'>Lists</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} /></Typography><br></br>
                                    </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <div className='cardArea' id='areaFive'>
                                <Card.Img variant="top" src={img} className='cardImg' />
                                <h1 className='courseName1'>Python</h1>
                            </div>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleOne">
                                    <h1 className='headingTwo'>Variables</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} variant='warning' /></Typography><br>
                                    </br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleTwo">
                                    <h1 className='headingTwo'>Conditional 
                                     Statements</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} /></Typography><br></br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleThree">
                                    <h1 className='headingTwo'>Functions</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} variant='warning' /></Typography><br>
                                    </br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleFour">
                                    <h1 className='headingTwo'>Loops</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} /></Typography><br></br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleFive">
                                    <h1 className='headingTwo'>Lists</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} /></Typography><br></br>
                                    </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <div className='cardArea' id='areaSix'>
                                <Card.Img variant="top" src={img} className='cardImg' />
                                <h1 className='courseName1'>Python</h1>
                            </div>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleOne">
                                    <h1 className='headingTwo'>Variables</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} variant='warning' /></Typography><br>
                                    </br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleTwo">
                                    <h1 className='headingTwo'>Conditional 
                                     Statements</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} /></Typography><br></br>
                                    </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='toolTip'>
                                    <div id="titleThree">
                                    <h1 className='headingTwo'>Functions</h1>
                                    <Typography paragraph><ProgressBar label=
                                        {`${0}%`} variant='warning' /></Typography><br>
                                    </br>
                                    </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>   
            </div>
        </div>
    )
}

export default Course;