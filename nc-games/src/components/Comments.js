import { useState, useEffect } from "react";
import { getReviewComments } from "../utils/api";

const Comments = ({ review_id }) => {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    getReviewComments(Number(review_id)).then((commentsFromServer) => {
      setAllComments(commentsFromServer);
    });
  }, []);

  return (
    <section className='comment'>
      {allComments.map((comment) => {
        return (
          <article>
            <h4 className='commentAuthor'>{comment.author}</h4>
            <p className='commentBody'>{comment.body}</p>
            <p className='commentVotes'>Votes: {comment.votes}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Comments;
