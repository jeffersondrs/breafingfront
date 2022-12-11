import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form/Form.component";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <h1 className="text-white text-5xl font-bold h-20 text-center p-3 bg-sky-900 w-full">
        Breafing Aposta Certa
      </h1>
      <Form />
    </div>
  );
}

export default App;
