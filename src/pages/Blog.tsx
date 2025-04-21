import React, { useEffect, useState } from 'react';
import '../styles/pages/Blog.css';

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=AI&apiKey=${apiKey}`
        );
        const data = await response.json();
        if (data.status !== 'ok') {
          setError(data.message || '無法取得新聞資料');
          setArticles([]);
        } else if (!data.articles || !Array.isArray(data.articles)) {
          setError('新聞資料格式錯誤');
          setArticles([]);
        } else {
          setArticles(data.articles);
          setError(null);
        }
        setLoading(false);
      } catch (error: any) {
        console.error('取得新聞時發生錯誤:', error);
        setError(
          `取得新聞時發生錯誤: ${
            error?.message || JSON.stringify(error) || '未知錯誤'
          }`
        );
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <title>Arnold's Portfolio | AI 新聞</title>
      <div className="blog-page blog-container">
        <h1>AI 新聞</h1>
        <p>最新文章和分享。</p>
        {loading ? (
          <p>載入中...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <ul className="blog-list">
            {articles.map((article, index) => (
              <li className="blog-card" key={article.url || index}>
                {article.urlToImage && (
                  <img
                    className="blog-image"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                )}
                <div className="blog-content">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-title"
                  >
                    {article.title}
                  </a>
                  <p className="blog-description">
                    {article.description}
                  </p>
                  <div className="blog-meta">
                    {article.source?.name && <span>來源：{article.source.name}</span>}
                    {article.publishedAt && (
                      <span style={{ marginLeft: 12 }}>
                        發佈：{new Date(article.publishedAt).toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Blog;