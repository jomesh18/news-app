import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;
console.log("api key is", API_KEY);
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const fetchNews = async (country = "us") => {
  try {
    const response = await axios.get(
      `${BASE_URL}?country=${country}&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export default fetchNews;
