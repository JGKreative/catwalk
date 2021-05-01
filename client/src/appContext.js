import { createContext, useContext } from 'react';

const appContext = createContext();

const contextDataRetriever = () => {
  const data = useContext(appContext);
  return data;
};

export { appContext, contextDataRetriever };
export default contextDataRetriever;
