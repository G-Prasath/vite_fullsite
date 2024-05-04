import React from 'react'
import { Outlet } from "react-router-dom";

const Ourproduct = () => {
  return (
    <div>
      <h1>Products</h1>
      <Outlet /> {/* This is where child routes will be rendered */}
    </div>
  );
}

export default Ourproduct