import { useLayoutEffect, useState } from 'react';

const useWindowPosition = () => {
  const [scrollPosition, setPosition] = useState({ x: 0, y: 0 });
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition({
        x: window.pageXOffset,
        y: window.pageYOffset,
      });
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return scrollPosition;
};

export default useWindowPosition;
