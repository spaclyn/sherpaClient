import React, { useState, useEffect } from 'react'
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap'
import EditTrip from "./EditTrip"
import CreateTrip from './CreateTrip'



const ViewTrips = (props) => {
    //needed to edit trip
    const [trips, setTrips] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [tripToUpdate, setTripToUpdate] = useState({})

    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTYyNjQ2MTQxMywiZXhwIjoxNjI2NTQ3ODEzfQ.jdaTbOtC3YcpvtPpD-_7vPdh4ELs0ZYJ9KNGEqyeSKQ"
    // const accessToken = localStorage.getItem('sessionToken')

    fetch('http://localhost:3000/trip/mytrips', {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
        .then(response => response.json())
        .then(data => {
            data.map((info) => {
                let country = info.country
                let state = info.state
                let city = info.city
                let date = info.date
                let details = info.details
                console.log(country, state, city, date, details)
            })
        })
        .catch(err => {
            console.error(err)
        })

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Trip title that needs string interpolation <i>Click for Details</i></Button>
            {/* {country}, {state}, {city}, {date} */}
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {/* {details} */}
                                    </td>
                                    <td>
                                        <Button onClick={EditTrip} color="secondary">Edit Trip</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Collapse>
            <div>
                <Button onClick={CreateTrip} color="secondary">Create a New Trip</Button>
            </div>


        </div>
    )

}

export default ViewTrips