import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Reviews from "./components/Reviews";
import ReviewsByCategory from "./components/ReviewsByCategory";
import { getAllCategories } from "./utils/api.js";

function App() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((categoriesFromServer) => {
      setAllCategories(categoriesFromServer);
    });
  }, []);

  return (
    <main className='App'>
      <Header />
      <Navbar allCategories={allCategories} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reviews/category/:category' element={<Reviews />} />
      </Routes>
    </main>
  );
}

export default App;
