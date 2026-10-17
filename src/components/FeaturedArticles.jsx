'use client';

import { ArrowRight, Clock, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedArticles() {
  const articles = [
    {
      id: 1,
      category: "Anorgasmie",
      title: "Pourquoi je n'arrive pas à jouir ? Déconstruire la pression de la performance",
      excerpt: "L'anorgasmie touche de nombreuses femmes. Exploration des facteurs psychologiques, culturels et corporels qui bloquent le plaisir.",
      readTime: "6 min de lecture",
      comments: 14,
      date: "12 Octobre",
      href: "#article-1",
    },
    {
      id: 2,
      category: "Anatomie",
      title: "Cartographie du plaisir : tout savoir sur l'anatomie clitoridienne",
      excerpt: "Le clitoris est un organe bien plus vaste qu'il n'y paraît. Découvrez sa structure complète et son rôle central dans le plaisir.",
      readTime: "8 min de lecture",
      comments: 9,
      date: "08 Octobre",
      href: "#article-2",
    },
    {
      id: 3,
      category: "Témoignage",
      title: "{`\"`}'J'ai découvert mon plaisir à 32 ans'{`\"`} : le récit de Sophie",
      excerpt: "Après des années de silence et d'incompréhension dans son couple, Sophie partage son cheminement vers la reconnexion avec son corps.",
      readTime: "5 min de lecture",
      comments: 22,
      date: "04 Octobre",
      href: "#article-3",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-terracotta/10">
      <div className="max-w-7xl mx-auto px-4">

        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="text-terracotta font-semibold text-sm tracking-wide uppercase">
              {`À la une`}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-chocolat">
              {`Dernières lectures & Témoignages`}
            </h2>
          </div>

          <Link
            href="#articles"
            className="mt-4 md:mt-0 text-terracotta hover:underline font-medium inline-flex items-center space-x-2"
          >
            <span>{`Voir tous les articles`}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-creme/50 rounded-3xl p-6 border border-terracotta/10 hover:border-terracotta/30 transition flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-chocolat/60">
                  <span className="bg-terracotta/10 text-terracotta font-semibold px-3 py-1 rounded-full">
                    {art.category}
                  </span>
                  <span>{art.date}</span>
                </div>

                <h3 className="text-xl font-bold text-chocolat hover:text-terracotta transition cursor-pointer">
                  {art.title}
                </h3>

                <p className="text-sm text-chocolat/75 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-terracotta/10 flex items-center justify-between text-xs text-chocolat/60">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-terracotta" />
                  <span>{art.readTime}</span>
                </div>

                <div className="flex items-center space-x-1">
                  <MessageSquare className="w-3.5 h-3.5 text-terracotta" />
                  <span>{`${art.comments} commentaires`}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}