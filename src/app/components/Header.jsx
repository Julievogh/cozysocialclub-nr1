"use client"; // 👈 Add this at the top

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react for icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="font-bold text-primary">
          <img className="h-28" src="/logobear.svg" alt="" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <ul
          className={`absolute top-16 left-0 w-full bg-background p-4 space-y-4 md:static md:flex md:space-x-6 md:space-y-0 md:p-0 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {["Home", "Pop-Up", "Catering", "Contact", "About Us"].map((item, index) => (
            <li key={index}>
              <a href="#" className="block text-center text-foreground hover:text-primary">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
