import {ModeToggle} from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <header className="w-full bg-background text-foreground border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        {/* Left: logo */}
        <div className="flex items-center gap-4">
          <div className="font-hanken-grotesk text-sm font-semibold tracking-tight">Kumar Nirupam</div>
          {/* Vertical divider */}
          <div className="h-7 w-[1px] bg-border/20" />
        </div>

        {/* Right: nav links + theme toggle */}
        <nav className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm text-secondary font-hanken-grotesk">
            <li><a href="#projects" className="hover:text-primary hover:underline">Projects</a></li>
            <li><a href="#skills" className="hover:text-primary hover:underline">Skills</a></li>
            <li><a href="#experience" className="hover:text-primary hover:underline">Experience</a></li>
            <li><a href="#socials" className="hover:text-primary hover:underline">Socials</a></li>
            <li><a href="#contact" className="hover:text-primary hover:underline">Contact</a></li>
            <li><a href="#resume" className="hover:text-primary hover:underline">Resume</a></li>
          </ul>

          {/* Theme toggle */}
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Navbar