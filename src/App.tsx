import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import './styles/global.css';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const pathToTitle: { [key: string]: string } = {
      '/': '首頁',
      '/about': '關於我',
      '/services': '專業技能',
      '/portfolio': '作品展示',
      '/blog': '學習筆記',
      '/contact': '聯絡方式',
      '/privacy': '隱私權政策'
    };

    const title = pathToTitle[location.pathname] || '首頁';
    document.title = `Arnold's Portfolio | ${title}`;
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <PageTitleUpdater />
        <div className="app">
          <Header siteTitle="Arnold Website" />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;