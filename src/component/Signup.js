import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Signup = () => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleRegister = async () => {
        // Make a POST request to /login endpoint with username and password
        // Store the JWT token in local storage or cookies
      };

  return (
    <Form className="login">
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleRegister}>
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
