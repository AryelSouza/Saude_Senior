import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <MyContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}