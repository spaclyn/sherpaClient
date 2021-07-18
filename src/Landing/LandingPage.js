import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import './Landing.css';

const LandingPage = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Sherpa</h1>
          <p className="lead">A new age travel experience.</p>
        </Container>
      </Jumbotron>
      <Container>
      <Row>
        <Col><div className="smart"><h1>Sherpa is...</h1></div></Col>
        <Col><div className="partial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at tempus erat. Proin fermentum diam a semper egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sem orci, consectetur eget consectetur id, suscipit in ligula. Integer enim odio, lobortis at tempor vitae, finibus ut felis. Curabitur sit amet sapien rhoncus, molestie est quis, laoreet nisi. Proin nec purus eu libero interdum tincidunt tempus vitae tellus. Aenean pellentesque tincidunt ante at tempor. Vestibulum tincidunt odio vitae arcu varius congue. Vivamus laoreet posuere tristique. Integer interdum, nisi quis malesuada convallis, quam felis dignissim odio, at lacinia odio diam ut velit. Integer eget velit sed nibh dignissim vehicula.</div></Col>
      </Row>
      </Container>
      <><br/><br/><br/></><><br/><br/><br/></><><br/><br/><br/></>
      <Jumbotron className="bottom">
        <div className="blue">
            <h1>change how you travel.</h1>
            <Button color="primary" size="lg">Sign Up</Button> &nbsp;&nbsp; <Button color="primary">Login</Button>
          </div>
      </Jumbotron>
    </div>
  );
};

export default LandingPage;