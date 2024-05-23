import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Header from "./Components/header/Header";
import Turn from "./Components/pageFlip/turn";
import TurnJS from "./Components/pageFlip/turn";
import NewHeader from "./Components/new-header/new-header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/header' element={<Header />} />
        <Route path="/" element={<TurnJS />} />
        <Route path="/new-header" element={<NewHeader />} />

      </Routes>
    </Router>
  );
}

export default App;
