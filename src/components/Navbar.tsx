import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { navLinks } from "../data";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-background/80 backdrop-blur-md border-border shadow-sm" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 py-5 md:py-6 flex items-center gap-6 relative">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-9 text-base h-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-semibold text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3 ml-auto pl-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full border border-foreground/40 text-foreground hover:bg-foreground/10 transition-colors"
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? (
                            <Moon className="h-5 w-5" />
                        ) : (
                            <Sun className="h-5 w-5" />
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4 mt-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <Button
                                    variant="outline"
                                    onClick={toggleTheme}
                                    className="justify-start border-foreground/40 text-foreground hover:bg-foreground/10"
                                >
                                    {theme === "light" ? (
                                        <>
                                            <Moon className="mr-2 h-4 w-4" />
                                            Dark Mode
                                        </>
                                    ) : (
                                        <>
                                            <Sun className="mr-2 h-4 w-4" />
                                            Light Mode
                                        </>
                                    )}
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
