"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type NavigationContextValue = {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  desktopSidebarOpen: boolean;
  setDesktopSidebarOpen: (open: boolean) => void;
  sidebarCollapsible: boolean;
  setSidebarCollapsible: (value: boolean) => void;
  megaMenuOpen: boolean;
  setMegaMenuOpen: (open: boolean) => void;
  toggleMegaMenu: () => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [sidebarCollapsible, setSidebarCollapsible] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        mobileOpen,
        setMobileOpen,
        desktopSidebarOpen,
        setDesktopSidebarOpen,
        sidebarCollapsible,
        setSidebarCollapsible,
        megaMenuOpen,
        setMegaMenuOpen,
        toggleMegaMenu: () => setMegaMenuOpen((open) => !open),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}
