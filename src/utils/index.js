/**
 * Here we will be dispatching API actions
 */
import axios from "axios";

// We need to set default config for axios
axios.defaults.baseURL = "https://api-reality-check.herokuapp.com/";
axios.defaults.headers.post = {
  "Access-Control-Allow-Origin": "*",
  accept: "application/json",
  "Content-Type": "application/json",
};
// We will be using async function for dispatching network requests
export async function fetchNewsResult(newsText) {
  try {
    const response = await axios.post("/detect", {
      text: newsText,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
