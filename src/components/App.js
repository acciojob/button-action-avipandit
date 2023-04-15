import React, { useState } from "react";
import './../styles/App.css';

const button = document.getElementById("click");
const paragraph = document.getElementById("para");

button.addEventListener("click", function() {
  paragraph.classList.toggle("hide");
  paragraph.classList.toggle("show");
});

const App = (props) => {

  return (
    <div className="App" id="main">
    <button id="click">Click me</button>
  <p id="para" className="hide">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

export default App
