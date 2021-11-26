import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getReviewById, getReviewComments } from "../utils/api";
import Comments from "./Comments";
import ReviewVoter from "./ReviewVoter";
import WriteComment from "./WriteComment";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    getReviewById(Number(review_id)).then((reviewFromServer) => {
      setReview(reviewFromServer);
    });
  }, []);

  return (
    <main>
      <section className='review'>
        <h3 className='reviewTitle'>{review.title}</h3>
        <img
          src={review.review_img_url}
          className='reviewImg'
          alt='img of game'
        />
        <h4 className='reviewOwner'>{review.owner}</h4>
        <p className='reviewCategory'>{review.category}</p>
        <p className='reviewBody'>{review.review_body}</p>
        <p className='reviewCommentCount'>
          Total comments: {review.comment_count}
        </p>
        <ReviewVoter review={review} />
      </section>
      <Comments review_id={review_id} />
      <WriteComment />
      
    </main>
  );
};

export default SingleReview;

/*

*/
