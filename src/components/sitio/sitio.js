import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import main from '../../assets/main.jpg';
import './sitio.css';

function Sitios(){
    return(
        <Container id="sitio">
            <Row >
                <Col>
                    <h1>Bienvenido a la region caribe</h1>
                </Col>
                <Col>
                    <img src={main} alt=""/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        En esta parte se incluye una breve descripción del sitio a visitar
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>
                        video del sitio
                    </h2>
                </Col>
            </Row>
            <Row >
                <Col>
                    <h3>como llegar al sitio</h3>
                </Col>
                <Col>
                    <img src={main} alt=""/>
                </Col>
            </Row >
            <Row>
                <Col>
                <Button variant="primary" type="submit">
                    Agregar a mis rutas 
                </Button>
                </Col>
            </Row>
        </Container>

        );
    }
    
export default Sitios;