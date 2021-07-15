import { Container, Row, Col, Form, Button, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import { useState } from 'react'

// Dropdown Calendar
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


const CreateTrip = (props) => {

    // const accessToken = localStorage.getItem('sessionToken') //currently hard-coded
    const [type, setType] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [date, setDate] = useState(new Date())
    const [dropdownOpen, setDropdownOpen] = useState(false); //Type of Trip dropdown


    let newTrip = {
        trip: {
            type: type,
            country: country,
            state: state,
            city: city,
            date: date
        }
    }

const handleSubmit=()=>{
        fetch(`http://localhost:3000/trip/create`, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTYyNjIyMDM2OCwiZXhwIjoxNjI2MzA2NzY4fQ.iBfOUlFUWI4l3cOUea6uqEOgzve8ALYoChZ6u452G6s"
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
            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                <DropdownToggle caret  style={{margin:"10px"}}>
                    Type of Trip: {type}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select One</DropdownItem>
                    <DropdownItem onClick={(e) => {
                    setType("Idea")}}>Idea</DropdownItem>
                    <DropdownItem  onClick={(e) => {
                    setType("Upcoming")}}>Upcoming</DropdownItem>
                    <DropdownItem  onClick={(e) => {
                    setType("Past")}}>Past</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Form>
                <Row>
                    <Col style={{ display: "flex" }}>
                        <Label style={{margin:"10px"}}>
                            Country:&nbsp;
                        <input value={country} onChange={e => setCountry(e.target.value)} />
                        </Label>
                    </Col>
                    <Col xs='12'>
                        <Label style={{margin:"10px"}}>
                            State:&nbsp;
                        <input value={state} onChange={e => setState(e.target.value)} />
                        </Label>
                    </Col>
                    <Col xs='12'>
                        <Label style={{margin:"10px"}}>
                            City:&nbsp;
                        <input value={city} onChange={e => setCity(e.target.value)} />
                        </Label>
                    </Col>
                    <Col xs='12'>
                        <Label style={{margin:"10px"}}>
                            Date:&nbsp;
                        <DatePicker selected={date} onChange={(date) => setDate(date)} />
                        </Label>
                    </Col>
                </Row>
                <Button  style={{margin:"10px"}} type="submit" onClick={handleSubmit} id="tripBtn" className="btn btn-dark getControls">Create Trip</Button>
            </Form>
        </Container>

        //Redirect to MyTrips page

    

    )
}


export default CreateTrip