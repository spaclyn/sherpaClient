import { Card } from "reactstrap"


const EditTrip = (tripId) => {
console.log(tripId)

const fetch_url = `http://localhost:3000/trip/update/${tripId}`
const accessToken = localStorage.getItem('sessionToken')

//display edit fields




fetch(fetch_url, {
    method: "PUT",
    headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
    }),
    body: JSON.stringify(newTrip)
})
.then(response => response.json())
.then(data => {
    console.log(data)
    displayMine()
})
.catch(err => {
    console.error(err)
})

Card.removeChild(card.lastChild)





    return(
        <>
        </>
    )
}

export default EditTrip