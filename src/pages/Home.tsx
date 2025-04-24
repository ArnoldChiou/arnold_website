import React, { useState } from 'react'; // 匯入 useState
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';
import defaultImageUrl from '../assets/home_icon.png'; // 重新命名預設圖片
import hoverImageUrl from '../assets/home_icon1.png'; // 匯入滑鼠移入時的圖片
import LazyImage from '../components/LazyImage';

const Home: React.FC = () => {
  // 使用 useState 來管理圖片來源
  const [currentImage, setCurrentImage] = useState(defaultImageUrl);

  return (
    <>
      <div className="home-page">
        <h1>Arnold 的軟體開發作品集</h1> {/* 修改標題 */}
        <p>探索我使用 React 和 TypeScript 建構的專案與網頁體驗。</p> {/* 修改說明 */}
        {/* 加入行動呼籲按鈕 */}
        <Link to="/portfolio" className="cta-button">
          查看我的作品集
        </Link>
        {/* 加入事件處理器來切換圖片 */}
        <div
          onMouseEnter={() => setCurrentImage(hoverImageUrl)}
          onMouseLeave={() => setCurrentImage(defaultImageUrl)}
        >
          <LazyImage
            src={currentImage} // 使用狀態中的圖片來源
            alt="網站首頁的主要視覺圖示"
            className="full-page-image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;