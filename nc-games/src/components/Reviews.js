import { getReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  const params = {};
  const { category } = useParams();
  params.category = category;

  useEffect(() => {
    getReviews(params).then((reviewsFromServer) => {
      setAllReviews(reviewsFromServer);
    });
  }, [category]);

  return (
    <main className='Reviews'>
      <section>
        <h3>Reviews!</h3>

        <ul>
          {allReviews.map((review) => {
            return (
              <li>
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
