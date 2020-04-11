import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCovida from "./FormCovida";

function FormResultsContainer() {

  const receiveResults = (results: any[]) => {
    console.log(results);
  };

  return (
    <Container>
      <Row className={"mt-2"}>
        <Col xs={12}>
          <FormCovida resultsCallback={receiveResults}/>
        </Col>
      </Row>
    </Container>
  );
}

export default FormResultsContainer;
