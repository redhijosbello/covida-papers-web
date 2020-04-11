import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormState {
  loading: boolean = false;
  titleParam: string = "";
  contentParam: string = "";
  titleParamValid = false;
  contentParamValid = false;
}

class FormResultsContainer extends React.Component<any, FormState> {
  constructor(props: any) {
    super(props);
    this.state = new FormState();
  }

  handleTitleParam = (event: any) => {
    let titleParam: string = event.target.value;
    this.setState({
      titleParam: event.target.value,
      titleParamValid: titleParam.length > 0
    });
  };

  handleSubmit = () => {
    console.log("hello!");
  };

  render() {
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
              <Form.Label>Palabra en título</Form.Label>
              <Form.Control type="text" placeholder="Ej: mask"
                            onChange={this.handleTitleParam}
                            value={this.state.titleParam}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Palabra en contenido</Form.Label>
              <Form.Control type="text" placeholder="Ej: covid-19" />
            </Form.Group>
            <Button className="float-right" onClick={this.handleSubmit}
                    disabled={!this.state.titleParamValid}
            >
              Buscar
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormResultsContainer;
