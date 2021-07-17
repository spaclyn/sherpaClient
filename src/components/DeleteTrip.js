

const DeleteTrip = () => {

// const accessToken = localStorage.getItem('sessionToken')
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTYyNjQ2MTQxMywiZXhwIjoxNjI2NTQ3ODEzfQ.jdaTbOtC3YcpvtPpD-_7vPdh4ELs0ZYJ9KNGEqyeSKQ"

        fetch(`http://localhost:3000/trip/delete/`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }),
        })
        .then(() => {})



    return (
        <>
        </>
    )
}

export default DeleteTrip