import React from 'react';
import ProjectCard from '../components/ProjectCard'; // 引入 ProjectCard 元件
import '../styles/pages/Portfolio.css'; // 引入頁面樣式
import { usePageTitle } from '../hooks/usePageTitle'; // 修正：使用具名引入

// 範例作品資料 (請替換成你的實際資料)
const projects = [
  {
    id: 1,
    title: '響應式網站設計',
    description: '為客戶設計並開發了一個現代化的響應式網站，提升了使用者體驗和行動裝置的可訪問性。',
    imageUrl: '/assets/Gemini_Generated_Image_5cv2w85cv2w85cv2.jpg', // 使用 assets 中的範例圖片
    tags: ['React', 'TypeScript', 'CSS Modules'],
    liveUrl: '#', // 替換成實際連結
    repoUrl: '#', // 替換成實際連結
  },
  {
    id: 2,
    title: '遊戲網站資料爬蟲與自動化操作',
    description: '爬取網頁資料並進行自動化操作，實現了高效的數據收集和處理流程。',
    imageUrl: '/project2.png', // 使用 public 中的範例圖片
    tags: ['python', 'javascript', 'selenium'],
    liveUrl: '#',
  },
  // 可以加入更多專案...
];

const Portfolio: React.FC = () => {
  usePageTitle(); // 設定頁面標題

  return (
    <div className="portfolio-page page-container">
      <h1>作品集</h1>
      <p>這裡是我們精選的一些專案，展現了我們在不同領域的專業能力和經驗。</p>

      <div className="projects-grid"> {/* 使用網格佈局 */}
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;