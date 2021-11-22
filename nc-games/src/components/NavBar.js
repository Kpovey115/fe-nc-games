import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = ({ allCategories }) => {
  return (
    <nav className='navBar'>
      <Link to={"/"}>
        <h2>Home Page</h2>
      </Link>
      <Link to={"/reviews"}>All reviews</Link>
      {allCategories.map((category) => {
        return (
          <Link to={`/reviews/${category.slug}`}>
            <h2>{category.slug}</h2>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
