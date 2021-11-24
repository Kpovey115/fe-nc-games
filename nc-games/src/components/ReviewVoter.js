import { useState, useEffect } from "react";

const ReviewVoter = ({ review }) => {
  console.log(review);
  return (
    <section>
      <p>Total votes: {review.votes} </p> <button>👍 </button>
    </section>
  );
};

export default ReviewVoter;
