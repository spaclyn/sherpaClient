import { Container, Row, Col, Form, Button } from 'reactstrap'

const CreateTrip = () => {

    const accessToken = localStorage.getItem('sessionToken')
    let country = document.getElementById('country').value
    let state = document.getElementById('state').value
    let city = document.getElementById('city').value
    let date = document.getElementById('date').value

    let newTrip = {
        tripInfo: {
            country: country,
            state: state,
            city: city,
            date: date
        }
    }

    fetch(`http://localhost:3000/journal/create`, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }),
        body: JSON.stringify(newTrip)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // displayMine()
        })
        .catch(err => {
            console.error(err)
        })


    return (
        <Container>
            <Form>
                <Row>
                    <Col xs='12'>
                        <input placeholder="Country" class="form-control" id="country" />
                    </Col>
                    <Col xs='12'>
                        <input placeholder="State" class="form-control" id="state" />
                    </Col>
                    <Col xs='12'>
                        <input placeholder="City" class="form-control" id="city" />
                    </Col>
                    <Col xs='12'>
                        <input placeholder="Date" class="form-control" id="date" />
                    </Col>
                </Row>
                <Row>
                    <Col xs='12'>
                        <textarea class="form-control" placeholder="Post your upcoming trip information" rows="5" id="entry"></textarea>
                    </Col>
                </Row>
                <Button type="button" onclick="CreateTrip()" id="tripBtn" class="btn btn-dark getControls">Create Trip</Button>
            </Form>
            </Container>

    )
}


export default CreateTrip