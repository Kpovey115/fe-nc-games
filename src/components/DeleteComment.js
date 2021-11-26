import { deleteComment } from "../utils/api";

const DeleteComment = ({ comment_id }) => {
  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
      window.location.reload(true);
    });
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteComment;
