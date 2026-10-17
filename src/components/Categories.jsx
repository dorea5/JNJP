'use client';

import { Sparkles, Compass, MessageCircle, Heart, BookOpen, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Categories() {
  const categories = [
    {
      icon: Sparkles,
      title: "Anorgasmie & Blocages",
      description: "Comprendre l'anorgasmie primaire ou secondaire, lever les blocages psychologiques et physiques.",
      count: "12 articles",
      href: "#anorgasmie",
    },
    {
      icon: Compass,
      title: "Anatomie & Plaisir",
      description: "Le clitoris, le bulbe, le périnée : réapprendre l'anatomie féminine sans tabou ni fausses idées.",
      count: "8 articles",
      href: "#anatomie",
    },
    {
      icon: Heart,
      title: "Couple & Communication",
      description: "Exprimer ses désirs, aborder les frustrations avec son/sa partenaire sans gêne.",
      count: "15 articles",
      href: "#couple",
    },
    {
      icon: MessageCircle,
      title: "Témoignages & Récits",
      description: "Partages d'expériences vraies et histoires inspirantes de femmes sur leur parcours.",
      count: "20 histoires",
      href: "#temoignages",
    },
    {
      icon: BookOpen,
      title: "Guides & Exercices",
      description: "Prototypes d'exercices de reconnexion corporelle, méditations guidées et auto-exploration.",
      count: "6 guides",
      href: "#guides",
    },
    {
      icon: ShieldCheck,
      title: "Soin & Santé",
      description: "Facteurs hormonaux, santé pelvienne, douleurs et conseils de professionnels de santé.",
      count: "10 articles",
      href: "#sante",
    },
  ];

  return (
    <section id="articles" className="py-20 bg-creme">
      <div className="max-w-7xl mx-auto px-4">

        {/* En-tête de section */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolat">
            {`Explorez nos thématiques`}
          </h2>
          <p className="text-chocolat/70 text-base md:text-lg">
            {`Des contenus rédigés avec soin pour vous accompagner pas à pas, quel que soit votre parcours.`}
          </p>
        </div>

        {/* Grille des cartes de catégories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link
                key={index}
                href={cat.href}
                className="group bg-white p-8 rounded-3xl border border-terracotta/10 shadow-sm hover:shadow-md hover:border-terracotta/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-2xl flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-chocolat group-hover:text-terracotta transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-chocolat/70 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-terracotta/10 flex items-center justify-between text-xs font-semibold text-terracotta">
                  <span>{cat.count}</span>
                  <span className="group-hover:translate-x-1 transition-transform">{`Découvrir →`}</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}