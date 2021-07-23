//Page to be viewed after a user signs in
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap'
import './trips.css';
import React from 'react';



const TripsLandingPage = () => {


    return (
        <div>
            <Jumbotron fluid>
            </Jumbotron>
            <h1>Select your destination:</h1>
            <Row>
                <center>
                    <Button className="button1" /* onclick redirect to Create a Trip */ style={{ margin: "10px" }}>
                        Create a Trip
                    </Button>
                    <Button className="button1" /* onclick redirect to View Trips */ style={{ margin: "10px" }}>
                        View Trips
                    </Button>
                </center>
            </Row>
        </div>
    )
}

export default TripsLandingPage