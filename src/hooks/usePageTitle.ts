// src/hooks/usePageTitle.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageTitles, BASE_TITLE } from '../config/pageTitles';

export const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const title = pageTitles[path] || BASE_TITLE; // Fallback to base title
    document.title = title;
  }, [location.pathname]); // Re-run effect when pathname changes
};
