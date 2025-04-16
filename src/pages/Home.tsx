import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Arnold's Portfolio | 首頁</title>
      </Helmet>
      <div className="home-page">
        <h1>歡迎來到我的網站</h1>
        <p>這是一個使用 React 和 TypeScript 建立的現代化網站。</p>
      </div>
    </>
  );
};

export default Home; 