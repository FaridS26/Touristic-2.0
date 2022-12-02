import React from "react";
import main from '../../assets/main.jpg';
import {  Container, Row, Col, Carousel } from 'react-bootstrap';
import './home.css';


function Home(){
    return(
        <Container fluid id="Tittle">
            <Row >
                <Col>
                    <p>Ofrecemos la solución ideal para aquellos turistas nacionales e internacionales que quieran conocer más de nuestro país</p>
                </Col>
                <Col>
                    <img src={main} alt=""/>
                </Col>
            </Row>
            <Row >
                <Col>
                </Col>
                <Col xs={4}>
                    <Carousel >
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={main}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={main}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={main}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
        
    );
}

export default Home;