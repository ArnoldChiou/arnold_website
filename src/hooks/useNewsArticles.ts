import { useState, useEffect } from 'react';

// 定義 Article 介面 (與 BlogCard 共用，考慮移到 types 資料夾)
interface Article {
  source?: {
    id?: string | null;
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

interface UseNewsArticlesResult {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

export const useNewsArticles = (): UseNewsArticlesResult => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        if (!apiKey) {
          throw new Error("News API Key is missing. Please set VITE_NEWS_API_KEY in your .env file.");
        }
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=AI&apiKey=${apiKey}`
        );

        if (!response.ok) {
          // 嘗試解析錯誤訊息
          let errorData;
          try {
            errorData = await response.json();
          } catch (parseError) {
            // 如果無法解析 JSON，使用狀態文字
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
          }
          throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status !== 'ok') {
          throw new Error(data.message || '無法取得新聞資料');
        }

        if (!data.articles || !Array.isArray(data.articles)) {
          throw new Error('新聞資料格式錯誤');
        }

        // 篩選掉來源為 'Wired' 的新聞
        const filteredArticles = data.articles.filter(
          (article: Article) => article.source?.name !== 'Wired'
        );

        // 依照 publishedAt 由新到舊排序篩選後的文章
        const sortedArticles = filteredArticles.sort(
          (a: Article, b: Article) =>
            new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime()
        );
        setArticles(sortedArticles);

      } catch (error: any) {
        console.error('取得新聞時發生錯誤:', error);
        setError(
          `取得新聞時發生錯誤: ${error?.message || '未知錯誤'}`
        );
        setArticles([]); // 發生錯誤時清空文章
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // 空依賴數組，僅在組件掛載時執行一次

  return { articles, loading, error };
};
