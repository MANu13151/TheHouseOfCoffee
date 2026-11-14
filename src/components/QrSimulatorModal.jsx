import React, { useState } from 'react';
import { X, QrCode, Smartphone, Bell, Search, Plus, Check, Coffee, Sparkles } from 'lucide-react';
import { menuItems } from '../data/menuData';

export default function QrSimulatorModal({ isOpen, onClose, activeOutlet = 'vaishali' }) {
  const [tableNumber, setTableNumber] = useState('Table 03 (Amber Bookshelf)');
  const [activeTab, setActiveTab] = useState('espresso');
  const [searchQuery, setSearchQuery] = useState('');
  const [tabItems, setTabItems] = useState({});
  const [notification, setNotification] = useState('');

  if (!isOpen) return null;

  const currentCategoryItems = menuItems[activeTab] || [];
  const filteredItems = currentCategoryItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddItem = (item) => {
    setTabItems((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
    triggerNotice(`Added ${item.name} to Table Tab`);
  };

  const handleCallServer = () => {
    triggerNotice(`Barista staff alerted for ${tableNumber}!`);
  };

  const triggerNotice = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification('');
    }, 2800);
  };

  const totalItemsCount = Object.values(tabItems).reduce((a, b) => a + b, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#F7F3EB] rounded-3xl border border-[#221814]/12 shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
          aria-label="Close QR simulator"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Table Stand QR Stand */}
        <div className="md:w-5/12 bg-[#1C140F] text-[#F7F3EB] p-6 flex flex-col justify-between border-r border-[#3D2F24]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#271E17] border border-[#3D2F24] text-[10px] font-bold text-[#F0B369] tracking-widest uppercase">
              <QrCode className="w-3.5 h-3.5 text-[#C97A2B]" />
              <span>Contactless Dining</span>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#F7F3EB]">
                Table Stand QR
              </h3>
              <p className="text-xs text-[#B3A69A] mt-1 leading-relaxed">
                Replaces traditional paper menus with instant zero-friction phone ordering.
              </p>
            </div>

            {/* Brass Stand QR Code Graphic */}
            <div className="bg-white p-4 rounded-2xl mx-auto w-48 text-center shadow-lg border border-[#3D2F24]">
              <div className="w-38 h-38 mx-auto bg-[#1C140F] p-2 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                  <path d="M0,0 h30 v30 h-30 z M6,6 v18 h18 v-18 z M10,10 h10 v10 h-10 z" />
                  <path d="M70,0 h30 v30 h-30 z M76,6 v18 h18 v-18 z M80,10 h10 v10 h-10 z" />
                  <path d="M0,70 h30 v30 h-30 z M6,76 v18 h18 v-18 z M10,80 h10 v10 h-10 z" />
                  <circle cx="50" cy="50" r="12" fill="#C97A2B" />
                  <rect x="44" y="10" width="8" height="20" fill="white" />
                  <rect x="70" y="44" width="20" height="8" fill="white" />
                  <rect x="42" y="72" width="16" height="8" fill="white" />
                  <rect x="15" y="44" width="18" height="8" fill="white" />
                  <rect x="68" y="70" width="12" height="12" fill="white" />
                  <rect x="84" y="84" width="8" height="8" fill="white" />
                </svg>
              </div>
              <p className="text-[10px] text-[#1C140F] font-serif font-bold mt-2">
                SCAN FOR MENU &amp; WI-FI
              </p>
              <p className="text-[9px] text-[#7E7065]">The House of Coffee • Jaipur</p>
            </div>

            {/* Table Selection */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#B3A69A]">
                Simulate Table Position:
              </label>
              <select
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="w-full px-3 py-2 bg-[#271E17] text-xs text-[#F7F3EB] rounded-xl border border-[#3D2F24] focus:outline-none"
              >
                <option value="Table 03 (Amber Bookshelf)">Table 03 • Amber Bookshelf</option>
                <option value="Table 07 (Teakwood Work Area)">Table 07 • Teakwood Work Table</option>
                <option value="Table 12 (Balcony Patio)">Table 12 • Balcony Patio</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-[#3D2F24] space-y-2">
            <button
              type="button"
              onClick={handleCallServer}
              className="btn-press w-full py-2.5 px-3 rounded-xl bg-[#C97A2B] hover:bg-[#B36821] text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Simulate "Call Barista"</span>
            </button>
            <p className="text-[10px] text-center text-[#8C7D70]">
              Instant mobile browser load
            </p>
          </div>
        </div>

        {/* Right Column: Simulated Mobile Web App Interface */}
        <div className="md:w-7/12 p-5 sm:p-6 flex flex-col justify-between bg-white max-h-[82vh] overflow-y-auto">
          
          {/* Top Mobile Header */}
          <div className="space-y-3 pb-3 border-b border-[#221814]/8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#C97A2B] block">
                  Active Guest Session
                </span>
                <h4 className="font-serif text-lg font-bold text-[#1C140F] leading-tight">
                  {tableNumber}
                </h4>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F7F3EB] border border-[#221814]/10 text-xs text-[#1C140F] font-semibold">
                <Smartphone className="w-3 h-3 text-[#C97A2B]" />
                <span>Guest Phone</span>
              </div>
            </div>

            {/* In-Menu Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#7E7065]" />
              <input
                type="text"
                placeholder="Search brews, matcha, bakes, beans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#F7F3EB] rounded-xl border border-[#221814]/10 focus:outline-none focus:border-[#C97A2B]"
              />
            </div>

            {/* Category tabs */}
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {[
                { id: 'espresso', label: 'Espresso' },
                { id: 'matcha-cold', label: 'Matcha & Cold' },
                { id: 'bakes', label: 'Bakes' },
                { id: 'beans-gear', label: 'Whole Beans' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`btn-press px-3 py-1 rounded-full text-[11px] font-semibold transition-colors shrink-0 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#1C140F] text-white'
                      : 'bg-[#F7F3EB] text-[#7E7065] hover:text-[#1C140F]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Toast Notification Alert */}
          {notification && (
            <div className="my-2 p-2.5 rounded-xl bg-[#1C140F] text-white text-xs flex items-center justify-between shadow-md animate-fadeIn">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F0B369]" />
                {notification}
              </span>
              <span className="text-[10px] text-[#B3A69A]">Just now</span>
            </div>
          )}

          {/* Dish / Drink list */}
          <div className="space-y-3 py-3 flex-1 overflow-y-auto">
            {filteredItems.length === 0 ? (
              <p className="text-xs text-center text-[#7E7065] py-8">
                No items match your search.
              </p>
            ) : (
              filteredItems.map((item) => {
                const count = tabItems[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-[#F7F3EB] border border-[#221814]/8 flex items-center justify-between gap-3 hover:border-[#C97A2B]/40 transition-colors"
                  >
                    <div className="space-y-0.5 max-w-[70%]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#C97A2B] shrink-0" />
                        <h5 className="font-serif text-sm font-semibold text-[#1C140F]">
                          {item.name}
                        </h5>
                      </div>
                      <p className="text-[10px] text-[#7E7065] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-xs font-bold text-[#C97A2B] pt-0.5">
                        {item.price}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddItem(item)}
                      className={`btn-press px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                        count > 0
                          ? 'bg-[#5F7A52] text-white'
                          : 'bg-white text-[#1C140F] border border-[#221814]/15 hover:bg-[#1C140F] hover:text-white'
                      }`}
                    >
                      {count > 0 ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>{count}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom Table Order Status Bar */}
          <div className="pt-3 border-t border-[#221814]/8 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase font-bold text-[#7E7065]">Table Tab</p>
              <p className="text-xs font-bold text-[#1C140F]">
                {totalItemsCount} {totalItemsCount === 1 ? 'Item' : 'Items'} Selected
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                if (totalItemsCount === 0) {
                  triggerNotice('Please add items to send to the barista bar');
                } else {
                  triggerNotice(`Order for ${totalItemsCount} items dispatched to brew bar!`);
                }
              }}
              className="btn-press px-4 py-2 rounded-xl bg-[#1C140F] hover:bg-[#2F221B] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              Send to Brew Bar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
