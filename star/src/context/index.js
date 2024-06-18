import { createContext, useContext, useState } from "react";

const PrugioContext = createContext();

export const usePrugio = () => useContext(PrugioContext);

const PrugioProvider = ({ children }) => {
  const [isMobileMenuBar, setIsMobileMenuBar] = useState(false);

  return (
    <PrugioContext.Provider value={{ isMobileMenuBar, setIsMobileMenuBar }}>
      {children}
    </PrugioContext.Provider>
  );
};

export default PrugioProvider;
