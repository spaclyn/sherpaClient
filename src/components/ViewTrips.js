import React, { useState, useEffect, Fragment } from 'react'
import { Button, Table } from 'reactstrap'
import EditTrip from "./EditTrip"
import CreateTrip from './CreateTrip'
import ReadOnlyRow from './ReadOnlyRow'
import { useHistory } from 'react-router-dom'


const ViewTrips = (props) => {

    const history = useHistory()
    const navCreate = ()=> {
        history.push("/create")
    }
    

    const [tripsData, setTripsData] = useState([])
    // const props.token = localStorage.getItem('sessionToken')

    useEffect(() => {
        fetch('http://localhost:3000/trip/mytrips', {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.token}`
            })
        })
            .then(res => res.json())
            .then(json => setTripsData(json))
    }, [props.token])




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

        fetch(`http://localhost:3000/trip/update/${editTripId}`, {
            method: "PUT",
            body: JSON.stringify(editTripData),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.token}`
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        })

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
        fetch(`http://localhost:3000/trip/delete/${tripId}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.token}`
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
        }) .catch (err => { console.error(err) })
        
        const newTrips = [...tripsData]

        const index = tripsData.findIndex((trip) => trip.id === tripId)

        newTrips.splice(index, 1)

        setTripsData(newTrips)
    }

    return (
        <div>
            <form onSubmit={handleEditFormSubmit}>
                <Table>
                    <thead>
                        <tr scope="row">
                            <th style={{ flex: 1 }}>Type</th>
                            <th style={{ flex: 1 }}>Country</th>
                            <th style={{ flex: 1 }}>State</th>
                            <th style={{ flex: 1 }}>City</th>
                            <th style={{ flex: 1 }}>Date</th>
                            <th style={{ flex: 2 }}>Details</th>
                            <th style={{ flex: 1 }}>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tripsData.map((trip) =>
                            <Fragment key={trip.id}>
                                {editTripId === trip.id
                                    ? (<EditTrip tripId={trip.id} editTripData={editTripData} handleEditTripData={handleEditTripData} handleCancelClick={handleCancelClick} />)
                                    : (<ReadOnlyRow trip={trip} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)
                                }
                            </Fragment>
                        )}
                    </tbody>
                </Table>
            </form>
            <div>
                <Button onClick={navCreate} color="secondary">Create a New Trip</Button>
            </div>
        </div >
    )

}

export default ViewTrips