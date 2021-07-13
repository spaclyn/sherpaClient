import { Container, Row, Col, Form, Button, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import { useState } from 'react'

// Dropdown Calendar
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"



const CreateTrip = (props) => {

    const accessToken = localStorage.getItem('sessionToken')
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [date, setDate] = useState("")
    const [button, setButton] = useState("Type of Trip") //Type of Trip button label
    const [startDate, setStartDate] = useState(new Date()) //Calendar dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false); //Type of Trip dropdown


    let newTrip = {
        trip: {
            country: setCountry,
            state: setState,
            city: setCity,
            date: setDate
        }
    }

const handleSubmit=()=>{
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
    }

    const toggle = () => setDropdownOpen(prevState => !prevState);


    return (
        <Container>
            {/* need to set toggle so that it holds and displays the selected value chosen */}
            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                <DropdownToggle caret>
                    {button}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select One</DropdownItem>
                    <DropdownItem onClick={(e) => {
                    setButton("Idea")}}>Idea</DropdownItem>
                    <DropdownItem  onClick={(e) => {
                    setButton("Upcoming")}}>Upcoming</DropdownItem>
                    <DropdownItem  onClick={(e) => {
                    setButton("Past")}}>Past</DropdownItem>
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
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </Label>
                    </Col>
                </Row>
                <Button type="submit" onClick={handleSubmit} id="tripBtn" className="btn btn-dark getControls">Create Trip</Button>
            </Form>
        </Container>

        //how to display restaurant information after the primary information is added

    )
}


export default CreateTrip