import Hero from '@/components/Hero'
import { ThemeProvider } from "@/components/theme-provider"
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { TooltipProvider } from "@/components/ui/tooltip"
import Experience from '@/components/Experiance'
import Footer from '@/components/Footer'

function App() {
  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <TooltipProvider>
     <div>
      {/* <ThemeToggle /> */}
      <Hero />
      <div id="projects">
        <Projects/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="experience">
        <Experience/>
      </div>
      <Footer />
    </div>
    </TooltipProvider>
    </ThemeProvider>
  )
}

export default App