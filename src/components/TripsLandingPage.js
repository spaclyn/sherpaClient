//Page to be viewed after a user signs in
import React from 'react'
import { Button, Row } from 'reactstrap'



const TripsLandingPage = () => {


    return (
        <div>
            <h1>Select your destination:</h1>
            <Row>
                <Button /* onclick redirect to Create a Trip */ style={{ margin: "10px" }}>
                    Create a Trip
                    </Button>
                <Button /* onclick redirect to View Trips */ style={{ margin: "10px" }}>
                    View Trips
                </Button>
            </Row>
        </div>
    )
}

export default TripsLandingPage