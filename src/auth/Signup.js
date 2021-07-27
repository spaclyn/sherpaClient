import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import './Auth.css'
import {useHistory} from 'react-router-dom'


const Signup = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')

    const history = useHistory()
    const navCreate = ()=> {
        history.push("/create")
    }
    

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(email, password, name, location);

        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({user:{email: email, password: password, name: name, location: location}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'access-control-allow-headers': 'Origin, X-Requested-With, Content-TypeError, Accept, Authorization'
            })
        })

        await ((response) => {
            response.json()
            // console.log(response.json())
        }) 
        await ((data) => {
            // props.updateToken(data.sessionToken)
            console.log(data)
        }); 
        await (err => console.log(err))
    }


    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Full Name</Label>
                    <Input onChange={(e) => setName(e.target.value)} name="name" value={name} />       
                </FormGroup>
                <FormGroup>
                <FormGroup>
                    <Label htmlFor="location">Home Location</Label>
                    <Input onChange={(e) => setLocation(e.target.value)} name="location" value={location} />       
                </FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />       
                </FormGroup>
                <br />
                <Button type="submit" onClick={navCreate}>Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup

