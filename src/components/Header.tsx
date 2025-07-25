import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Header.css';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      console.log('Performing search for:', searchQuery);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchActive(false);
      closeMenu();
    }
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchSubmit(event);
    }
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup function to remove the class when the component unmounts or isMenuOpen changes
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.className = ''; // Clear existing classes first
    document.body.classList.add(`theme-${theme}`);
    if (isMenuOpen) { // Re-apply menu-open if menu is open when theme changes
        document.body.classList.add('menu-open');
    }
    localStorage.setItem('theme', theme);
  }, [theme, isMenuOpen]); // Add isMenuOpen dependency here

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            {siteTitle === '諾秋工作室' ? (
              <>
                <span className="logo-char-fix">諾</span>秋工作室
              </>
            ) : (
              siteTitle
            )}
          </Link>
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

        {isSearchActive ? (
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="search"
              placeholder="搜尋..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchKeyDown}
              aria-label="Search input"
              autoFocus
            />
          </form>
        ) : (
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>首頁</Link></li>
              <li><Link to="/about" onClick={closeMenu}>關於我們</Link></li>
              <li><Link to="/services" onClick={closeMenu}>服務項目</Link></li>
              <li><Link to="/portfolio" onClick={closeMenu}>作品集</Link></li>
              <li><Link to="/blog" onClick={closeMenu}>AI新聞</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>聯絡我們</Link></li>
            </ul>
          </nav>
        )}

        <div className="header-actions">
          <button className="search-button" aria-label="Search" onClick={handleSearchClick}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="theme-toggle" aria-label="Toggle theme" onClick={handleThemeToggle}>
            {theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2V1M10 19V18M16.364 3.636L15.656 4.344M4.344 15.656L3.636 16.364M18 10H19M1 10H2M16.364 16.364L15.656 15.656M4.344 4.344L3.636 3.636M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.364 11.636C17.711 14.091 15.697 16 13 16C9.68629 16 7 13.3137 7 10C7 7.30303 8.90905 5.28901 11.364 4.63604C10.646 4.23904 9.84697 4 9 4C5.13401 4 2 7.13401 2 11C2 14.866 5.13401 18 9 18C12.866 18 16 14.866 16 11C16 10.153 15.761 9.35396 15.364 8.63604C16.761 9.23904 17.864 10.342 18.364 11.636Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;