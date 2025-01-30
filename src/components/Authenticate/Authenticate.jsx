import React, { useState } from "react";
import axios from "axios";

function Authenticate({ token }) {
  const [error, setError] = useState(null);
  async function handleClick() {
    console.log("authenticating...");
    try {
      const result = await axios(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(result);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }
  return (
    <div>
      <h2>Authenticate</h2>
      {error && <p>Error Authenticating ({error}), please try again....</p>}
      <button onClick={handleClick}>Authenticate Here</button>
    </div>
  );
}

export default Authenticate;
