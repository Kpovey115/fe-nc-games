import { useState, useEffect } from "react";
import { getReviewComments } from "../utils/api";
import DeleteComment from "./DeleteComment";
import CommentVoter from "./CommentVoter";

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
          <article key={comment.comment_id}>
            <h4 className='commentAuthor'>{comment.author}</h4>
            <p className='commentBody'>{comment.body}</p>
            <CommentVoter
              votes={comment.votes}
              comment_id={comment.comment_id}
            />
            <DeleteComment comment_id={comment.comment_id} />
          </article>
        );
      })}
    </section>
  );
};

export default Comments;
