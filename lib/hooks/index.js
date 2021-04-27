import { useGeneralSettings } from '@wpengine/headless/react';
import { useState, useEffect } from 'react';

export const useGlobalData = () => {
  const settings = useGeneralSettings();
  const { title } = settings;
  console.log('settings', settings);

  return {
    title,
  };
};

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
