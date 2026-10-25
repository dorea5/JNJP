'use client';

import { useState } from 'react';

export default function Home() {
  const articlesCatalogue = [
    {
      id: 1,
      tag: "Grand Dossier",
      titre: "Pourquoi 70% des femmes n'atteignent pas l'orgasme par la simple pénétration ?",
      description: "Déconstruction d'un mythe anatomique tenace et éclairage médical sur le plaisir clitoridien.",
      image: "/femme_bain.jpg",
      source: "Kinsey Institute (2018)",
      likes: 342,
      url: "#article-1"
    },
    {
      id: 2,
      tag: "Psycho & Corps",
      titre: "Apprendre à lâcher prise : libérer le mental pour reconnecter au corps",
      description: "L'hypercontrôle et le spectatoring : comprendre les mécanismes du blocage et retrouver la présence.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
      source: "Masters & Johnson Research",
      likes: 215,
      url: "#article-2"
    },
    {
      id: 3,
      tag: "Anatomie & Science",
      titre: "La cartographie invisible : 8 000 terminaisons nerveuses en action",
      description: "Exploration haute précision du réseau clitoridien grâce aux avancées de l'imagerie médicale.",
      image: "/women_talking.jpg",
      source: "Dr. Helen O'Connell",
      likes: 512,
      url: "#article-3"
    },
    {
      id: 4,
      tag: "Désir & Rythmes",
      titre: "Fluctuations hormonales et libido : écouter son cycle sans culpabilité",
      description: "Comment les phases du cycle menstruel influencent l'énergie érotique et la sensibilité tactile.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
      source: "Journal of Endocrinology (2021)",
      likes: 189,
      url: "#article-4"
    },
    {
      id: 5,
      tag: "Communication",
      titre: "Exprimer ses désirs sans gêne : les clés du dialogue intime",
      description: "Des outils concrets et des formulations bienveillantes pour partager ses besoins en toute sérénité.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
      source: "Société Française de Sexologie",
      likes: 276,
      url: "#article-5"
    },
    {
      id: 6,
      tag: "Somatic Pleasure",
      titre: "La mémoire corporelle du plaisir : reconnecter par le toucher somatique",
      description: "Travailler la conscience corporelle pour débloquer les tensions et réveiller la sensibilité nerveuse.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80",
      source: "Somatic Experiencing Institute",
      likes: 403,
      url: "#article-6"
    }
  ];

  const [pageIndex, setPageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("translate-x-0 opacity-100");
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articlesCatalogue.length / articlesPerPage);

  const [likesState, setLikesState] = useState(
    articlesCatalogue.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.likes }), {})
  );

  const toggleLike = (id) => {
    setLikesState((prev) => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  const changePage = (newIndex, direction) => {
    // Effet de slide fluide
    setSlideDirection(
      direction === "next" 
        ? "-translate-x-12 opacity-0" 
        : "translate-x-12 opacity-0"
    );

    setTimeout(() => {
      setPageIndex(newIndex);
      setSlideDirection(
        direction === "next" 
          ? "translate-x-12 opacity-0" 
          : "-translate-x-12 opacity-0"
      );

      requestAnimationFrame(() => {
        setSlideDirection("translate-x-0 opacity-100");
      });
    }, 200);
  };

  const prevSlide = () => {
    const newIdx = pageIndex === 0 ? totalPages - 1 : pageIndex - 1;
    changePage(newIdx, "prev");
  };

  const nextSlide = () => {
    const newIdx = pageIndex === totalPages - 1 ? 0 : pageIndex + 1;
    changePage(newIdx, "next");
  };

  const currentArticles = articlesCatalogue.slice(
    pageIndex * articlesPerPage,
    (pageIndex + 1) * articlesPerPage
  );

  return (
    <div className="min-h-screen bg-[#FAF4EF] text-[#3A2521] selection:bg-terracotta selection:text-white font-sans">
      
      {/* 🌟 HEADER PRINCIPAL HAUT CONTRASTE */}
      <header className="sticky top-0 z-50 bg-[#221310] text-[#FAF4EF] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-serif font-extrabold tracking-[0.15em] text-[#FAF4EF] uppercase">
              JE NE JOUIS PAS
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#D8836A] inline-block"></span>
          </a>

          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-[#FAF4EF]">
            <a href="#articles" className="hover:text-[#D8836A] transition-colors">Articles & Science</a>
            <a href="#communaute" className="hover:text-[#D8836A] transition-colors">Chat</a>
            <a href="#podcasts" className="hover:text-[#D8836A] transition-colors">Podcasts</a>
            <a href="#ressources" className="hover:text-[#D8836A] transition-colors">Guides Pratiques</a>
            <a href="#a-propos" className="hover:text-[#D8836A] transition-colors">À Propos</a>
          </nav>

          <div>
            <button className="bg-[#D8836A] hover:bg-[#C86D51] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 transform hover:scale-105">
              <span>✨</span>
              <span>S&apos;abonner</span>
            </button>
          </div>
        </div>

        <div className="bg-[#1C0E0C] border-t border-[#D8836A]/20 py-2.5 px-4 text-center text-xs sm:text-sm text-[#FAF4EF]/90 flex items-center justify-center gap-2">
          <span className="text-[#D8836A] animate-bounce inline-block transform hover:scale-125 transition-transform cursor-pointer">
            🔥
          </span>
          <span>
            Nouveau numéro disponible :{" "}
            <strong className="font-bold text-white">&quot;Réinventer la Jouissance Somatique&quot;</strong>
          </span>
          <a href="#articles" className="text-[#D8836A] hover:text-white underline font-medium ml-1 transition">
            Découvrir →
          </a>
        </div>
      </header>

      {/* 🌟 SECTION HERO */}
      <section className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#3A2521] text-[#FAF4EF] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
              <span className="text-[#E29578]">✨</span>
              <span>Édition #04 • Octobre</span>
            </div>

            <h1 className="text-[5rem] sm:text-[6rem] lg:text-[6.5rem] font-serif font-normal text-[#C86D51] leading-[0.85] tracking-wide uppercase">
              JE NE<br />
              JOUIS<br />
              PAS
            </h1>
            
            <p className="text-[#C86D51] text-lg sm:text-xl font-medium leading-relaxed font-sans pt-1">
              Découvrez votre plaisir,<br />
              sans tabou.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href="#articles" 
                className="inline-flex items-center gap-2 bg-[#3A2521] text-[#FAF4EF] hover:bg-[#C86D51] transition-all px-7 py-3.5 rounded-full text-sm font-bold shadow-lg transform hover:-translate-y-0.5"
              >
                <span>Voir les articles</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#C86D51]/40 via-[#E29578]/30 to-[#3A2521]/30 rounded-[3rem] blur-xl opacity-80 pointer-events-none"></div>

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-80 sm:h-[480px] md:h-[560px] flex items-center justify-center group border-2 border-[#3A2521]/20 bg-[#3A2521]">
              <img 
                src="/women_bubble.jpg" 
                alt="Femmes bienveillantes" 
                className="absolute inset-0 w-full h-full object-cover object-[center_35%] transform group-hover:scale-105 transition-transform duration-1000 ease-out brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2521]/80 via-[#3A2521]/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#3A2521]/95 backdrop-blur-md text-white p-5 rounded-3xl shadow-2xl border border-[#C86D51]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#E29578]">Salon de discussion libre</p>
                  </div>
                  <p className="text-xs text-white/80 font-sans leading-snug">
                    Échangez en direct sans aucun jugement avec la communauté.
                  </p>
                </div>
                <a 
                  href="#communaute" 
                  className="bg-[#C86D51] hover:bg-[#D8836A] text-white text-xs font-bold px-5 py-2.5 rounded-2xl transition shadow-md whitespace-nowrap flex items-center gap-1.5 self-stretch sm:self-auto justify-center"
                >
                  <span>Rejoindre</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 BANDEAU MANIFESTO INTERACTIF */}
      <section id="pacte" className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-[#3A2521] text-[#FAF4EF] rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl border border-[#C86D51]/30 group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C86D51]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#C86D51]/20 border border-[#C86D51]/40 px-4 py-1.5 rounded-full text-xs font-bold text-[#E29578] uppercase tracking-widest font-sans">
                <span className="w-2 h-2 rounded-full bg-[#E29578] animate-ping"></span>
                <span>Premier Magazine 100% Plaisir Féminin en France</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight tracking-tight text-[#FAF4EF]">
                Le Pacte du Plaisir :<br />
                <span className="text-[#E29578] italic font-normal">Sans filtre, sans honte, sans tabou.</span>
              </h2>

              <p className="text-white/80 text-base sm:text-lg font-sans leading-relaxed">
                JE NE JOUIS PAS est le premier média indépendant dédié exclusivement à la libération de la parole, à l&apos;éducation anatomy-positive et au bien-être intime des femmes.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {["100% Scientifique", "0% Injonction", "Sororité Absolute", "100% Libérateur"].map((valeur, index) => (
                  <span 
                    key={index} 
                    className="bg-white/10 hover:bg-[#C86D51] hover:text-white transition-all cursor-pointer text-xs font-semibold px-3.5 py-1.5 rounded-xl border border-white/10 backdrop-blur-sm"
                  >
                    ✨ {valeur}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-xs font-semibold text-[#E29578] font-sans uppercase tracking-wider">
                  Rejoignez le mouvement & signez le pacte
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="text" 
                    placeholder="Votre prénom ou pseudo..." 
                    className="bg-white/10 border border-white/20 focus:border-[#E29578] text-white placeholder-white/50 px-5 py-3 rounded-2xl text-sm focus:outline-none flex-1 backdrop-blur-md transition"
                  />
                  <button 
                    type="submit"
                    className="bg-[#C86D51] hover:bg-[#D8836A] text-white font-bold px-8 py-3 rounded-2xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 font-sans"
                  >
                    <span>Signer le Pacte</span>
                    <span>✍️</span>
                  </button>
                </form>

                <div className="flex items-center gap-3 text-xs text-white/60 pt-1">
                  <span>Déjà <strong className="text-white font-semibold">12 480 lectrices</strong> ont signé.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative group/img cursor-pointer">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#E29578] to-[#C86D51] rounded-3xl opacity-70 blur-md group-hover/img:opacity-100 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#FF80A0]">
                  <img 
                    src="/petits_doigts.jpg" 
                    alt="Pacte du plaisir" 
                    className="w-full max-w-md h-auto object-cover transform group-hover/img:scale-105 group-hover/img:rotate-1 transition-all duration-500 ease-out"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#FAF4EF] text-[#3A2521] text-xs font-bold px-4 py-2.5 rounded-2xl shadow-xl border border-[#C86D51]/20 flex items-center gap-2 transform -rotate-3">
                  <span className="text-base">🤙</span>
                  <span>Promesse Jurée</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 SECTION "À LA UNE" : CARTES SÉPARÉES ET ANIMATION SLIDE */}
      <section id="articles" className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Titre & Contrôles */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-[#C86D51] uppercase tracking-widest font-sans">
              Interactions & Lectures
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#3A2521] tracking-tight mt-2">
              À la une
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={prevSlide}
              aria-label="3 articles précédents"
              className="w-12 h-12 rounded-full bg-[#3A2521] text-white hover:bg-[#C86D51] transition-all flex items-center justify-center shadow-lg active:scale-95"
            >
              ←
            </button>
            <span className="text-xs font-bold text-[#C86D51] px-2 font-sans">
              {pageIndex + 1} / {totalPages}
            </span>
            <button 
              onClick={nextSlide}
              aria-label="3 articles suivants"
              className="w-12 h-12 rounded-full bg-[#3A2521] text-white hover:bg-[#C86D51] transition-all flex items-center justify-center shadow-lg active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        {/* CONTENEUR DES CARTES SÉPARÉES AVEC EFFET SLIDE */}
        <div className="overflow-hidden py-2">
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300 ease-out transform ${slideDirection}`}
          >
            
            {currentArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-[#FAF4EF] border border-[#C86D51]/30 rounded-[2rem] p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  
                  {/* Carte image cliquable menant à l'article */}
                  <a href={article.url} className="relative block h-52 rounded-2xl overflow-hidden shadow-md bg-[#3A2521] group/card">
                    <img 
                      src={article.image} 
                      alt={article.titre} 
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3A2521]/50 via-transparent to-transparent"></div>
                    
                    {/* Badge Catégorie */}
                    <span className="absolute top-3 left-3 bg-[#FAF4EF]/95 backdrop-blur-md text-[#3A2521] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-[#C86D51]/20 shadow-sm">
                      {article.tag}
                    </span>

                    {/* Bouton Like Interactif Réel */}
                    <div className="absolute bottom-3 right-3" onClick={(e) => e.preventDefault()}>
                      <button 
                        onClick={() => toggleLike(article.id)}
                        className="bg-[#3A2521]/90 hover:bg-[#C86D51] text-white backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg active:scale-125"
                      >
                        <span className="text-red-400">❤️</span>
                        <span>{likesState[article.id]}</span>
                      </button>
                    </div>
                  </a>

                  {/* Source */}
                  <div className="text-xs text-[#C86D51] font-semibold font-sans pt-1">
                    <span>{article.source}</span>
                  </div>

                  {/* Titre cliquable menant à l'article */}
                  <a href={article.url}>
                    <h3 className="text-xl font-serif font-bold text-[#3A2521] group-hover:text-[#C86D51] transition-colors leading-snug">
                      {article.titre}
                    </h3>
                  </a>

                  {/* Extrait */}
                  <p className="text-[#3A2521]/80 text-xs sm:text-sm leading-relaxed line-clamp-3 font-sans">
                    {article.description}
                  </p>
                </div>

              </article>
            ))}

          </div>
        </div>

      </section>

    </div>
  );
}