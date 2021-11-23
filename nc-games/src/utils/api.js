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
  console.log(req);

  return myApi.get("/reviews", { params: req }).then((res) => {
    return res.data.reviews;
  });
};
