/**
 * Here we will be dispatching API actions
 */
import { message } from "antd";
import axios from "axios";

// We need to set default config for axios
axios.defaults.baseURL = "https://fake-news-detector-backend.herokuapp.com";
axios.defaults.headers.post = { 
  'Access-Control-Allow-Origin': '*',
  'accept': 'application/json',
  'Content-Type': 'application/json',
}
// We will be using async function for dispatching network requests
export async function fetchNewsResult(newsText) {
  try {
    const response = await axios.post('/detect', {
      text: newsText
    });
    console.log(response.data);
    message.success('Calculated Successfully')
    const result = await response.data
    return result;
  } catch (error) {
    console.error(error);
  }
}
