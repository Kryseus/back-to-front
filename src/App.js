import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetRecipes from './components/GetRecipe';

const App = () => {
  return (
    <Container className="App">
  <Row>
    <Col fluid='justify-content-center'>
      <GetRecipes />
    </Col>
    <Col>
      <GetRecipes />
    </Col>
    <Col>
      <GetRecipes />
    </Col>
  </Row>
</Container>
  );
}

export default App;

