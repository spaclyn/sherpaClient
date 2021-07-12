import { Container, Row, Col, Form, Button, Label } from 'reactstrap'

import {useState} from 'react'

const CreateTrip = () => {

    const accessToken = localStorage.getItem('sessionToken')
    const [country, setCountry] = useState("Which country?")
    const [state, setState] = useState("In what state?")
    const [city, setCity] = useState("Any particular city?")
    const [date, setDate] = useState("Date or timeframe")

    let newTrip = {
        tripInfo: {
            country: setCountry,
            state: setState,
            city: setCity,
            date: setDate
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
                    <Col style={{display:"flex"}}>
                        <Label>
                            Country: 
                        <input value={country} onChange={e=>setCountry(e.target.value)} />
                        </Label>
                        </Col>
                        <Col xs='12'>
                        <Label>
                            City: 
                        <input value={state} onChange={e=>setState(e.target.value)} />
                        </Label>
                        </Col>
                        <Col xs='12'>
                        <Label>
                            State: 
                        <input value={city} onChange={e=>setCity(e.target.value)} />
                        </Label>
                        </Col>
                        <Col xs='12'>
                        <Label>
                            Date: 
                        <input value={date} onChange={e=>setDate(e.target.value)} />
                        </Label>
                        </Col>
                        </Row>
                <Button type="button" onclick="CreateTrip()" id="tripBtn" class="btn btn-dark getControls">Create Trip</Button>
            </Form>
            </Container>

    )
}


export default CreateTrip