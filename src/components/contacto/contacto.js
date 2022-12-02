import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './contacto.css'

function Contacto(){
    return(
        <Container  fluid id="container">
            <Row>
                <Col
                sm="12"
                xs="12"
                md={{span:4,offset:4}}
                lg={{span:4,offset:4}}
                xl={{span:4,offset:4}}
                >
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
                </Col>
            </Row>

        </Container>
        );
    }
    
export default Contacto;