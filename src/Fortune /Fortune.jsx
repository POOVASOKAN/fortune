import React from "react";
import { useState } from "react";

const Fortune = () => {
  const [tune, setTune] = useState(
    "Click here to get fortune cookies of the day "
  );
  async function advice() {
   
    const result = await fetch("https://api.adviceslip.com/advice");
    console.log(result);
    const data = await result.json();
    console.log(data);
    setTune(data.slip.advice)
  }
  return (
    <>
      <p> {tune}</p>
      <button onClick={advice}> Fortune Click </button>
    </>
  );
};

export default Fortune;
