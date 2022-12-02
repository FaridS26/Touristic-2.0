import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./profile.css";

function Profile(){
    return(
        <Container id="Table">
            <Row>
                <Col>
                    <h1>
                        Mis Rutas
                    </h1>
                </Col>
            </Row>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre de ruta</th>
          <th>Precio</th>
          <th>Ubicacion</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ruta 1</td>
          <td>$ 0</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Ruta 2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>ruta 3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
        </Container>

    );
 }
    
export default Profile;