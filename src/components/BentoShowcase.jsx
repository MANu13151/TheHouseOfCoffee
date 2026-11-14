import React from 'react';
import { BookOpen, Sparkles, Sun, Laptop, ArrowUpRight, Coffee, Heart, CheckCircle2, Gamepad2 } from 'lucide-react';

export default function BentoShowcase({ onOpenBooking, onOpenLightbox }) {
  const rituals = [
    {
      id: 'amber-wall',
      title: 'The Amber Book & Board-Game Wall',
      subtitle: 'Vaishali Nagar Flagship',
      tag: 'Backlit Library',
      badge: 'Over 200+ Titles',
      description:
        'Warm backlit LED illumination casts a cozy 2700K amber glow across our floor-to-ceiling wooden bookshelves. Browse through contemporary literature, curated board games (Sequence, Catan, Chess), or pick up retail bags of single-origin coffee beans and Chemex drippers.',
      features: [
        'Curated library of art, fiction, and philosophy',
        'Board game shelf: Sequence, Catan, Scrabble & Chess',
        'Retail shelf of fresh whole-bean estate bags',
        'Soft velvet and curved-back cream seating',
      ],
      image: '/assets/amber-book-wall.jpg',
      aspect: 'col-span-1 lg:col-span-7',
      photoHeight: 'h-72 sm:h-96',
      icon: BookOpen,
      vibe: 'Read, Play, Savor'
    },
    {
      id: 'bakery-tables',
      title: 'Artisanal Bakery & Work-Friendly Teak Tables',
      subtitle: 'Productivity & Pâtisserie',
      tag: 'Work & Unwind',
      badge: 'Power Outlets',
      description:
        'Substantial solid teakwood dining and community work tables paired with ergonomic chairs and accessible power sockets. The gleaming glass patisserie case showcases daily baked carrot walnut cakes, dark chocolate tarts, and buttery sourdough croissants.',
      features: [
        'Solid teakwood tables designed for focus & laptops',
        'Fresh daily bakes in temperature-controlled glass display',
        'Warm hanging brass pendant lamps',
        'Fast 180+ Mbps fiber WiFi throughout',
      ],
      image: '/assets/bakery-teak-tables.jpg',
      aspect: 'col-span-1 lg:col-span-5',
      photoHeight: 'h-72 sm:h-96',
      icon: Laptop,
      vibe: 'Work & Sweet Cravings'
    },
    {
      id: 'balcony-patio',
      title: 'Balcony & Courtyard Sips',
      subtitle: 'C-Scheme Terrace',
      tag: 'Al Fresco Deck',
      badge: 'Open Sky',
      description:
        'Breezy elevated balcony seating overlooking leafy trees and courtyard tables. The quintessential Jaipur spot for golden hour iced lattes, sparkling yuzu tonics, and leisurely conversations as the evening cools down.',
      features: [
        'Open-air terrace dining with street & garden vista',
        'Chilled cascading iced lattes & cold drip infusions',
        'Pet-friendly outdoor tables',
        'Lively golden hour and evening breeze',
      ],
      image: '/assets/balcony-iced-latte.jpg',
      aspect: 'col-span-1 lg:col-span-12',
      photoHeight: 'h-80 sm:h-[420px]',
      icon: Sun,
      vibe: 'Golden Hour & Evening Chill',
      isWide: true
    }
  ];

  return (
    <section id="spaces" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F3EB] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#C97A2B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Space &amp; Ritual</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#1C140F]">
              Designed for Lingering, <br />
              <span className="italic font-normal text-[#C97A2B]">Reading &amp; Slow Sips.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#7E7065] max-w-md leading-relaxed">
            Every corner is thoughtfully composed: from our amber-lit library wall and board games to freshly baked pâtisserie and sun-dappled balcony tables.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {rituals.map((ritual) => {
            const Icon = ritual.icon;
            return (
              <div
                key={ritual.id}
                className={`${ritual.aspect} bg-white rounded-3xl border border-[#221814]/10 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group`}
              >
                {/* Visual Area */}
                <div className={`relative ${ritual.photoHeight} w-full overflow-hidden bg-[#1C140F]`}>
                  <img
                    src={ritual.image}
                    alt={ritual.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104 cursor-pointer"
                    onClick={() => onOpenLightbox(ritual.image, ritual.title, ritual.description)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C140F]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#1C140F] shadow-xs">
                      {ritual.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1C140F]/85 backdrop-blur-md text-[#F0B369] border border-white/10">
                      {ritual.badge}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
                    <span className="text-xs font-semibold tracking-wide flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#C97A2B]" />
                      {ritual.vibe}
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(ritual.image, ritual.title, ritual.description)}
                      className="text-xs text-white/80 hover:text-white underline underline-offset-4 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Expand Photo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Content & Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C97A2B] block">
                        {ritual.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C140F] group-hover:text-[#C97A2B] transition-colors mt-1">
                        {ritual.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#55473E] leading-relaxed">
                      {ritual.description}
                    </p>

                    {/* Features list */}
                    <div className={`grid ${ritual.isWide ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'} gap-2.5 pt-3 border-t border-[#221814]/8`}>
                      {ritual.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#55473E]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C97A2B] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Card Action */}
                  <div className="pt-6 mt-6 border-t border-[#221814]/8 flex items-center justify-between">
                    <span className="text-xs text-[#7E7065] font-medium">
                      Experience this area today
                    </span>
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="btn-press flex items-center gap-1.5 text-xs font-semibold text-[#1C140F] hover:text-[#C97A2B] px-4 py-2 rounded-full bg-[#F7F3EB] hover:bg-[#EFE9DD] border border-[#221814]/10 transition-colors cursor-pointer"
                    >
                      <span>Reserve Table Here</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
