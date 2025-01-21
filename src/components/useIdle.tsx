import { useState, useEffect, useRef, useCallback } from 'react';

const useIdle = (timeout: number = 3000): boolean => {
  const [isIdle, setIsIdle] = useState<boolean>(false);
  const timeoutRef = useRef<any>(null);
  const lastActivityRef = useRef<number>(Date.now());

  const handleActivity = useCallback(() => {
    lastActivityRef.current = Date.now();
    setIsIdle(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (Date.now() - lastActivityRef.current >= timeout) {
        setIsIdle(true);
      }
    }, timeout);
  }, [timeout]);

  useEffect(() => {
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('touchstart', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('touchstart', handleActivity);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleActivity]);

  return isIdle;
};

export default useIdle;
