import { Container, Row, Col, Form, Button, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import { useState } from 'react'

const CreateTrip = (props) => {

    const accessToken = localStorage.getItem('sessionToken')
    const [country, setCountry] = useState("Which country?")
    const [state, setState] = useState("In what state?")
    const [city, setCity] = useState("Any particular city?")
    const [date, setDate] = useState("Date or timeframe")


    let newTrip = {
        trip: {
            country: setCountry,
            state: setState,
            city: setCity,
            date: setDate
        }
    }


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
            // displayMine()
        })
        .catch(err => {
            console.error(err)
        })

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Container>
            {/* need to set toggle so that it holds and displays the selected value chosen */}
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Type of Trip
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select One</DropdownItem>
                    <DropdownItem>Idea</DropdownItem>
                    <DropdownItem>Upcoming</DropdownItem>
                    <DropdownItem>Past</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Form>
                <Row>
                    <Col style={{ display: "flex" }}>
                        <Label>
                            Country:
                        <input value={country} onChange={e => setCountry(e.target.value)} />
                        </Label>
                    </Col>
                    <Col xs='12'>
                        <Label>
                            City:
                        <input value={state} onChange={e => setState(e.target.value)} />
                        </Label>
                    </Col>
                    <Col xs='12'>
                        <Label>
                            State:
                        <input value={city} onChange={e => setCity(e.target.value)} />
                        </Label>
                    </Col>
                    <Col xs='12'>
                        <Label>
                            Date:
                        <input value={date} onChange={e => setDate(e.target.value)} />
                        </Label>
                    </Col>
                </Row>
                <Button type="button" onClick="CreateTrip()" id="tripBtn" className="btn btn-dark getControls">Create Trip</Button>
            </Form>
        </Container>

        //how to display restaurant information after the primary information is added

    )
}


export default CreateTrip