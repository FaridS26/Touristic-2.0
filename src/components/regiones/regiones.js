import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import main from '../../assets/main.jpg';
import './regiones.css';

function Regiones(){
    return(
        <Container id="regiones">
            <Row >
                <Col>
                    <h1>Bienvenido a la region caribe</h1>
                </Col>
                <Col>
                    <img src={main} alt=""/>
                </Col>
            </Row>
            <Row >
                <h2>
                    los sitios turisticos mas importantes 
                </h2>
                <Col>
                    <img src={main} alt=""/>
                </Col>
                    <img src={main} alt=""/>
                <Col>
                    <img src={main} alt=""/>
                </Col>
            </Row>
            <Row >
                <Col>
                    <img src={main} alt=""/>
                </Col>
                    <img src={main} alt=""/>
                <Col>
                    <img src={main} alt=""/>
                </Col>
            </Row>
        </Container>

        );
    }
    
export default Regiones;