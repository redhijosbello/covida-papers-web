import React, {useReducer, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCovida from "./FormCovida";
import PaperResults from "./PaperResults";
import {PaperData} from "../dataClasses/PaperData";
import Form from "react-bootstrap/Form";

class FormResultsContainerState {
  alreadyFetched: boolean = false;
  papers: PaperData[] = [];
}

const reducer: React.Reducer<FormResultsContainerState, any> = (state, updateParams) => {
  return {...state, ...updateParams};
};

function FormResultsContainer() {
  const [state, setState] = useReducer<React.Reducer<FormResultsContainerState, any>>(reducer, new FormResultsContainerState());

  const receiveResults = (results: PaperData[]) => {
    setState({papers: results, alreadyFetched: true});
  };

  return (
    <Container>
      <Row className={"mt-2"}>
        <Col xs={12}>
          <FormCovida resultsCallback={receiveResults}/>
        </Col>
      </Row>
      <Row className={"my-4"}>
          <Col xs={12}>
            {state.papers.length > 0 &&
              <PaperResults papers={state.papers}/>
            }
            {state.papers.length === 0 && state.alreadyFetched &&
              <div className="mx-3">Sin resultados.</div>
            }
          </Col>
      </Row>
    </Container>
  );
}

export default FormResultsContainer;
