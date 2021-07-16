import React, { useState } from 'react'


const EditTrip = (props) => {

    const [editType, setEditType] = useState(props.tripToUpdate.type)
    const [editCountry, setEditCountry] = useState(props.tripToUpdate.country)
    const [editState, setEditState] = useState(props.tripToUpdate.state)
    const [editCity, setEditCity] = useState(props.tripToUpdate.city)
    const [editDate, setEditDate] = useState(props.tripToUpdate.date)
    const [editDetails, setEditDetails] = useState(props.tripToUpdate.details)





    return (
        <>
        </>
    )
}

export default EditTrip