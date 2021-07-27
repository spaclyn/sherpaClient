import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import './Landing.css';
import {useHistory} from 'react-router-dom'


const LandingPage = (props) => {

  const history = useHistory()

  const navLogin = () => {
      history.push("/login")
  }

  
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Sherpa</h1>
          <p className="lead">A new age travel experience.</p>
        </Container>
      </Jumbotron>
      <Container className="blurb">
      <Row>
      <Col xs="6"><div className="smart"><h1>Sherpa is...</h1></div></Col>
      <Col xs="6"><div className="partial">Welcome to your new favorite travel companion. Sherpa works to guide you through your trip by helping you remember the plans you have, places you love to eat, and events you don't want to miss. Take your vacation out of your phone's notes and into the hands of Sherpa.</div></Col>
      </Row>
      </Container>
      <Jumbotron className="bottom">
        <div className="blue">
            <h1> &nbsp;change how you travel.</h1>
            <Button className="blue" onClick={navLogin}>Sign Up</Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Button className="blue" onClick={navLogin}>Login</Button> 
          </div>
      </Jumbotron>
    </div>
  );
};

export default LandingPage;