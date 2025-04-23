import React from 'react';
import '../styles/pages/Home.css';
import myImageUrl from '../assets/home_icon.png';
import LazyImage from '../components/LazyImage'; // 從 components 匯入

const Home: React.FC = () => {
  return (
    <>
      <div className="home-page">
        <h1>歡迎來到我的網站</h1>
        <p>這是一個使用 React 和 TypeScript 建立的現代化網站。</p>
        <LazyImage
          src={myImageUrl}
          alt="網站首頁的主要視覺圖示"
          className="full-page-image" // 可以傳遞額外的 class
          // placeholderSrc="path/to/low-quality-placeholder.jpg" // 可選：提供低解析度預覽圖
        />
      </div>
    </>
  );
};

export default Home;