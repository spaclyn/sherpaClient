import React from 'react'
import { Button } from 'reactstrap'


const EditTrip = ( {editTripData, handleEditTripData, handleCancelClick }) => {


    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Idea, Upcoming or Past"
                    name="type"
                    value={editTripData.type}
                    onChange={handleEditTripData}>
                </input>
            </td>
            <td><input type="text" required="required" placeholder="Enter a Country" name="country" value={editTripData.country} onChange={handleEditTripData}></input></td>
            <td><input type="text" required="required" placeholder="Enter a State" name="state" value={editTripData.state} onChange={handleEditTripData}></input></td>
            <td><input type="text" required="required" placeholder="Enter a City" name="city" value={editTripData.city} onChange={handleEditTripData}></input></td>
            <td><input type="text" required="required" placeholder="Enter a Date" name="date" value={editTripData.date} onChange={handleEditTripData}></input></td>
            <td><input type="text" required="required" placeholder="Enter New Details" name="details" value={editTripData.details} onChange={handleEditTripData}></input></td>
            <td>
                <Button type="submit">Save</Button>&nbsp;&nbsp;<Button type="button" onClick={handleCancelClick}>Cancel</Button>
            </td>
        </tr>
    )
}

export default EditTrip