import React, { useSate } from "react";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Authenticate from "./components/Authenticate/Authenticate";

function App() {
  return (
    <>
      <SignUpForm />
      <Authenticate />
    </>
  );
}

export default App;
