import React, { useState, useEffect } from 'react'
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap'
import EditTrip from "./EditTrip"
import CreateTrip from './CreateTrip'



const ViewTrips = () => {
    //needed to edit trip
    const [updateActive, setUpdateActive] = useState(false)
    const [tripToUpdate, setTripToUpdate] = useState({})

    const [tripData, setTripData] = useState([])
    const [type, setType] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [date, setDate] = useState()
    const [details, setDetails] = useState("")
    // const accessToken = localStorage.getItem('sessionToken')
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTYyNjQ2MTQxMywiZXhwIjoxNjI2NTQ3ODEzfQ.jdaTbOtC3YcpvtPpD-_7vPdh4ELs0ZYJ9KNGEqyeSKQ"

    
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

    useEffect(() => {
        setType(tripData.map((e) => e.type))
        setCountry(tripData.map((e) => e.country))
        setState(tripData.map((e) => e.state))
        setCity(tripData.map((e) => e.city))
        setDate(tripData.map((e) => e.date))
        setDetails(tripData.map((e) => e.details))

    }, [tripData])

    

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>{country}, {state}, {city}, {date}<i>Click for Details</i></Button>
            
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
                                        {details}
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