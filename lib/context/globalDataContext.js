import { createContext, useContext } from 'react';

const GlobalDataContext = createContext();

const GlobalDataProvider = ({ globalData, children }) => {
  const value = { ...globalData };

  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
};

const useGlobalData = () => {
  const context = useContext(GlobalDataContext);
  if (context === undefined) {
    throw new Error('useGlobalData must be used within a CountProvider');
  }
  return context;
};

export { GlobalDataProvider, useGlobalData };
