import React from "react";
import { useState } from "react";

function Dbtest() {
  const [name, setName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
  const data = await response.text();
      alert(data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
    setName("");
  };

  return (
    <div>
      <h1>DB test </h1>
      <form onSubmit={handleSubmit}>
        <label >Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Dbtest;
