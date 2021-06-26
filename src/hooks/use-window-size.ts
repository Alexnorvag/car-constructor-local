import { useCallback, useEffect, useState } from "react";

export const useWindowSize = () => {
  const isClient = typeof window === "object";

  const getSize = useCallback(
    () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      isMobile: isClient ? window.innerWidth <= 480 : undefined,
      isTablet: isClient ? window.innerWidth <= 768 : undefined,
      isMinimizeDrawer: isClient ? window.innerWidth <= 1400 : undefined,
    }),
    [isClient]
  );

  const [windowSize, setWidnowSize] = useState(getSize());

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setWidnowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getSize, isClient]);

  return windowSize;
};
