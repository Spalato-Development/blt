import { useGeneralSettings } from '@wpengine/headless/react';
export const useGlobalData = () => {
  const settings = useGeneralSettings();
  const { title } = settings;
  console.log('settings', settings);

  return {
    title,
  };
};
