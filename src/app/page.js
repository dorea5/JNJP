'use client';

import { useState } from 'react';
import { Search, User, Menu, X, Heart, MessageSquare, Clock, ArrowRight, Send } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-chocolat font-sans selection:bg-terracotta selection:text-white">
      
     {/* HEADER AVEC PREMIER LIEN ALIGNÉ SUR LA PHOTO DU HERO */}
      <header className="bg-[#D8836A] text-white sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
          
          {/* Grille interne pour forcer l'alignement exact avec le Hero (3 cols à gauche pour le logo) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center gap-6">
            
            {/* Logo dans les 3 premières colonnes (aligné avec le titre "JE NE JOUIS PAS") */}
            <div className="lg:col-span-3 flex justify-between lg:justify-start items-center">
              <Link href="/" className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display hover:opacity-90 transition">
                {`JNJP`}<span className="text-chocolat">{`.`}</span>
              </Link>

              {/* Bouton Menu Mobile */}
              <button 
                className="lg:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Navigation & Bouton dans les 9 colonnes suivantes (alignés avec la photo du Hero) */}
            <div className="hidden lg:col-span-9 lg:flex items-center justify-between">
              
              {/* Navigation Desktop */}
              <nav className="flex items-center space-x-12 text-sm font-medium text-white/90">
                <Link href="#articles" className="hover:text-chocolat transition duration-200 tracking-wide">{`Articles`}</Link>
                <Link href="#ressources" className="hover:text-chocolat transition duration-200 tracking-wide">{`Ressources`}</Link>
                <Link href="#communaute" className="hover:text-chocolat transition duration-200 tracking-wide">{`Communauté`}</Link>
                <Link href="#apropos" className="hover:text-chocolat transition duration-200 tracking-wide">{`À Propos`}</Link>
                <span className="cursor-pointer hover:text-chocolat transition duration-200 flex items-center space-x-1.5 tracking-wide">
                  <span>{`Recherche`}</span>
                  <Search className="w-3.5 h-3.5" />
                </span>
              </nav>

              {/* Bouton Inscription */}
              <div>
                <button className="bg-terracotta hover:bg-[#C86D51] text-white text-sm px-7 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 border border-white/20">
                  {`S'inscrire`}
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#D8836A] text-white px-6 py-6 space-y-4 shadow-lg border-t border-white/10">
            <Link href="#articles" className="block text-white font-medium">{`Articles`}</Link>
            <Link href="#ressources" className="block text-white font-medium">{`Ressources`}</Link>
            <Link href="#communaute" className="block text-white font-medium">{`Communauté`}</Link>
            <Link href="#apropos" className="block text-white font-medium">{`À Propos`}</Link>
            <button className="w-full bg-terracotta hover:bg-[#C86D51] text-white py-3 rounded-full text-sm font-semibold transition">
              {`S'inscrire`}
            </button>
          </div>
        )}
      </header>
    {/* SECTION HERO : PHRASE POSITIONNÉE PLUS BAS DANS LA PHOTO */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Titre */}
          <div className="lg:col-span-3 transition-all duration-700 ease-out transform translate-y-0 opacity-100 animate-in fade-in slide-in-from-bottom-4">
            <h1 className="text-6xl sm:text-7xl lg:text-[11rem] xl:text-8xl font-bold text-terracotta leading-[0.85] tracking-tight font-display uppercase">
              {`JE NE`}<br />
              {`JOUIS PAS`}
            </h1>
          </div>

          {/* Bannière photo avec la phrase alignée en bas (`items-end pb-8 sm:pb-12`) */}
          <div className="lg:col-span-9 relative rounded-3xl overflow-hidden shadow-md h-80 sm:h-[400px] md:h-[500px] flex items-end justify-center group transition-all duration-1000 ease-out animate-in fade-in zoom-in-95">
            <img 
              src="/women_bubble.jpg" 
              alt="Femmes bienveillantes" 
              className="absolute inset-0 w-full h-full object-cover object-[center_35%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Dégradé doux en bas pour faire ressortir le texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-chocolat/60 via-chocolat/10 to-transparent"></div>
            
            {/* Phrase placée plus bas */}
            <div className="relative z-10 text-center px-6 pb-8 sm:pb-12 transform group-hover:scale-102 transition-transform duration-500">
              <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wide drop-shadow-md font-display">
                {`Découvrez votre plaisir, sans tabou.`}
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* SECTION ARTICLES À LA UNE */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolat font-display tracking-tight">
            {`À la une`}
          </h2>
          <span className="text-sm font-semibold text-terracotta hover:text-chocolat transition cursor-pointer">
            {`Voir tous les articles →`}
          </span>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Article principal (occupe 2 colonnes) */}
          <div className="md:col-span-2 group cursor-pointer">
            <div className="relative rounded-3xl overflow-hidden shadow-md bg-white aspect-[16/9] mb-4">
              <img 
                src="/women_talking.jpg" 
                alt="Article à la une" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-terracotta text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {`Dossier`}
              </div>
            </div>
            <p className="text-xs uppercase tracking-wider text-terracotta font-semibold mb-1">
              {`Intimité & Parole • 5 min de lecture`}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-chocolat group-hover:text-terracotta transition font-display">
              {`Pourquoi 70% des femmes ne jouissent pas par pénétration : brisons les mythes`}
            </h3>
            <p className="text-chocolat/80 text-sm mt-2 line-clamp-2">
              {`Focus anatomique et culturel sur le plaisir féminin au-delà des schémas traditionnels de la performance.`}
            </p>
          </div>

          {/* Article secondaire (occupe 1 colonne) */}
          <div className="group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-md bg-white aspect-[4/3] mb-4">
                <img 
                  src="/women_talking.jpg" 
                  alt="Article secondaire" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-chocolat text-creme text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {`Témoignage`}
                </div>
              </div>
              <p className="text-xs uppercase tracking-wider text-terracotta font-semibold mb-1">
                {`Récit • 3 min de lecture`}
              </p>
              <h3 className="text-xl font-bold text-chocolat group-hover:text-terracotta transition font-display">
                {`"J'ai apprivoisé mon corps à 30 ans passés"`}
              </h3>
              <p className="text-chocolat/80 text-sm mt-2 line-clamp-2">
                {`Le parcours libérateur d'une femme qui a réécrit son rapport à l'intime et au lâcher-prise.`}
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* CONTENU PRINCIPAL EN GRILLE */}
      <main className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLONNE GAUCHE (Articles & Infographie) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Articles Interactifs */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-chocolat border-b border-terracotta/20 pb-3">
                {`Articles Interactifs`}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Grand article mis en avant */}
                <div className="md:col-span-7 bg-white p-6 rounded-3xl border border-terracotta/10 shadow-sm flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden bg-terracotta/20 h-48 relative">
                      <img 
                        src="/women_bubble.jpg" 
                        alt="Illustration article" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-chocolat hover:text-terracotta transition cursor-pointer">
                      {`Pourquoi 70% des femmes ne jouissent pas par pénétration`}
                    </h3>
                    <p className="text-sm text-chocolat/70 leading-relaxed">
                      {`Pourquoi l'idée reçue du coït unique persiste ? Décryptage des blocages anatomiques et culturels.`}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-chocolat/60 pt-4 border-t border-terracotta/10">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <Heart className="w-3.5 h-3.5 text-terracotta fill-terracotta" />
                        <span>{`82`}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MessageSquare className="w-3.5 h-3.5 text-terracotta" />
                        <span>{`0`}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Petites cartes d'articles secondaires */}
                <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
                  
                  <div className="bg-white p-4 rounded-2xl border border-terracotta/10 shadow-sm space-y-3">
                    <div className="flex space-x-3 items-center">
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200" alt="couple" className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-chocolat line-clamp-2">
                          {`L'importance de la communication dans le couple`}
                        </h4>
                        <div className="flex space-x-3 text-xs text-chocolat/60 mt-2">
                          <span>{`❤️ 4`}</span>
                          <span>{`💬 0`}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-terracotta/10 shadow-sm space-y-3">
                    <div className="flex space-x-3 items-center">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" alt="anatomie" className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-chocolat line-clamp-2">
                          {`Enquête sur l'orgasme féminin`}
                        </h4>
                        <div className="flex space-x-3 text-xs text-chocolat/60 mt-2">
                          <span>{`❤️ 6`}</span>
                          <span>{`💬 0`}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-terracotta/10 shadow-sm space-y-3">
                    <div className="flex space-x-3 items-center">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="femme" className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-chocolat line-clamp-2">
                          {`5 mythes sur l'orgasme féminin`}
                        </h4>
                        <div className="flex space-x-3 text-xs text-chocolat/60 mt-2">
                          <span>{`❤️ 15`}</span>
                          <span>{`💬 0`}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Infographie sur le Plaisir Féminin */}
            <div className="bg-white p-8 rounded-3xl border border-terracotta/10 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-chocolat text-center">
                {`Infographie sur le Plaisir Féminin`}
              </h2>
              <div className="bg-creme p-6 rounded-2xl border border-terracotta/15 flex flex-col md:flex-row items-center justify-around gap-6 text-center">
                <div className="space-y-2 max-w-xs">
                  <div className="w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center mx-auto font-bold">{`1`}</div>
                  <h4 className="font-bold text-chocolat">{`Anatomie & Cycle`}</h4>
                  <p className="text-xs text-chocolat/70">{`Cartographie complète et repères biologiques essentiels.`}</p>
                </div>
                <div className="space-y-2 max-w-xs">
                  <div className="w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center mx-auto font-bold">{`2`}</div>
                  <h4 className="font-bold text-chocolat">{`Zones Érogènes`}</h4>
                  <p className="text-xs text-chocolat/70">{`Comprendre la sensibilité externe et interne sans complexe.`}</p>
                </div>
                <div className="space-y-2 max-w-xs">
                  <div className="w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center mx-auto font-bold">{`3`}</div>
                  <h4 className="font-bold text-chocolat">{`Plaisir & Lâcher-prise`}</h4>
                  <p className="text-xs text-chocolat/70">{`Sortir de la performance pour retrouver le bien-être.`}</p>
                </div>
              </div>
            </div>

          </div>

          {/* COLONNE DROITE / SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Catégories Populaires */}
            <div className="bg-white p-6 rounded-3xl border border-terracotta/10 shadow-sm space-y-4">
              <h3 className="font-bold text-lg text-chocolat border-b border-terracotta/10 pb-3">
                {`Catégories Populaires`}
              </h3>
              <ul className="space-y-2.5 text-sm text-chocolat/80 font-medium">
                <li className="hover:text-terracotta cursor-pointer transition flex items-center space-x-2">
                  <span className="text-terracotta">{`›`}</span> <span>{`Catégories`}</span>
                </li>
                <li className="hover:text-terracotta cursor-pointer transition flex items-center space-x-2">
                  <span className="text-terracotta">{`›`}</span> <span>{`Ressources`}</span>
                </li>
                <li className="hover:text-terracotta cursor-pointer transition flex items-center space-x-2">
                  <span className="text-terracotta">{`›`}</span> <span>{`Anorgasmie`}</span>
                </li>
              </ul>
            </div>

            {/* Derniers Commentaires */}
            <div className="bg-white p-6 rounded-3xl border border-terracotta/10 shadow-sm space-y-4">
              <h3 className="font-bold text-lg text-chocolat border-b border-terracotta/10 pb-3">
                {`Derniers Commentaires`}
              </h3>
              
              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <p className="font-semibold text-chocolat flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-terracotta"></span>
                    <span>{`L'importance de la communication dans le couple`}</span>
                  </p>
                  <p className="text-chocolat/60 pl-3.5">{`3 commentaires • il y a 5 minutes`}</p>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-chocolat flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-terracotta"></span>
                    <span>{`L'importance de la communication dans le couple`}</span>
                  </p>
                  <p className="text-chocolat/60 pl-3.5">{`3 commentaires • il y a 15 minutes`}</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white p-6 rounded-3xl border border-terracotta/10 shadow-sm space-y-4">
              <h3 className="font-bold text-lg text-chocolat">{`Newsletter`}</h3>
              <p className="text-xs text-chocolat/70 leading-relaxed">
                {`Inscrivez-vous pour recevoir nos actualités et conseils exclusifs.`}
              </p>
              
              <div className="relative pt-1">
                <input 
                  type="email" 
                  placeholder="Email address..." 
                  className="w-full bg-creme text-xs rounded-full pl-4 pr-10 py-2.5 border border-terracotta/30 focus:outline-none focus:border-terracotta text-chocolat"
                />
                <button className="absolute right-1.5 top-[calc(50%+2px)] -translate-y-1/2 bg-terracotta hover:bg-[#A8533B] text-white p-1.5 rounded-full transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Mini Footer Sidebar */}
            <div className="bg-chocolat text-creme p-6 rounded-3xl space-y-4 text-xs">
              <div className="space-y-1">
                <p className="font-bold text-sm text-terracotta">{`JE NE JOUIS PAS`}</p>
                <p className="text-creme/70">{`Espace d'échange et d'émancipation.`}</p>
              </div>
              <div className="flex space-x-3 pt-2 text-creme/80">
                <span className="hover:text-terracotta cursor-pointer">{`Ig`}</span>
                <span className="hover:text-terracotta cursor-pointer">{`Fb`}</span>
                <span className="hover:text-terracotta cursor-pointer">{`Yt`}</span>
                <span className="hover:text-terracotta cursor-pointer">{`Pt`}</span>
              </div>
              <div className="pt-2 border-t border-creme/10 text-[10px] text-creme/50">
                {`Copyright je ne jouis pas`}
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}