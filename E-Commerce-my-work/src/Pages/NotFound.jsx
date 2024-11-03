import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container h-screen items-center  mx-auto  flex justify-center ">
      <h1>Not Found</h1>
      <Button className="">
        <Link to="products">Go Back To Home</Link>
      </Button>
    </div>
  );
}
