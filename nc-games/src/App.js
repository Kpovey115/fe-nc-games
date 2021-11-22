import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffects } from "react";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <main className='App'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
