import React, { useState, useEffect } from 'react'
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap'
import EditTrip from "./EditTrip"
import CreateTrip from './CreateTrip'


const ViewTrips = () => {
    //needed to edit trip
    // const [updateActive, setUpdateActive] = useState(false)
    // const [tripToUpdate, setTripToUpdate] = useState({})

    const [tripData, setTripData] = useState([])
    const accessToken = localStorage.getItem('sessionToken')
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTYyNjQ2MTQxMywiZXhwIjoxNjI2NTQ3ODEzfQ.jdaTbOtC3YcpvtPpD-_7vPdh4ELs0ZYJ9KNGEqyeSKQ"


    useEffect(() => {
        fetch('http://localhost:3000/trip/mytrips', {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            })
        })
            .then(res => res.json())
            .then(json => setTripData(json))
    }, [accessToken])


    //dropdown for details
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    //need to add this to remove console warning regarding unique key prop <ViewTrips tripData={trip} />
    const tripList = tripData.map(trip => (
        <div>
            <Card>
                <CardBody>
                    <Table>
                        <tbody>
                            <tr>
                                <th scope="row">{trip.type}</th>
                                <td>{trip.country}</td>
                                <td>{trip.state}</td>
                                <td>{trip.city}</td>
                                <td>{trip.date}</td>
                                <td>{trip.details}</td>
                                <td><Button onClick={EditTrip} color="secondary">Edit</Button>&nbsp;&nbsp;<Button onClick={EditTrip} color="secondary">Delete</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>

        </div>
    ))

    return (
        <div>
            <h2>Whoa! Check out all of the awesome trips you have, name! Have you event spent time in Location?</h2>
            <Card>
                <CardBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Date</th>
                                <th>Details</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            </tr>
                            <tr>
                                
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
            {tripList}
            <div>
                <Button onClick={CreateTrip} color="secondary">Create a New Trip</Button>
            </div>
        </div>
    )

}

export default ViewTrips