import React from "react";

import Hero from "./components/Hero";
import Footer from "./components/Footer";

import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <div>

          <Hero />
          <Footer />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
