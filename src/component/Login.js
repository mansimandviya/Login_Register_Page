import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = async () => {
        // Make a POST request to /login endpoint with username and password
        // Store the JWT token in local storage or cookies
      };
  return (
    
    <div>
      <Form className="login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Login
        </Button>
        <br></br>
        <br></br>
        <Form.Group className="mb-3">
          <Form.Label>Do not have account?</Form.Label><br></br>
          <Link to="/register">
          <Button variant="primary" type="submit">
            Signup
          </Button>
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
