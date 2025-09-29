import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (type, message) => {
    setalert({
      msg: message,
      ty: type
    });

    setTimeout(() => {
      setalert(null);
    }, 5000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode('dark');
      document.body.style.backgroundColor = "brown";
      showalert("success", "Dark mode is enabled");
    } else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showalert("success", "Light mode is enabled");
    }
  };

  return (
    <Router>
      <Navbar mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Form title={"Enter the text and analyze below"} mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
