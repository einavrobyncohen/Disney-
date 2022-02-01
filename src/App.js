import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./pages/Detail";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
        <Route exact path="/*" element={<Login />} />
        <Route path="detail/:movieId" element={<Detail />} />
        <Route path="home" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
