import { Button } from "@/components/ui/button"
import Navbar from "./Navbar"
import ProfileCard from "./Profile"


function Hero() {
  return (
    <div>
        <div className="bg-background text-foreground" />
        <div className="bg-warning text-warning-foreground" />
        <Navbar />
        
      <div className="flex min-h-svh  items-center justify-center">
        <ProfileCard/>
        <Button>Click me</Button>
    </div>
    </div>

  )
}

export default Hero