

const DeleteTrip = () => {

const accessToken = localStorage.getItem('sessionToken')

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