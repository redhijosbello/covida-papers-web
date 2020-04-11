import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FormResultsContainer() {

  const handleSubmit = () => {
    console.log("hello!");
  };

  return (
    <Container>
      <Row className={"mt-2"}>
        <Col xs={12}>
          <p className="text-center h2 text-primary font-weight-bold">COVIDA</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
            <Form.Group controlId="titleKeyword">
              <Form.Label>Palabra en título</Form.Label>
              <Form.Control type="text" placeholder="Ej: mask" />
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="contentKeyword">
              <Form.Label>Palabra en contenido</Form.Label>
              <Form.Control type="text" placeholder="Ej: covid-19" />
            </Form.Group>
            <Button className="float-right" onClick={handleSubmit}>
              Buscar
            </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default FormResultsContainer;
