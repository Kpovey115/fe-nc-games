import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const NavBar = ({ allCategories }) => {
  const user = useContext(UserContext);
  return (
    <nav className='navBar'>
      <Link to={"/"} key='homepage'>
        <h2>Home Page</h2>
      </Link>
      <Link to={"/reviews"} key='allReviews'>
        <h2>All reviews</h2>
      </Link>
      {allCategories.map((category) => {
        return (
          <Link to={`/reviews/category/${category.slug}`} key={category.slug}>
            <h2>{category.slug}</h2>
          </Link>
        );
      })}
      <h2 key='username'>User: {user.username}</h2>
    </nav>
  );
};

export default NavBar;
