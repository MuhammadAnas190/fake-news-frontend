/**
 * Here we will be dispatching API actions
 */
import axios from "axios";

// We need to set default config for axios
axios.defaults.baseURL = "https://api.example.com";
axios.defaults.timeout = 3000;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
// We will be using async function for dispatching network requests
export async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
