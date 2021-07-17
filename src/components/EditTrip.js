import React, { useState } from 'react'


const EditTrip = (props) => {

    const [editType, setEditType] = useState(props.tripToUpdate.type)
    const [editCountry, setEditCountry] = useState(props.tripToUpdate.country)
    const [editState, setEditState] = useState(props.tripToUpdate.state)
    const [editCity, setEditCity] = useState(props.tripToUpdate.city)
    const [editDate, setEditDate] = useState(props.tripToUpdate.date)
    const [editDetails, setEditDetails] = useState(props.tripToUpdate.details)
    const accessToken = localStorage.getItem('sessionToken')

    const tripUpdate = (event, trip) => {
        event.preventDefault()
        fetch(`http://localhost:3000/trip/${props.tripToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ trip: { type: editType, country: editCountry, state: editState, city: editCity, date: editDate, details: editDetails } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            })
        }) .then((res)=>{
            props.fetchTrips()
            props.updateOff()
        })
    }





    return (
        <>
        </>
    )
}

export default EditTrip