import React from "react";
import { Link } from "react-router-dom";
import { NavConatiner } from "../../styles/reusableStyles";

const Navbar = props => {
  return (
    <NavConatiner>
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
      <Link to={"/create"}>
        <h1>Create Todo</h1>
      </Link>
      <h1>Sign Out</h1>
    </NavConatiner>
  );
};

export default Navbar;
