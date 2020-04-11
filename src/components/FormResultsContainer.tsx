import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FormResultsContainer() {

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <p className="text-center h2 myColorPrimary font-weight-bold">COVIDA</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="titleKeyword">
              <Form.Label>Palabra en título</Form.Label>
              <Form.Control type="text" placeholder="Ej: mask" />
            </Form.Group>
            <Form.Group controlId="contentKeyword">
              <Form.Label>Palabra en contenido</Form.Label>
              <Form.Control type="text" placeholder="Ej: covid-19" />
            </Form.Group>
            <Button type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormResultsContainer;
