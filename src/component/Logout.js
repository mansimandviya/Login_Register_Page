import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <p>Welcome!</p>
      <Link to="/register">
        <Button variant="primary" type="submit">
          Log out
        </Button>
      </Link>
    </div>
  );
};

export default Logout;
