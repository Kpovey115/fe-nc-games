import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/User";

const NavBar = ({ allCategories }) => {
  const user = useContext(UserContext);
  return (
    <nav className='navBar'>
      <Link to={"/"}>
        <h2>Home Page</h2>
      </Link>
      <Link to={"/reviews"}>All reviews</Link>
      {allCategories.map((category) => {
        return (
          <Link to={`/reviews/category/${category.slug}`}>
            <h2 key={category.slug}>{category.slug}</h2>
          </Link>
        );
      })}
      <h2>User: {user.username}</h2>
    </nav>
  );
};

export default NavBar;
