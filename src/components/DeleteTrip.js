

const DeleteTrip = () => {

const accessToken = localStorage.getItem('sessionToken')

        fetch(`https://nar-sherpa.herokuapp.com/trip/delete`, {
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