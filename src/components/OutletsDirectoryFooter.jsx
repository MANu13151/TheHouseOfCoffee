import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle, ArrowUpRight, Wifi, BookOpen, Sun, Instagram } from 'lucide-react';
import { OUTLETS, getWhatsAppOrderUrl } from '../data/outletsData';

export default function OutletsDirectoryFooter({ activeOutlet, onOutletChange, onOpenBooking }) {
  const currentOutletData = OUTLETS[activeOutlet] || OUTLETS.vaishali;

  return (
    <footer id="outlets" className="bg-[#17120E] text-[#F4EFE6] border-t border-[#2B221B]">
      
      {/* Directory Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        
        {/* Header */}
        <div className="border-b border-[#2B221B] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C86D2D] font-bold block mb-1">
              PHYSICAL DIRECTORY • TWO JAIPUR DESTINATIONS
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F4EFE6]">
              OUTLETS &amp; <span className="italic text-[#C86D2D]">MAPS.</span>
            </h3>
          </div>
          <p className="font-mono text-xs text-[#B3A69A] max-w-md leading-relaxed uppercase">
            Both spaces open daily from 8:00 AM to 11:30 PM. Walk-ins always welcome.
          </p>
        </div>

        {/* 2-Column Split-Screen Outlet Comparison Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch">
          
          {/* 01. Vaishali Nagar */}
          <div
            className={`border p-6 sm:p-8 bg-[#201914] flex flex-col justify-between transition-all cursor-pointer ${
              activeOutlet === 'vaishali'
                ? 'border-[#C86D2D] ring-1 ring-[#C86D2D]'
                : 'border-[#2B221B] hover:border-[#3D2F24]'
            }`}
            onClick={() => onOutletChange('vaishali')}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                <span className="font-mono text-xs font-bold text-[#C86D2D] uppercase tracking-widest">
                  OUTLET 01 • FLAGSHIP
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-[#C86D2D]/20 text-[#F0A569] rounded">
                  {activeOutlet === 'vaishali' ? '● CURRENTLY SELECTED' : 'CLICK TO SELECT'}
                </span>
              </div>

              <div>
                <h4 className="font-serif text-3xl font-semibold text-white">
                  Vaishali Nagar
                </h4>
                <p className="font-mono text-xs text-[#C86D2D] mt-0.5">
                  176 Nemi Sagar, Vaishali Marg, Jaipur 302021
                </p>
                <p className="text-xs text-[#B3A69A] mt-1">
                  Landmark: Beside Nemi Sagar Park, near Amrapali Circle
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#2B221B] font-mono text-xs text-[#B3A69A]">
                <div>• Hours: 8:00 AM – 11:30 PM</div>
                <div>• Wi-Fi: 180 Mbps Fiber</div>
                <div>• Amber Bookshelf Wall</div>
                <div>• Board Games: Sequence, Catan</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#2B221B] flex flex-wrap items-center gap-3">
              <a
                href={OUTLETS.vaishali.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-4 py-2 bg-[#2B221B] hover:bg-[#34281E] text-[#F4EFE6] font-mono text-xs uppercase tracking-wider rounded border border-[#3D2F24]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C86D2D]" />
                <span>Directions</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={`tel:${OUTLETS.vaishali.phoneRaw}`}
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-4 py-2 bg-[#2B221B] hover:bg-[#34281E] text-[#F4EFE6] font-mono text-xs uppercase tracking-wider rounded border border-[#3D2F24]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C86D2D]" />
                <span>Call Outlet</span>
              </a>

              <a
                href={getWhatsAppOrderUrl('vaishali')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs uppercase tracking-wider font-bold rounded"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>1-Click WhatsApp Order</span>
              </a>
            </div>
          </div>

          {/* 02. C-Scheme */}
          <div
            className={`border p-6 sm:p-8 bg-[#201914] flex flex-col justify-between transition-all cursor-pointer ${
              activeOutlet === 'cscheme'
                ? 'border-[#C86D2D] ring-1 ring-[#C86D2D]'
                : 'border-[#2B221B] hover:border-[#3D2F24]'
            }`}
            onClick={() => onOutletChange('cscheme')}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                <span className="font-mono text-xs font-bold text-[#6E9462] uppercase tracking-widest">
                  OUTLET 02 • BALCONY BAR
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-[#4F6D46]/20 text-[#6E9462] rounded">
                  {activeOutlet === 'cscheme' ? '● CURRENTLY SELECTED' : 'CLICK TO SELECT'}
                </span>
              </div>

              <div>
                <h4 className="font-serif text-3xl font-semibold text-white">
                  C-Scheme
                </h4>
                <p className="font-mono text-xs text-[#6E9462] mt-0.5">
                  Plot 14, Subhash Marg, C-Scheme, Jaipur 302001
                </p>
                <p className="text-xs text-[#B3A69A] mt-1">
                  Landmark: Opposite Central Park Gate 3, near Ahimsa Circle
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#2B221B] font-mono text-xs text-[#B3A69A]">
                <div>• Hours: 8:30 AM – 11:00 PM</div>
                <div>• Wi-Fi: 220 Mbps Fiber</div>
                <div>• Open-Sky Tree Balcony</div>
                <div>• Single-Origin Pour-Over Bar</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#2B221B] flex flex-wrap items-center gap-3">
              <a
                href={OUTLETS.cscheme.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-4 py-2 bg-[#2B221B] hover:bg-[#34281E] text-[#F4EFE6] font-mono text-xs uppercase tracking-wider rounded border border-[#3D2F24]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#6E9462]" />
                <span>Directions</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={`tel:${OUTLETS.cscheme.phoneRaw}`}
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-4 py-2 bg-[#2B221B] hover:bg-[#34281E] text-[#F4EFE6] font-mono text-xs uppercase tracking-wider rounded border border-[#3D2F24]"
              >
                <Phone className="w-3.5 h-3.5 text-[#6E9462]" />
                <span>Call Outlet</span>
              </a>

              <a
                href={getWhatsAppOrderUrl('cscheme')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-press flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs uppercase tracking-wider font-bold rounded"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>1-Click WhatsApp Order</span>
              </a>
            </div>
          </div>

        </div>

        {/* Live Google Maps Embed Container dynamically shifting focus */}
        <div className="border border-[#2B221B] bg-[#201914] overflow-hidden">
          <div className="p-4 bg-[#2B221B] border-b border-[#2B221B] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
            <span className="text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              LIVE LOCATION PIN: {currentOutletData.name.toUpperCase()} ({currentOutletData.landmark})
            </span>
            <span className="text-[#B3A69A]">
              Selected Outlet: {currentOutletData.name}
            </span>
          </div>

          <div className="relative h-72 sm:h-96 w-full bg-[#17120E]">
            <iframe
              title={`The House of Coffee ${currentOutletData.name} Map`}
              src={currentOutletData.mapsEmbedUrl}
              className="w-full h-full border-0 filter contrast-95 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Editorial Colophon */}
        <div className="mt-16 pt-8 border-t border-[#2B221B] flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[#7E7065]">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-white uppercase tracking-tight">
              THE HOUSE OF COFFEE
            </span>
            <span>•</span>
            <span>© {new Date().getFullYear()} All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#B3A69A] hover:text-[#C86D2D] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@thehouseofcoffeejaipur</span>
            </a>
            <span className="cursor-pointer text-[#B3A69A] hover:text-white" onClick={onOpenBooking}>
              Table Booking
            </span>
            <a href="#menu" className="text-[#B3A69A] hover:text-white">
              Roastery Tasting Menu
            </a>
          </div>

          <div>
            <span>Warm Brutalist Roastery &amp; Kinfolk Editorial • Jaipur</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
