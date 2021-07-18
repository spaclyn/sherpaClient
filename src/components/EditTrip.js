import React from 'react'


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
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditTrip