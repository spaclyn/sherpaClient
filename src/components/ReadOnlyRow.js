import React from 'react'
import { Button } from 'reactstrap'

const ReadOnlyRow = ({ trip, handleEditClick, handleDeleteClick }) => {

    return (
            <tr>
                <td>{trip.type}</td>
                <td>{trip.country}</td>
                <td>{trip.state}</td>
                <td>{trip.city}</td>
                <td>{trip.date}</td>
                <td>{trip.details}</td>
                <td><Button type="button" onClick={(event)=>handleEditClick(event, trip)}>Edit</Button>&nbsp;&nbsp;&nbsp;
                <Button type="button" onClick={()=>handleDeleteClick(trip.id)}>Delete</Button></td>
            </tr>
    )
}

export default ReadOnlyRow