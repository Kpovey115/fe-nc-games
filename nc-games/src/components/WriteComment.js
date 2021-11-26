import { useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";

const WriteComment = () => {
  const user = useContext(UserContext);
  const { review_id } = useParams();

  const HandleSubmit = (name, body) => {
    const newComment = {
      username: name,
      body: body,
    };

    postComment(Number(review_id), newComment).then((res) => {
      window.location.reload(true);
    });
  };

  return (
    <section className='WriteComment'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event.target[0].value);
          console.log(event);
          HandleSubmit(user.username, event.target[0].value);
        }}
      >
        <p htmlFor='Comment'>Type below to post a comment as {user.username}</p>
        <textarea
          id='Comment'
          rows='5'
          cols='50'
          placeholder='Write here!'
          required
        ></textarea>
        <input type='submit' value='Submit'></input>
      </form>
    </section>
  );
};

export default WriteComment;
