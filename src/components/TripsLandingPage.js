//Page to be viewed after a user signs in
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap'
import './trips.css';
import React from 'react';

import { useHistory } from 'react-router-dom'



const TripsLandingPage = () => {

    const history = useHistory()
    const navCreate = ()=> {
        history.push("/create")
    }
    const navTrips = ()=> {
        history.push("/mytrips")
    }

    return (
        <div>
            <Jumbotron fluid>
            </Jumbotron>
            <h1>Select your destination:</h1>
            <Row>
                <center>
                    <Button className="button1" style={{ margin: "10px" }} onClick={navCreate}>
                        Create a Trip
                    </Button>
                    <Button className="button1" style={{ margin: "10px" }} onClick={navTrips}>
                        View Trips
                    </Button>
                </center>
            </Row>
        </div>
    )
}

export default TripsLandingPage