import { cn } from "@/lib/utils";
import { X, Menu } from 'lucide-react';
import { useEffect, useState } from "react";
import ThemeToggle from './ThemeToggle.jsx';
const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>

            <div className="w-[95%] max-w-[1600px] mx-auto flex items-center justify-between">
                <a className="text-3xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">I'm</span> Amit
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-10 px-4 items-center">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Nav */}

                <div className="flex items-center gap-2 md:hidden z-50">
                    <ThemeToggle />
                    <button onClick={() => setIsMenuOpen((prev) => !prev)} className="p-2 text-foreground" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
                </div>
                <div className={cn("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>

                    <div className="flex flex-col space-y-10 text-2xl font-medium">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>{item.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
