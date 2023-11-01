import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit =  (e) => {
      e.preventDefault();
      axios.post('http://127.0.0.1:8000/register', {name, email, password}, {
        headers: {
            'Content-Type': 'application/json',
        }})
      .then(result=> console.log(result))
      .catch(err=> console.log(err))
       };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username"  onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Register
      </Button><br>
      </br><br>
      </br>
      <Form.Group className="mb-3">
        <Form.Label>Already Registered?</Form.Label><br></br>
      <Link to="/login">
        <button variant="primary" type="submit">Login</button>
      </Link>
      </Form.Group>
    </Form>
  );
};

export default Signup;
