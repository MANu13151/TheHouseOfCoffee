import React from 'react';
import { X, Sparkles, MapPin } from 'lucide-react';

export default function PhotoLightbox({ isOpen, onClose, image, title, description }) {
  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#1C140F] rounded-3xl border border-white/15 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
          aria-label="Close photo lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-[#1C140F] text-[#F7F3EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#3D2F24]">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C97A2B] block">
              Architectural Detail View
            </span>
            <h4 className="font-serif text-2xl font-semibold text-[#F7F3EB]">
              {title}
            </h4>
            <p className="text-xs text-[#B3A69A] max-w-xl leading-relaxed">
              {description}
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-[#271E17] border border-[#3D2F24] text-[#F0B369]">
              <Sparkles className="w-3.5 h-3.5 text-[#C97A2B]" />
              <span>Real Photo • Jaipur</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
