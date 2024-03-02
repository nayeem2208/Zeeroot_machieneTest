import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Users from "../Components/Users";

function Routers() {
  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/users" element={< Users/>} />
    </Routes>
  );
}

export default Routers;
