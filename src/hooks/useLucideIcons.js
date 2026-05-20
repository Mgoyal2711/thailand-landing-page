import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useLucideIcons() {
  const location = useLocation();

  useEffect(() => {
    if (window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
  }, [location.pathname]);
}
