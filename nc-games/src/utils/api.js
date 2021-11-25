import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-games-server-kp.herokuapp.com/api/",
});

export const getAllCategories = () => {
  return myApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (req) => {
  return myApi.get("/reviews", { params: req }).then((res) => {
    return res.data.reviews;
  });
};

export const getReviewById = (review_id) => {
  return myApi.get(`reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getReviewComments = (review_id) => {
  return myApi.get(`reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchReview = (review_id, increment) => {
  return myApi
    .patch(`reviews/${review_id}`, { inc_votes: increment })
    .then(({ data }) => {
      return data.review;
    });
};

export const postComment = (review_id, commentObj) => {
  const { username, body } = commentObj;

  return myApi
    .post(`reviews/${review_id}/comments`, { username, body })
    .then(({ data }) => {
      console.log(data);
      return data.review;
    });
};

export const deleteComment = (comment_id) => {
  return myApi.delete(`comments/${comment_id}`).then((res) => {
    return res.data;
  });
};
