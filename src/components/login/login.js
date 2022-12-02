import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import "./login.css";
import turistic from '../../assets/Turistic.jpg';

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  } 
    }
    render() {
        return (  
            <Container id="login-container">
        <Row >
            <Col>
            <Form>
            <Form>
                <Form.Group>
                    <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese el correo" />
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
                    Iniciar sesión
                    </Button>
                    <p>¿Aún no se ha registrado? Registrese <a href="/register"><b>aquí</b></a></p>
                    </Form>
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
}


