'use client';

import { Heart, MessageCircle, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-creme py-16 md:py-24 border-b border-terracotta/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texte de présentation */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 bg-terracotta/10 text-terracotta px-4 py-1.5 rounded-full text-sm font-medium">
            <Heart className="w-4 h-4 fill-terracotta text-terracotta" />
            <span>Un espace bienveillant & tabou-free</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-chocolat leading-tight">
            Comprendre son corps, <br />
            <span className="text-terracotta">réinventer son plaisir.</span>
          </h1>

          <p className="text-lg text-chocolat/80 max-w-xl">
            {`JE NE JOUIS PAS est une plateforme d'information, de témoignages et de ressources pour aborder la sexualité féminine sans honte, sans complexe et en toute liberté.`}
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="#articles"
              className="w-full sm:w-auto bg-terracotta hover:bg-[#A8533B] text-white px-7 py-3.5 rounded-full font-medium transition shadow-md flex items-center justify-center space-x-2"
            >
              <span>Découvrir les articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#communaute"
              className="w-full sm:w-auto bg-white border border-terracotta/30 text-chocolat hover:border-terracotta px-7 py-3.5 rounded-full font-medium transition flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-terracotta" />
              <span>Rejoindre la communauté</span>
            </Link>
          </div>
        </div>

        {/* Bloc visuel / Carte mise en avant */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-terracotta/10 space-y-6">
          <h3 className="text-xl font-bold text-chocolat border-b border-terracotta/10 pb-4">
            Par où commencer ?
          </h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creme/60 transition cursor-pointer">
              <div className="p-3 bg-terracotta/10 rounded-xl text-terracotta">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-chocolat">Anorgasmie & Blocages</h4>
                <p className="text-sm text-chocolat/70">Comprendre les causes physiques et psychologiques.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creme/60 transition cursor-pointer">
              <div className="p-3 bg-terracotta/10 rounded-xl text-terracotta">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-chocolat">Anatomie & Clitoris</h4>
                <p className="text-sm text-chocolat/70">Reconnexion avec son anatomie sans tabou.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creme/60 transition cursor-pointer">
              <div className="p-3 bg-terracotta/10 rounded-xl text-terracotta">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-chocolat">Témoignages anonymes</h4>
                <p className="text-sm text-chocolat/70">Lire et partager des histoires inspirantes.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}