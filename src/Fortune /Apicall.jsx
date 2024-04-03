import React from "react";
import { useState } from "react";

function Apicall() {
  const [api, setApi] = useState("Hello");
  async function advice() {
    const cat = await fetch("https://meowfacts.herokuapp.com/");
    const res = await cat.json();
    console.log(res);
    setApi(res.data);
  }
  return (
    <div>
      <p> {api}</p>
      <button onClick={advice}> Api click </button>
    </div>
  );
}

export default Apicall;
