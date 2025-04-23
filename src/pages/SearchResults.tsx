// src/pages/SearchResults.tsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

// 模擬網站頁面數據 (實際應用中可能來自 API 或其他來源)
const sitePages = [
  { path: '/', title: '首頁', content: '歡迎來到我們的網站，探索最新 AI 技術與服務。' },
  { path: '/about', title: '關於我們', content: '了解我們的團隊、使命與願景。我們專注於 AI 解決方案。' },
  { path: '/services', title: '服務項目', content: '我們提供多種 AI 相關服務，包括模型訓練、數據分析等。' },
  { path: '/portfolio', title: '作品集', content: '查看我們過去的 AI 專案和成功案例。' },
  { path: '/blog', title: 'AI新聞', content: '閱讀最新的 AI 行業動態、技術突破和新聞。' },
  { path: '/contact', title: '聯絡我們', content: '有任何疑問或合作意向？歡迎隨時聯絡我們。' },
  // 可以加入更多頁面或文章
];

interface SearchResult {
  path: string;
  title: string;
  snippet: string; // 顯示一小段匹配的內容
}

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false); // 可選：增加載入狀態

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      // --- 模擬搜尋邏輯 ---
      console.log(`Searching for: ${query}`);
      const lowerCaseQuery = query.toLowerCase();
      const foundResults = sitePages
        .map(page => {
          const titleMatch = page.title.toLowerCase().includes(lowerCaseQuery);
          const contentMatch = page.content.toLowerCase().includes(lowerCaseQuery);

          if (titleMatch || contentMatch) {
            // 簡單生成摘要 (可以做得更精確)
            let snippet = page.content.substring(0, 100) + '...';
            const matchIndex = page.content.toLowerCase().indexOf(lowerCaseQuery);
            if (matchIndex !== -1) {
               const start = Math.max(0, matchIndex - 30);
               const end = Math.min(page.content.length, matchIndex + query.length + 30);
               snippet = `...${page.content.substring(start, end)}...`;
            }

            return {
              path: page.path,
              title: page.title,
              snippet: snippet,
            };
          }
          return null;
        })
        .filter((result): result is SearchResult => result !== null); // 過濾掉 null

      // 模擬異步操作 (例如 API 請求)
      setTimeout(() => {
        setResults(foundResults);
        setIsLoading(false);
      }, 500); // 模擬 0.5 秒延遲
      // --- 模擬結束 ---
    } else {
      setResults([]); // 如果沒有查詢，清空結果
    }
  }, [query]); // 當 query 變化時重新執行搜尋

  return (
    <div className="search-results-page" style={{ padding: '20px' }}> {/* 簡單加點內邊距 */}
      <h1>搜尋結果："{query}"</h1>
      {isLoading ? (
        <p>搜尋中...</p>
      ) : results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <h2><Link to={result.path}>{result.title}</Link></h2>
              <p>{result.snippet}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>找不到與 "{query}" 相關的結果。</p>
      )}
    </div>
  );
};

export default SearchResults;
