import { getReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [selectSortBy, setSelectSortBy] = useState([]);
  const [selectOrder, setSelectOrder] = useState([]);
  const params = {};
  const { category } = useParams();
  params.category = category;
  params.sort_by = selectSortBy;
  params.order = selectOrder;

  useEffect(() => {
    getReviews(params).then((reviewsFromServer) => {
      setAllReviews(reviewsFromServer);
    });
  }, [category, selectSortBy, selectOrder]);

  const handleSortBy = (event) => {
    setSelectSortBy(event.target.value);
  };

  const handleOrder = (event) => {
    setSelectOrder(event.target.value);
  };
  return (
    <main className='Reviews'>
      <section>
        <h3>Reviews!</h3>
        <label>Sort By: </label>
        <select className='sort_by' onChange={handleSortBy}>
          <option value='created_at'>Newest</option>
          <option value='comment_count'>comment count</option>
          <option value='votes'>Votes</option>
        </select>
        <label>Order By: </label>
        <select className='order' onChange={handleOrder}>
          <option value='asc'>ASC</option>
          <option value='desc'>DESC</option>
        </select>

        <ul>
          {allReviews.map((review) => {
            return (
              <li key={review.review_id}>
                <img
                  src={review.review_img_url}
                  alt={`img of ${review.title}`}
                />
                <Link to={`/reviews/${review.review_id}`}>
                  <h4>{review.title}</h4>
                </Link>
                <p className='reviewAuthor'>Author: {review.owner}</p>
                <p className='reviewCategory'>Category: {review.category}</p>
                <p className='reviewVotes'>Review votes: {review.votes}</p>
                <p className='reviewComment'>
                  Comment count: {review.comment_count}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Reviews;
