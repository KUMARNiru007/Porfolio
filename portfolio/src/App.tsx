import Hero from '@/components/Hero'
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <div>
      {/* <ThemeToggle /> */}
      <Hero />
    </div>
    
    </ThemeProvider>
  )
}

export default App