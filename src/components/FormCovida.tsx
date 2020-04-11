import React, {useReducer} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface FormProps {
  resultsCallback: (results: any[]) => void;
}

class FormState {
  loading: boolean = false;
  titleParam: string = "";
  contentParam: string = "";
  titleParamValid = false;
  contentParamValid = false;
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
          <Button className="float-right" onClick={handleSubmit}
                  disabled={!(formState.titleParamValid && formState.contentParamValid)}
          >
            Buscar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FormCovida;
