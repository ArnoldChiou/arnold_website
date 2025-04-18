import React, { useRef, useEffect, useState } from 'react';
import '../styles/pages/home.css';

const LazyImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt, ...rest }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if ('IntersectionObserver' in window) {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(img);
      return () => observer.disconnect();
    } else {
      setIsVisible(true);
    }
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined}
      alt={alt}
      className="full-page-image"
      {...rest}
    />
  );
};

const Home: React.FC = () => {
  return (
    <>
      <title>Arnold's Portfolio | 首頁</title>
      <div className="home-page">
        <h1>歡迎來到我的網站</h1>
        <p>這是一個使用 React 和 TypeScript 建立的現代化網站。</p>
        <LazyImage src="/public/Gemini_Generated_Image_5cv2w85cv2w85cv2.jpg" alt="描述圖片" loading="lazy" />
      </div>
    </>
  );
};

export default Home;