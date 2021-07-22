import React  from "react"
import { Container, Row, Col } from "reactstrap"
import Signup from "./Signup"
import Login from "./Login"
import './Auth.css'
import { Jumbotron } from 'reactstrap';

const Auth = (props) => {
    return(
        <div>
                <Jumbotron className="create" fluid></Jumbotron>
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
        <Jumbotron className="bottom"></Jumbotron>
        </div>
    )
}

export default Auth
