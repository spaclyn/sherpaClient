import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap'
import EditTrip from "./EditTrip"
import CreateTrip from './CreateTrip'

const ViewTrips = () => {
    // const accessToken = localStorage.getItem('sessionToken')

    let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTYyNjIyMDM2OCwiZXhwIjoxNjI2MzA2NzY4fQ.iBfOUlFUWI4l3cOUea6uqEOgzve8ALYoChZ6u452G6s"

    fetch('http://localhost:3000/trip/mytrips', {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data)
            data.map((info) => {
                console.log(info.country)

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
                                        {/* <Button onClick={EditTrip} color="secondary">Edit Trip</Button> */}
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