import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const Signup = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username, password)

        fetch("http://localhost:3001/user/register", {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'access-control-allow-headers': 'Origin, X-Requested-With, Content-TypeError, Accept, Authorization'
            })
        }) .then((response) => {
                response.json()
                // console.log(response)
            }
        ) .then((data) => {
            // props.updateToken(data.sessionToken)
            console.log(data)
        }).catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>       
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup

