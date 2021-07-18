import React, { useState, useEffect, Fragment } from 'react'
import { Button, Table } from 'reactstrap'
import EditTrip from "./EditTrip"
import CreateTrip from './CreateTrip'
import ReadOnlyRow from './ReadOnlyRow'


const ViewTrips = () => {

    const [tripsData, setTripsData] = useState([])
    // const accessToken = localStorage.getItem('sessionToken')
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTYyNjYzNDc5NywiZXhwIjoxNjI2NzIxMTk3fQ.cruo3ZGt-dEms5UtLnyxQ4Y9qvotA4TWLtbb7JehjS4"

    useEffect(() => {
        fetch('http://localhost:3000/trip/mytrips', {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            })
        })
            .then(res => res.json())
            .then(json => setTripsData(json))
    }, [accessToken])




    //! INLINE ROW EDITING
    const [editTripData, setEditTripData] = useState({
        type: "",
        country: "",
        state: "",
        city: "",
        date: "",
        details: ""
    })
    
    //grabs the ID of the row you want to edit and assigns the new value to the 'name' attribute of that row
    const [editTripId, setEditTripId] = useState(null)

    const handleEditTripData = (event) => {
        event.preventDefault()

        const fieldName = event.target.getAttribute("name")
        const fieldValue = event.target.value

        const newTripData = { ...editTripData }
        newTripData[fieldName] = fieldValue

        setEditTripData(newTripData)
    }
    
    //submits the edits made in the handleEditTripData function
    const handleEditFormSubmit = (event) => {
        event.preventDefault()

        const editedTrip = {
            id: editTripId,
            type: editTripData.type,
            country: editTripData.country,
            state: editTripData.state,
            city: editTripData.city,
            date: editTripData.date,
            details: editTripData.details
        }

        const newTripsData = [...tripsData]

        const index = tripsData.findIndex((trip) => trip.id === editTripId)
        newTripsData[index] = editedTrip

        setTripsData(newTripsData)
        setEditTripId(null)
    }

    //when the Edit button is clicked, determines which form fields are updated to which values
    const handleEditClick = (event, trip) => {
        event.preventDefault()
        setEditTripId(trip.id)

        const formValues = {
            type: trip.type,
            country: trip.country,
            state: trip.state,
            city: trip.city,
            date: trip.date,
            details: trip.details
        }

        setEditTripData(formValues)
    }

    //sets tripId to null when Cancel is clicked so that none of the trips are selected for editing
    const handleCancelClick = () => {
        setEditTripId(null)
    }

    //Deletes a trip from the table
    const handleDeleteClick = (tripId) => {
        const newTrip = [...tripsData]

        const index = tripsData.findIndex((trip) => trip.id === tripId)

        newTrip.splice(index, 1)

        setTripsData(newTrip)
    }

    return (
        <div>
            <h2>Whoa! Check out all of the awesome trips you have, name! Have you even spent time in Location?</h2>
            <form onSubmit={handleEditFormSubmit}>
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
                    {tripsData.map((trip) =>
                        <Fragment>
                        {editTripId === trip.id
                        ? (<EditTrip editTripData={editTripData} handleEditTripData={handleEditTripData} handleCancelClick={handleCancelClick} />)
                        : (<ReadOnlyRow trip={trip} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)
                        }
                    </Fragment>
                    )}
                </tbody>
            </Table>
            </form>
            <div>
                <Button onClick={CreateTrip} color="secondary">Create a New Trip</Button>
            </div>
        </div>
    )

}

export default ViewTrips