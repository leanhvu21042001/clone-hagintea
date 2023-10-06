import React from 'react';
import useWindowPosition from './useWindowPosition';

const useIsHeaderSticky = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const headerRef = React.useRef<any>();
  const position = useWindowPosition();
  const [isSticky, setIsSticky] = React.useState(false);
  React.useEffect(() => {
    if (position.y - headerRef.current?.clientHeight > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, [position]);

  return { isSticky, headerRef };
};

export default useIsHeaderSticky;
