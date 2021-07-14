import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap'
import EditTrip from "./EditTrip"

const ViewTrips = () => {
    // const accessToken = localStorage.getItem('sessionToken')

    let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTYyNjIyMDM2OCwiZXhwIjoxNjI2MzA2NzY4fQ.iBfOUlFUWI4l3cOUea6uqEOgzve8ALYoChZ6u452G6s"

    fetch('http://localhost:3000/trips/mytrips', {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

        .catch(err => {
            console.error(err)
        })

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Date</th>
                        <th>Details</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Trip Type</th>
                        <td>Country</td>
                        <td>State</td>
                        <td>City</td>
                        <td>Date</td>
                        <td><Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Details</Button>
                            <Collapse isOpen={isOpen}>
                                <Card>
                                    <CardBody>
                                        Lots of information regarding all of the trip details: restaurants, hotels, etc.
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </td>
                        <td><Button onclick={EditTrip} color="secondary">Edit Trip</Button></td>
                    </tr>
                </tbody>
            </Table>


        </div>
    )

}

export default ViewTrips