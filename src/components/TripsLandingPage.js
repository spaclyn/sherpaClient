//Page to be viewed after a user signs in
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap'



const TripsLandingPage = () => {


    return (
        <div>
            <Jumbotron fluid>
            </Jumbotron>
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