import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import FormCovida from "./FormCovida";
import {PaperData} from "../dataClasses/PaperData";

function FormResultsContainer() {
  const [papers, setPapers] = useState<PaperData[]>([]);

  const receiveResults = (results: PaperData[]) => {
    setPapers(results);
  };

  return (
    <Container>
      <Row className={"mt-2"}>
        <Col xs={12}>
          <FormCovida resultsCallback={receiveResults}/>
        </Col>
      </Row>
      {papers.length > 0 &&
      <Row className={"my-4"}>
          <Col xs={12}>
              <ListGroup>
                {
                  papers.map((paper: PaperData) => {
                    return <ListGroup.Item key={paper.title}>
                      <a target="_blank" rel="noopener noreferrer"
                         href={paper.url}>{paper.title}</a>
                    </ListGroup.Item>
                  })
                }
              </ListGroup>
          </Col>
      </Row>
      }
    </Container>
  );
}

export default FormResultsContainer;
