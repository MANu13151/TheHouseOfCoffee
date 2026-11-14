import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle, ArrowUpRight, Wifi, Car, BookOpen, Sun, Coffee, Instagram } from 'lucide-react';
import { OUTLETS, getWhatsAppOrderUrl } from '../data/outletsData';

export default function OutletsFooter({ activeOutlet, onOutletChange, onOpenBooking }) {
  const currentOutletData = OUTLETS[activeOutlet] || OUTLETS.vaishali;

  return (
    <footer id="outlets" className="bg-[#1C140F] text-[#F7F3EB] border-t border-[#3D2F24] relative overflow-hidden">
      
      {/* Outlets Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#271E17] border border-[#3D2F24] text-xs font-bold text-[#C97A2B] tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Two Outlets, One Standard</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F7F3EB] leading-tight">
            Visit The House of Coffee <br />
            <span className="italic font-normal text-[#C97A2B]">Across Jaipur.</span>
          </h3>

          <p className="text-sm sm:text-base text-[#B3A69A] leading-relaxed max-w-lg mx-auto">
            Choose your atmosphere: the warm amber library and board-game lounge at Vaishali Nagar, or the sunlit breezy outdoor balcony at C-Scheme.
          </p>
        </div>

        {/* Side-by-Side Outlets Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          
          {/* Outlet 01: Vaishali Nagar */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              activeOutlet === 'vaishali'
                ? 'bg-[#271E17] border-[#C97A2B] shadow-2xl ring-1 ring-[#C97A2B]/40'
                : 'bg-[#221913] border-[#3D2F24] hover:border-[#C97A2B]/40 hover:bg-[#271E17]/80'
            }`}
            onClick={() => onOutletChange('vaishali')}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C97A2B]/15 text-[#C97A2B] border border-[#C97A2B]/30">
                  Outlet 01 • Flagship Roastery
                </span>
                {activeOutlet === 'vaishali' && (
                  <span className="text-[11px] font-semibold text-[#F0B369] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Selected Outlet
                  </span>
                )}
              </div>

              <div>
                <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F3EB]">
                  {OUTLETS.vaishali.name}
                </h4>
                <p className="text-xs text-[#C97A2B] font-medium mt-0.5">
                  {OUTLETS.vaishali.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#B3A69A] leading-relaxed">
                📍 {OUTLETS.vaishali.address} <br />
                <span className="text-[11px] text-[#8C7D70]">Landmark: {OUTLETS.vaishali.landmark}</span>
              </p>

              {/* Specs & Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#3D2F24] text-xs">
                <div className="flex items-center gap-2 text-[#B3A69A]">
                  <Clock className="w-3.5 h-3.5 text-[#C97A2B] shrink-0" />
                  <span>{OUTLETS.vaishali.hours}</span>
                </div>
                <div className="flex items-center gap-2 text-[#B3A69A]">
                  <Wifi className="w-3.5 h-3.5 text-[#C97A2B] shrink-0" />
                  <span>{OUTLETS.vaishali.wifiSpeed}</span>
                </div>
                <div className="flex items-center gap-2 text-[#B3A69A]">
                  <BookOpen className="w-3.5 h-3.5 text-[#C97A2B] shrink-0" />
                  <span>Amber Book Wall &amp; Sequence</span>
                </div>
                <div className="flex items-center gap-2 text-[#B3A69A]">
                  <Car className="w-3.5 h-3.5 text-[#C97A2B] shrink-0" />
                  <span>{OUTLETS.vaishali.parking}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#3D2F24] flex flex-wrap items-center gap-3">
              <a
                href={OUTLETS.vaishali.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#34281E] hover:bg-[#433427] text-xs font-semibold text-[#F7F3EB] border border-[#4D3A2C] transition-colors cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C97A2B]" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={`tel:${OUTLETS.vaishali.phoneRaw}`}
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#34281E] hover:bg-[#433427] text-xs font-semibold text-[#F7F3EB] border border-[#4D3A2C] transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#C97A2B]" />
                <span>Call {OUTLETS.vaishali.phone}</span>
              </a>

              <a
                href={getWhatsAppOrderUrl('vaishali')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-xs font-bold text-white shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>1-Click WhatsApp Order</span>
              </a>
            </div>
          </div>

          {/* Outlet 02: C-Scheme */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              activeOutlet === 'cscheme'
                ? 'bg-[#271E17] border-[#C97A2B] shadow-2xl ring-1 ring-[#C97A2B]/40'
                : 'bg-[#221913] border-[#3D2F24] hover:border-[#C97A2B]/40 hover:bg-[#271E17]/80'
            }`}
            onClick={() => onOutletChange('cscheme')}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#5F7A52]/15 text-[#7E9C6F] border border-[#5F7A52]/30">
                  Outlet 02 • Balcony &amp; Pour-Over Bar
                </span>
                {activeOutlet === 'cscheme' && (
                  <span className="text-[11px] font-semibold text-[#F0B369] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Selected Outlet
                  </span>
                )}
              </div>

              <div>
                <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F3EB]">
                  {OUTLETS.cscheme.name}
                </h4>
                <p className="text-xs text-[#7E9C6F] font-medium mt-0.5">
                  {OUTLETS.cscheme.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#B3A69A] leading-relaxed">
                📍 {OUTLETS.cscheme.address} <br />
                <span className="text-[11px] text-[#8C7D70]">Landmark: {OUTLETS.cscheme.landmark}</span>
              </p>

              {/* Specs & Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#3D2F24] text-xs">
                <div className="flex items-center gap-2 text-[#B3A69A]">
                  <Clock className="w-3.5 h-3.5 text-[#5F7A52] shrink-0" />
                  <span>{OUTLETS.cscheme.hours}</span>
                </div>
                <div className="flex items-center gap-2 text-[#B3A69A]">
                  <Wifi className="w-3.5 h-3.5 text-[#5F7A52] shrink-0" />
                  <span>{OUTLETS.cscheme.wifiSpeed}</span>
                </div>
                <div className="flex items-center gap-2 text-[#B3A69A]">
                  <Sun className="w-3.5 h-3.5 text-[#5F7A52] shrink-0" />
                  <span>Open-Sky Terrace Balcony</span>
                </div>
                <div className="flex items-center gap-2 text-[#B3A69A]">
                  <Car className="w-3.5 h-3.5 text-[#5F7A52] shrink-0" />
                  <span>{OUTLETS.cscheme.parking}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#3D2F24] flex flex-wrap items-center gap-3">
              <a
                href={OUTLETS.cscheme.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#34281E] hover:bg-[#433427] text-xs font-semibold text-[#F7F3EB] border border-[#4D3A2C] transition-colors cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-[#7E9C6F]" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={`tel:${OUTLETS.cscheme.phoneRaw}`}
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#34281E] hover:bg-[#433427] text-xs font-semibold text-[#F7F3EB] border border-[#4D3A2C] transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#7E9C6F]" />
                <span>Call {OUTLETS.cscheme.phone}</span>
              </a>

              <a
                href={getWhatsAppOrderUrl('cscheme')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-xs font-bold text-white shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>1-Click WhatsApp Order</span>
              </a>
            </div>
          </div>

        </div>

        {/* Live Google Maps Embed Container dynamically centering on active outlet */}
        <div className="rounded-3xl border border-[#3D2F24] overflow-hidden bg-[#241B14] shadow-2xl relative">
          <div className="p-4 bg-[#2A1E16] border-b border-[#3D2F24] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-[#F7F3EB]">
                {currentOutletData.name} Map Pin • {currentOutletData.landmark}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#B3A69A]">
              <span>Active Outlet: <strong>{currentOutletData.name}</strong></span>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 w-full bg-[#1C140F]">
            <iframe
              title={`The House of Coffee ${currentOutletData.name} Map`}
              src={currentOutletData.mapsEmbedUrl}
              className="w-full h-full border-0 filter contrast-95 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom Editorial Legal & Branding Bar */}
        <div className="mt-20 pt-8 border-t border-[#3D2F24] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8C7D70]">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg font-bold text-[#F7F3EB]">
              THE HOUSE OF COFFEE
            </span>
            <span>•</span>
            <span>© {new Date().getFullYear()} The House of Coffee, Jaipur.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#B3A69A] hover:text-[#C97A2B] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@thehouseofcoffeejaipur</span>
            </a>
            <span className="text-[#B3A69A] hover:text-[#F7F3EB] cursor-pointer" onClick={onOpenBooking}>
              Order Ahead &amp; Tables
            </span>
            <a href="#menu" className="text-[#B3A69A] hover:text-[#F7F3EB]">
              Micro-Roastery Menu
            </a>
          </div>

          <div>
            <span>Slow-dripped with care in Jaipur • Vaishali Nagar &amp; C-Scheme</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
