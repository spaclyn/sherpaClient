import { Container, Row, Col, Form, Button, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import React from 'react'

import { useState } from 'react'

// Dropdown Calendar
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


const CreateTrip = (props) => {

    
    const accessToken = localStorage.getItem('sessionToken')
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTYyNjQ2MTQxMywiZXhwIjoxNjI2NTQ3ODEzfQ.jdaTbOtC3YcpvtPpD-_7vPdh4ELs0ZYJ9KNGEqyeSKQ"
    const [type, setType] = useState("")
    const [country, setCountry] = useState("USA")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [date, setDate] = useState("mm/dd/yy")
    const [details, setDetails] = useState("")
    const [dropdownOpen, setDropdownOpen] = useState(false); //Type of Trip dropdown



    let newTrip = {
        trip: {
            type: type,
            country: country,
            state: state,
            city: city,
            date: date,
            details: details
        }
    }

    const handleSubmit = () => {
        fetch(`http://localhost:3000/trip/create`, {
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
            })
            .catch(err => {
                console.error(err)
            })
    }

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Container>
            <div>
                <h2>Name - are you ready to get out of location? Use this form to create a new trip to look foward to.</h2>
            </div>
            <Form>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                    <DropdownToggle caret style={{ margin: "10px" }}>
                        Type of Trip: {type}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Select One</DropdownItem>
                        <DropdownItem onClick={(e) => {
                            setType("Idea")
                        }}>Idea</DropdownItem>
                        <DropdownItem onClick={(e) => {
                            setType("Upcoming")
                        }}>Upcoming</DropdownItem>
                        <DropdownItem onClick={(e) => {
                            setType("Past")
                        }}>Past</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Row>
                    <Col style={{ display: "flex" }}>
                        <Label style={{ margin: "10px" }}>
                            Country:&nbsp;
                        <input value={country} onChange={e => setCountry(e.target.value)} />
                        </Label>
                    </Col>
                    <Col xs='12'>
                        <Label style={{ margin: "10px" }}>
                            State:&nbsp;
                        <input value={state} onChange={e => setState(e.target.value)} />
                        </Label>
                    </Col>
                    <Col xs='12'>
                        <Label style={{ margin: "10px" }}>
                            City:&nbsp;
                        <input value={city} onChange={e => setCity(e.target.value)} />
                        </Label>
                    </Col>
                    <Col xs='12'>
                        <Label style={{ margin: "10px" }} placeholder="date placeholder">
                            Date:&nbsp;
                            <input value={date} onChange={e => setDate(e.target.value)} />
                        </Label>
                    </Col>
                    <Col xs='12'>
                        <Label style={{ margin: "10px" }} placeholder="date placeholder">
                            Details:&nbsp;
                            <input value={details} onChange={e => setDetails(e.target.value)} />
                        </Label>
                    </Col>
                </Row>
                <Button style={{ margin: "10px" }} type="submit" onClick={handleSubmit} id="tripBtn" className="btn btn-dark getControls">Create Trip</Button>
                {/* need to redirect to ViewTrips component */}
            </Form>
        </Container>



    )
}


export default CreateTrip