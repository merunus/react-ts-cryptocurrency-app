import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
  },
});

export default customAxios;
