import { createContext, useState, useEffect } from "react";


export const Context = createContext();

export const GlobalContext = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLocation ,setCurrentLocation] = useState('');

  useEffect(() => {
    if (
      currentLocation.pathname === "/login" ||
      currentLocation.pathname === "/criarConta"
    ) {
      setIsMobileMenuOpen(false)
    }

    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen, currentLocation ]);

  return (
    <>
      <Context.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen ,currentLocation,setCurrentLocation }}>
        {children}
      </Context.Provider>
    </>
  );
};
