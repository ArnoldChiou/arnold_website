import React from 'react';
import '../styles/components/BlogCard.css'; // 引入新的 CSS 檔案
import LazyImage from './LazyImage'; // 如果需要圖片懶加載

// 定義 Article 介面 (可以考慮移到共用的 types 資料夾)
interface Article {
  source?: {
    name?: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

interface BlogCardProps {
  article: Article;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <li className="blog-card">
      {article.urlToImage && (
        // 考慮使用 LazyImage 替代原生 img
        <LazyImage
          className="blog-image"
          src={article.urlToImage}
          alt={article.title || 'Blog post image'}
          // 可以提供一個 placeholder
        />
        /*
        <img
          className="blog-image"
          src={article.urlToImage}
          alt={article.title}
        />
        */
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
            <span className="published-date">
              發佈：{new Date(article.publishedAt).toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default BlogCard;
