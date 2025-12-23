import axios from "axios";

export const apiConfig = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});
