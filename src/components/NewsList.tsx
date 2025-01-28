import { useEffect, useState } from "react";
import fetchNews from "../services/fetchNews";
import { Link, useParams } from "react-router-dom";

interface Article {
  title: string;
  description: string;
  url: string;
}

const NewsList = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category || "us");
      setArticles(data);
    };
    getNews();
  }, [category]);

  return (
    <div>
      <h1>Top News {category ? `- ${category}` : ""}</h1>
      {articles.map((article, index) => (
        <div
          key={index}
          style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}
        >
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <Link to={article.url}>Read more</Link>
          {/* <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a> */}
        </div>
      ))}
    </div>
  );
};

export default NewsList;
