import React, { useState } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import { Coffee, QrCode, ArrowUpRight, Package, Check, Plus, Sparkles } from 'lucide-react';

export default function SpecialtyMenuBar({ onOpenQr, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('espresso');
  const [tabItems, setTabItems] = useState({});

  const handleToggleAdd = (id) => {
    setTabItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentItems = menuItems[activeCategory] || [];

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#17120E] text-[#F4EFE6] border-b border-[#2B221B] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="border-b border-[#2B221B] pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C86D2D] font-bold block mb-1">
              ROASTERY SPECIFICATIONS &amp; TASTING FLIGHTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F4EFE6]">
              TASTING MENU &amp; <span className="italic text-[#C86D2D]">BEAN BAR.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#B3A69A] max-w-md leading-relaxed uppercase">
            Ethically sourced from high-altitude estates in Chikmagalur &amp; Baba Budan Giri. Roasted weekly in small batches.
          </p>
        </div>

        {/* Split Layout: Left Sticky Column + Right Menu Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sticky Column: Category Selector & QR Table Preview */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            {/* Category Navigation Stack */}
            <div className="border border-[#2B221B] bg-[#201914] p-3 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B3A69A] px-3 py-2 block font-bold">
                SELECT BREW DISCIPLINE
              </span>
              {menuCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`btn-press w-full text-left px-4 py-3 text-xs font-mono uppercase tracking-wider font-semibold rounded flex items-center justify-between transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#C86D2D] text-white'
                        : 'text-[#B3A69A] hover:text-white hover:bg-[#2B221B]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? 'bg-black/20 text-white' : 'bg-[#2B221B] text-[#7E7065]'}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Roastery Spec Callout */}
            <div className="border border-[#2B221B] bg-[#201914] p-5 space-y-3 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#C86D2D] font-bold block">
                ROAST PROFILE STANDARD
              </span>
              <div className="space-y-1 text-[#B3A69A]">
                <p>• Elevation: 1,200 – 1,450 MASL</p>
                <p>• Extraction Temp: 92.5°C Manual</p>
                <p>• Milk Standard: Steamed Oat &amp; Whole</p>
                <p>• Ceremonial Matcha: First-Harvest Uji</p>
              </div>
            </div>

            {/* QR Table Menu Modal Button */}
            <div className="border border-[#2B221B] bg-[#201914] p-5 space-y-3">
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-[#C86D2D]" />
                <span className="font-mono text-xs uppercase font-bold text-white">
                  Table QR Simulator
                </span>
              </div>
              <p className="text-xs text-[#B3A69A] leading-relaxed">
                Preview the live contactless phone menu scanned by table guests across our library and balcony booths.
              </p>
              <button
                type="button"
                onClick={onOpenQr}
                className="btn-press w-full py-2.5 px-4 bg-[#F4EFE6] hover:bg-white text-[#17120E] font-mono text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Launch Table QR View</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C86D2D]" />
              </button>
            </div>

          </div>

          {/* Right Column: Structured Coffee-House Menu Rows */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Rows Header */}
            <div className="flex items-center justify-between font-mono text-xs text-[#B3A69A] uppercase tracking-wider pb-3 border-b border-[#2B221B]">
              <span>Craft Offering &amp; Tasting Notes</span>
              <span>Extraction • Price</span>
            </div>

            {/* Item Rows */}
            <div className="divide-y divide-[#2B221B] border border-[#2B221B] bg-[#201914]">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 hover:bg-[#271E18] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="space-y-1.5 max-w-xl">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#F0A569] px-2 py-0.5 bg-[#C86D2D]/20 rounded border border-[#C86D2D]/30">
                        {item.tag}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl text-white group-hover:text-[#F0A569] transition-colors">
                        {item.name}
                      </h4>
                    </div>

                    <p className="text-xs text-[#B3A69A] leading-relaxed">
                      {item.description}
                    </p>

                    {item.notes && (
                      <p className="font-mono text-[11px] text-[#C86D2D]">
                        ↳ Tasting Notes: {item.notes}
                      </p>
                    )}

                    {item.shelfLocation && (
                      <p className="font-mono text-[10px] text-[#6E9462]">
                        📍 {item.shelfLocation}
                      </p>
                    )}
                  </div>

                  {/* Price & Add Button */}
                  <div className="flex items-center gap-4 shrink-0 self-end sm:self-center">
                    <div className="text-right font-mono">
                      <span className="text-base sm:text-lg font-bold text-white block">
                        {item.price}
                      </span>
                      <span className="text-[10px] text-[#7E7065] uppercase">
                        {item.temp || item.fresh || 'In-House'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleAdd(item.id)}
                      className={`btn-press p-2 rounded border transition-colors cursor-pointer ${
                        tabItems[item.id]
                          ? 'bg-[#4F6D46] border-[#4F6D46] text-white'
                          : 'bg-[#2B221B] border-[#3D2F24] text-[#F4EFE6] hover:border-[#C86D2D]'
                      }`}
                      title="Add to Tasting Tab"
                    >
                      {tabItems[item.id] ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#C86D2D]" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Whole Beans & Brew Gear Shelf Showcase Banner */}
            <div className="mt-8 p-6 sm:p-8 bg-[#201914] border border-[#2B221B] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C86D2D] font-bold block">
                  RETAIL ROASTERY SHELVES
                </span>
                <h4 className="font-serif text-2xl font-semibold text-white">
                  Take Home Whole Beans &amp; Pour-Over Gear
                </h4>
                <p className="text-xs text-[#B3A69A] max-w-lg leading-relaxed">
                  Bags of Ratnagiri Arabica, Attikan dark roast, and authentic Hario V60 ceramic drippers displayed on our Amber Library shelves can be ordered ahead for pickup.
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="btn-press px-5 py-3 bg-[#C86D2D] hover:bg-[#B35E22] text-white font-mono text-xs uppercase tracking-wider font-bold rounded transition-colors whitespace-nowrap cursor-pointer"
              >
                Pre-Order Whole Beans
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
