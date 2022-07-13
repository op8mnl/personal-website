
import { useState, useEffect } from 'react';

// Hook
export function isDesktop() {
    const [isDesktopView, setIsDesktopView] = useState(true);
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set isDesktopView to state
        setIsDesktopView(window.innerWidth >= 992);
      }
      // Add event listener
      window.addEventListener('resize', handleResize);
      // Call handler right away so state gets updated with initial isDesktopView
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return isDesktopView;
}

export function excessMax() {
  const [isExcessMax, setIsExcessMax] = useState(true);
  useEffect(() => {
    function handleResize() {
      setIsExcessMax(window.innerWidth >= 2400);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isExcessMax;
}