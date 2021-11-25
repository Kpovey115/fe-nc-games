import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import { getAllCategories } from "./utils/api.js";
import { UserContext } from "./contexts/User";

function App() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((categoriesFromServer) => {
      setAllCategories(categoriesFromServer);
    });
  }, []);

  return (
    <UserContext.Provider value={{ username: "jessjelly" }}>
      <main className='App'>
        <Header />
        <Navbar allCategories={allCategories} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/reviews/category/:category' element={<Reviews />} />
          <Route path='/reviews/:review_id' element={<SingleReview />} />
        </Routes>
      </main>
    </UserContext.Provider>
  );
}

export default App;
