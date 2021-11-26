import { useState } from "react";
import { patchComment } from "../utils/api";

const CommentVoter = ({ votes, comment_id }) => {
  const [addVotes, setAddVotes] = useState(0);

  const voteUpHandler = () => {
    patchComment(comment_id, 1);
    setAddVotes((prev) => prev + 1);
  };
  const voteDownHandler = () => {
    patchComment(comment_id, -1);
    setAddVotes((prev) => prev - 1);
  };

  return (
    <div>
      <p className='commentVotes'>Votes: {votes + addVotes}</p>
      <button onClick={voteUpHandler}>👍 </button>
      <button onClick={voteDownHandler}>👎 </button>
    </div>
  );
};

export default CommentVoter;
