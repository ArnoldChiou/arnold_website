import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';
import { usePageTitle } from './hooks/usePageTitle'; // Import the hook

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const SearchResults = lazy(() => import('./pages/SearchResults'));

// Create a component to wrap Routes and use the hook
const PageTitleUpdater: React.FC = () => {
  usePageTitle();
  return null; // This component doesn't render anything
};

function App() {
  return (
    <Router>
      <div className="app">
        <Header siteTitle="諾秋工作室" />
        <PageTitleUpdater /> {/* Add the title updater here */}
        <main className="main-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;