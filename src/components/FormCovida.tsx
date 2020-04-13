import React, {useReducer} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {PaperData} from "../dataClasses/PaperData";
import {PaperSource} from "../enums/PaperSource";
import PaperSourceOptions from "./PaperSourceOptions";
import PapersService from "../services/PapersService";

const papersService = new PapersService();

interface FormProps {
  resultsCallback: (results: PaperData[]) => void;
}

class FormState {
  loading: boolean = false;
  titleParam: string = "";
  contentParam: string = "";
  titleParamValid = false;
  contentParamValid = false;
  paperSource: PaperSource = PaperSource.ARXIV;
}

const reducer: React.Reducer<FormState, any> = (state, updateParams) => {
  return {...state, ...updateParams};
};

const FormCovida: React.FC<FormProps> = (props) => {
  const [formState, setFormState] = useReducer<React.Reducer<FormState, any>>(reducer, new FormState());

  const handleTitleParam = (event: any) => {
    let titleParam: string = event.target.value;
    setFormState({titleParam, titleParamValid: titleParam.length > 0});
  };

  const handleContentParam = (event: any) => {
    let contentParam: string = event.target.value;
    setFormState({contentParam, contentParamValid: contentParam.length > 0});
  };

  const handleSubmit = () => {
    setFormState({loading: true});
    papersService.fetch(
      formState.titleParam,
      formState.contentParam,
      formState.paperSource
    ).then((results: PaperData[]) => {
      props.resultsCallback(results);
    }).finally(() => {
      setFormState({loading: false})
    });
  };

  const handleSource = (event: any) => {
    setFormState({paperSource: parseInt(event.target.value)});
  };

  return (
    <div className="mx-3">
      <Row className={"mt-2"}>
        <Col xs={12}>
          <p className="text-center h2 text-primary font-weight-bold">COVIDA</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>* Palabra en título</Form.Label>
            <Form.Control type="text" placeholder="Ej: mask"
                          onChange={handleTitleParam}
                          value={formState.titleParam}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>* Palabra en contenido</Form.Label>
            <Form.Control type="text" placeholder="Ej: covid-19"
                          onChange={handleContentParam}
                          value={formState.contentParam}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}></Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>* Fuente de papers</Form.Label>
            <Form.Control as="select"
                          onChange={(event: any) => handleSource(event)}
                          value={formState.paperSource}>
              <PaperSourceOptions/>
            </Form.Control>
          </Form.Group>
          <Button className="float-right" onClick={handleSubmit}
                  disabled={!(formState.titleParamValid && formState.contentParamValid) || formState.loading}
          >
            {formState.loading &&
              <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="mr-1"
              />
            }
            Buscar
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FormCovida;
