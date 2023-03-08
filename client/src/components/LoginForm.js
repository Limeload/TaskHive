import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import UserContext from './UserContext';

function LoginForm ({ onLogIn }) {
    const userContext = useContext(UserContext);
    const { setUser } = userContext;
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        setUser({name});
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, password})
        })
        .then(res => res.json())
        .then(loggedInUser => {
            onLogIn(loggedInUser);
            history.push('/profile');
            setName("");
            setPassword("");
        });
    }


    return(
        <div className="login-form">
            <div className='form'>
                <Link className='link' to='/'><h1>TaskHive</h1></Link>
                <br />
                <h1 className='text-1'>WELCOME BACK!</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            id="username"
                            autoComplete="off"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button type="submit">Log In</Button>
                </Form>
                <br />
                <div>
                    Don't have an account yet? <Link to='/signup'>Sign up now!</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
