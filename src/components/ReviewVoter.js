import { useState } from "react";
import { patchReview } from "../utils/api";

const ReviewVoter = ({ review }) => {
  const [votes, setVotes] = useState(0);
  const voteUpHandler = () => {
    patchReview(review.review_id, 1);
    setVotes((prev) => prev + 1);
  };
  const voteDownHandler = () => {
    patchReview(review.review_id, 1);
    setVotes((prev) => prev - 1);
  };
  return (
    <section>
      <p>
        Total votes: {votes + review.votes}
        <button onClick={voteUpHandler}>👍 </button>
        <button onClick={voteDownHandler}>👎 </button>
      </p>
    </section>
  );
};

export default ReviewVoter;
