'use client';

import { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-creme border-b border-terracotta/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo de la marque */}
        <Link href="/" className="text-2xl font-bold text-chocolat tracking-tight hover:opacity-90 transition">
          JE NE JOUIS PAS<span className="text-terracotta">.</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-chocolat">
          <Link href="/" className="hover:text-terracotta transition">Accueil</Link>
          <Link href="#articles" className="hover:text-terracotta transition">Thématiques</Link>
          <Link href="#communaute" className="hover:text-terracotta transition">Forum & Chat</Link>
          <Link href="#ressources" className="hover:text-terracotta transition">Ressources</Link>
        </nav>

        {/* Barre de recherche et Espace Membre */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un sujet..."
              className="bg-white text-sm rounded-full pl-9 pr-4 py-2 border border-terracotta/30 focus:outline-none focus:border-terracotta text-chocolat placeholder-chocolat/50 w-64 shadow-sm"
            />
            <Search className="w-4 h-4 text-chocolat/50 absolute left-3 top-3" />
          </div>

          <button className="bg-terracotta hover:bg-[#A8533B] text-white text-sm px-5 py-2 rounded-full font-medium transition shadow-sm flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>{`S'inscrire / Espace`}</span>
          </button>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden text-chocolat p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Ouvrir le menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile Déroulant */}
      {isMenuOpen && (
        <div className="md:hidden bg-creme border-t border-terracotta/20 px-4 py-6 space-y-4 shadow-lg">
          <Link href="/" className="block text-chocolat font-medium hover:text-terracotta">Accueil</Link>
          <Link href="#articles" className="block text-chocolat font-medium hover:text-terracotta">Thématiques</Link>
          <Link href="#communaute" className="block text-chocolat font-medium hover:text-terracotta">Forum & Chat</Link>
          <Link href="#ressources" className="block text-chocolat font-medium hover:text-terracotta">Ressources</Link>
          <div className="pt-2">
            <button className="w-full bg-terracotta text-white py-2.5 rounded-full text-sm font-medium flex items-center justify-center space-x-2 shadow-sm">
              <User className="w-4 h-4" />
              <span>{`S'inscrire / Espace`}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}