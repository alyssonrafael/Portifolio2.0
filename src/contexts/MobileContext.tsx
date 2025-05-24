"use client";

import { createContext, useContext, useEffect, useState } from "react";

//propr do contexto
interface MobileContextProps {
  isMobile: boolean;
}
//inicia com false para is mobile e cria o contexto
const Mobilecontext = createContext<MobileContextProps>({ isMobile: false });

export const MobileProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  return (
    <Mobilecontext.Provider value={{ isMobile }}>
      {children}
    </Mobilecontext.Provider>
  );
};

export const useMobile = () => useContext(Mobilecontext);
