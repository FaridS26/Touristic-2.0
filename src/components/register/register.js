import React from "react";
import turistic from '../../assets/Turistic.jpg';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./register.css";

function Register(){
    return(
        <Container id="login-container1">
        <Row >
            <Col>
            <Form>
                <Form.Group>
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese nombre completo" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese Correo Electrónico" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label="Mantener la sesión iniciada" />
                    </Form.Group>
                <Button 
                    variant="primary" 
                    type="submit"
                    >
                    Crear cuenta
                </Button>
            </Form>
            </Col>
            <Col>
                <img src={turistic} alt=""/>
            </Col>
        </Row>
        <Row>
        </Row>

    </Container>

    );
}
    
export default Register;