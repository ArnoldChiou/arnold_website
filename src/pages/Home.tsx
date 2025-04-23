import React from 'react';
import { Link } from 'react-router-dom'; // 匯入 Link
import '../styles/pages/Home.css';
import myImageUrl from '../assets/home_icon.png';
import LazyImage from '../components/LazyImage';

const Home: React.FC = () => {
  return (
    <>
      <div className="home-page">
        <h1>Arnold 的軟體開發作品集</h1> {/* 修改標題 */}
        <p>探索我使用 React 和 TypeScript 建構的專案與網頁體驗。</p> {/* 修改說明 */}
        {/* 加入行動呼籲按鈕 */}
        <Link to="/portfolio" className="cta-button">
          查看我的作品集
        </Link>
        <LazyImage
          src={myImageUrl}
          alt="網站首頁的主要視覺圖示"
          className="full-page-image"
        />
      </div>
    </>
  );
};

export default Home;