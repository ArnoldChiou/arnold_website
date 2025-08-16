import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard'; // 引入您的 ProjectCard 組件
import '../styles/pages/Home.css'; // 引入對應的樣式檔案
import { FaLaptopCode, FaRobot, FaSyncAlt } from 'react-icons/fa'; // 引入一些圖示

// 為了方便，我們先將作品集資料直接放在這裡
// 實際專案中，您可以考慮將此資料放到共用的地方
const featuredProjects = [
  {
    id: 1,
    title: '響應式網站設計',
    description: '為客戶設計並開發了一個現代化的響應式網站，提升了使用者體驗和行動裝置的可訪問性。',
    imageUrl: '/RWD.png',
    tags: ['React', 'TypeScript', 'CSS Modules'],
    liveUrl: 'https://www.hiyori.com.tw/',
  },
  {
    id: 2,
    title: '遊戲網站資料爬蟲與自動化操作',
    description: '爬取網頁資料並進行自動化操作，實現了高效的數據收集和處理流程。',
    imageUrl: '/project2.png',
    tags: ['python', 'javascript', 'selenium'],
    liveUrl: 'https://github.com/ArnoldChiou/simcompany_AutoTrader',
  },
  {
    id: 3,
    title: 'FoodPanda 菜單專案',
    description: '透過AI工具協助商家在 foodpanda 平台上管理菜單與自行替換菜單圖片與文字',
    imageUrl: '/FoodPanda.png',
    tags: ['Gemini AI', 'Google Cloud Vision', 'Python'],
  },
];


const Home: React.FC = () => {
  return (
    <div className="home-page-container">
      {/* 1. 核心價值主張 (Hero Section) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">結合 AI 技術與網頁開發，為您的業務打造智慧解決方案</h1>
          <p className="hero-subtitle">
            我們專注於響應式網站設計、資料爬蟲與自動化流程，並整合 AI 工具，協助客戶提升效率與創造價值。
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="cta-button primary">
              免費諮詢
            </Link>
            <Link to="/portfolio" className="cta-button secondary">
              查看我們的作品
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 服務項目概覽 */}
      <section className="services-section">
        <h2 className="section-title">我們的服務</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaLaptopCode className="service-icon" />
            <h3 className="service-title">響應式網站設計</h3>
            <p className="service-description">打造在任何裝置上都完美呈現的現代化網站，提升使用者體驗。</p>
          </div>
          <div className="service-card">
            <FaSyncAlt className="service-icon" />
            <h3 className="service-title">自動化流程開發</h3>
            <p className="service-description">透過爬蟲與腳本，自動化處理重複性任務，節省您寶貴的人力與時間。</p>
          </div>
          <div className="service-card">
            <FaRobot className="service-icon" />
            <h3 className="service-title">AI 解決方案</h3>
            <p className="service-description">整合 Gemini AI 等先進技術，讓您的應用程式與業務流程更加智慧。</p>
          </div>
        </div>
        <div className="section-link-wrapper">
          <Link to="/services" className="section-link">
            了解更多服務詳情
          </Link>
        </div>
      </section>

      {/* 3. 精選作品集 */}
      <section className="portfolio-showcase">
        <h2 className="section-title">精選專案</h2>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;