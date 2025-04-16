import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

// 定義 Props 的型別 (如果需要從父元件接收資料)
interface HeaderProps {
  siteTitle: string;
}

// 使用 React.FC (Functional Component) 並指定 Props 型別
// 或者直接定義函式簽章: const Header = ({ siteTitle }: HeaderProps) => { ... }
const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>{siteTitle}</Link>
        </div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>首頁</Link></li>
            <li><Link to="/about" onClick={closeMenu}>關於我們</Link></li>
            <li><Link to="/services" onClick={closeMenu}>服務項目</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu}>作品集</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>部落格</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>聯絡我們</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="search-button" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="theme-toggle" aria-label="Toggle theme">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2V1M10 19V18M16.364 3.636L15.656 4.344M4.344 15.656L3.636 16.364M18 10H19M1 10H2M16.364 16.364L15.656 15.656M4.344 4.344L3.636 3.636M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;