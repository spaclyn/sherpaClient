import React from 'react'
import { Container, Row, Col, Form, Button, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Jumbotron } from 'reactstrap';
import './trips.css';

import { useState } from 'react'

import { useHistory } from 'react-router-dom'


const CreateTrip = (props) => {

    const history = useHistory()

    const navTrips = () => {
        history.push("/mytrips")
    }

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

    const handleSubmit = (event) => {
        console.log('handleSubmit working?')
        event.preventDefault()
        fetch(`https://nar-sherpa.herokuapp.com/trip/create`, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.token}`
            }),
            body: JSON.stringify(newTrip)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                navTrips()
            })
            .catch(err => {
                console.error(err)
            })
    }

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div>
            <Jumbotron className="create" fluid>
                <Container fluid>
                 <h1>Create A Trip</h1>
                </Container>
            </Jumbotron>
            <Container>
                {/* <Form> */}
                <Form onSubmit={handleSubmit}>
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
                        <Col>
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
                    <Button style={{ margin: "10px" }} type="submit" id="tripBtn" className="btn btn-dark getControls">Create Trip</Button>

                    {/* onClick={nav} */}

                </Form>
            </Container>
        </div>


    )
}


export default CreateTrip