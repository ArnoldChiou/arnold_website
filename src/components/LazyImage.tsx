import React, { useRef, useEffect, useState } from 'react';
import '../styles/components/LazyImage.css'; // 引入對應的 CSS

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderSrc?: string; // 可選的低解析度預覽圖
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, placeholderSrc, className, ...rest }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 } // 當圖片 10% 進入視窗時觸發
    );

    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // 當圖片進入視窗後，才開始載入實際圖片
    if (isInView) {
      const imgElement = imgRef.current;
      if (imgElement && src) {
        imgElement.src = src;
        imgElement.onload = () => {
          setIsLoaded(true);
        };
        // 如果圖片已經在快取中，onload 可能不會觸發，直接設為 loaded
        if (imgElement.complete) {
            setIsLoaded(true);
        }
      }
    }
  }, [isInView, src]);

  const currentSrc = isInView ? src : placeholderSrc;
  const imageClassName = `
    lazy-image
    ${isLoaded ? 'loaded' : 'loading'}
    ${className || ''}
  `;

  return (
    <img
      ref={imgRef}
      src={currentSrc} // 先顯示 placeholder 或不顯示，進入視窗後才載入 src
      alt={alt}
      className={imageClassName}
      {...rest}
      // 移除 loading="lazy"，因為我們自己處理了
    />
  );
};

export default LazyImage;
