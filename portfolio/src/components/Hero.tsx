import { Button } from "@/components/ui/button"
import Navbar from "./Navbar"


function Hero() {
  return (
    <div>
        <div className="bg-background text-foreground" />
        <div className="bg-warning text-warning-foreground" />
        <Navbar />
        
      <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
    </div>

  )
}

export default Hero