import axios from "axios";

const client = axios.create({
  baseURL: "https://review-sphere-backend.onrender.com/api/",
  // baseURL: "http://localhost:8000/api/",
});

export default client;
