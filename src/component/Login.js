import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit =  (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/login', {email, password}) 
    .then(result=> {console.log(result)
      if(result.data === "Success"){
        navigate('/logout')
      }
    })
    .catch(err=> console.log(err))
  }

return (
  <Form onSubmit={handleSubmit}>
    <h2> Login Page </h2>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
   
    <Button variant="primary" type="submit">
      Login
    </Button><br>
    </br><br>
    </br>
    <Form.Group className="mb-3">
      <Form.Label>Not Registered?</Form.Label><br></br>
    <Link to="/register">
      <button variant="primary" type="submit">Signup</button>
    </Link>
    </Form.Group>
  </Form>
  
  );
};

export default Login;
