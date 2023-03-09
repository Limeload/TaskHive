import React from 'react';
import { useState } from 'react'
import { Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import register from '../images/register.png';

function SignUpForm({ onLogIn }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let signupInput = {
            name: name,
            email: email,
            password: password,
        }
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(signupInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(newUser => onLogIn(newUser))
                    window.location.href = '/profile'
                }
            })
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <div className="login-form">
            <div className='form'>
            <Link className='link' exact to='/'><h1>TaskHive</h1></Link>
            <img className="register-img" src={register} alt={register} />

            <br />
        <h1 className='text-1'>Create an Account</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label> Create Username</Form.Label>
                <Form.Control
                required
                type="text"
                id="username"
                autoComplete="off"
                value={name}
                onChange= {(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
                <Form.Control
                required
                type="email"
                placeholder="example@gmail.com"
                id="email"
                autoComplete="off"
                value={email}
                onChange= {(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
               <Form.Label>Create Password</Form.Label>
                <Form.Control
                required
                type="text"
                id="password"
                autoComplete="off"
                value={password}
                onChange= {(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button type="submit">Create Account</Button>
        </Form>
        <br />
        <div>
       Already have an account? <Link exact to='/login'>Login instead</Link>
            </div>
            </div>
        </div>
    )
}

export default SignUpForm;
