import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
        backgroundColor: "black",
      }}
    >
      <NavLink
        to="/"
        style={{
          marginRight: "10px",
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/tableMatch"
        style={{
          marginRight: "10px",
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        Table
      </NavLink>
      <NavLink
        to="/scorer"
        style={{
          marginRight: "10px",
          textDecoration: "none",
          color: "  white",
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        Scorer
      </NavLink>
      {/* Uncomment and customize the following links as needed */}
      {/* <NavLink to="/item" style={{ marginRight: "10px", textDecoration: "none", color: "blue", fontWeight: "bold" }}>
        Item
      </NavLink> */}
      {/* <NavLink to="/item/:id" style={{ marginRight: "10px", textDecoration: "none", color: "blue", fontWeight: "bold" }}>
        Details
      </NavLink> */}
    </div>
  );
}
