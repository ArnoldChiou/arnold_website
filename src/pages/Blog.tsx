import React from 'react';
import '../styles/pages/Blog.css'; // 保留頁面級別的樣式 (例如容器)
import BlogCard from '../components/BlogCard'; // 引入新的元件
import { useNewsArticles } from '../hooks/useNewsArticles'; // 引入新的 Hook

const Blog: React.FC = () => {
  const { articles, loading, error } = useNewsArticles(); // 使用 Hook

  return (
    <>
      <div className="blog-page blog-container">
        <h1>AI 新聞</h1>
        <p>最新文章和分享。</p>
        {loading ? (
          <p>載入中...</p>
        ) : error ? (
          <p className="error-message">{error}</p> /* 使用 class 方便添加樣式 */
        ) : articles.length === 0 ? (
          <p>目前沒有新聞。</p> /* 更明確的無資料提示 */
        ) : (
          <ul className="blog-list">
            {/* 使用 BlogCard 元件 */}
            {articles.map((article, index) => (
              <BlogCard key={article.url || index} article={article} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Blog;