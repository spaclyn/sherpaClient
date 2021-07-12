//Page to be viewed after a user signs in

import { Button, Row } from 'reactstrap'

// import { CreateTrip, UpcomingTrips, PastTrips, TripIdeas } from 

const TripsLandingPage = () => {


    return (
        <div>
            <h1>Select your destination:</h1>
            <Row>
                <Button /* onClick={() => CreateTrip()} */ style={{ margin: "10px" }}>
                    Create a trip
                    </Button>
                <Button /* onClick={() => UpcomingTrips()} */ style={{ margin: "10px" }}>
                    Upcoming Trips
                </Button>
                <Button /* onClick={() => PastTrips()} */ style={{ margin: "10px" }}>
                    Past Trips
                </Button>
                <Button /* onClick={() => TripIdeas()} */ style={{ margin: "10px" }}>
                    Trip Ideas
                </Button>
            </Row>
        </div>
    )
}

export default TripsLandingPage