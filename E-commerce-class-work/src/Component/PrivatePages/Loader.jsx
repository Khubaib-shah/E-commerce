import React from "react";
import { ring } from "ldrs";

// Register the loader
ring.register();

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <l-ring
        size="40"
        stroke="5"
        bg-opacity="0"
        speed="2"
        color="black"
      ></l-ring>
    </div>
  );
}

export default Loader;
