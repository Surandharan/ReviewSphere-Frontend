import axios from "axios";

const client = axios.create({
  baseURL: "https://review-sphere-backend.onrender.com/api/movie/top-rated",
});

export default client;
