import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Coffee, MessageCircle, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { OUTLETS, getWhatsAppOrderUrl } from '../data/outletsData';

export default function BookingModal({ isOpen, onClose, defaultOutlet = 'vaishali' }) {
  const [outlet, setOutlet] = useState(defaultOutlet);
  const [orderType, setOrderType] = useState('Dine-In Table');
  const [zone, setZone] = useState('Amber Library & Game Shelf');
  const [date, setDate] = useState('Today');
  const [time, setTime] = useState('05:00 PM (Golden Hour)');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const currentOutletData = OUTLETS[outlet] || OUTLETS.vaishali;

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = 'THC-' + Math.floor(1000 + Math.random() * 9000);
    setBookingCode(code);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C97A2B', '#5F7A52', '#1C140F', '#F0B369'],
      });
    } catch (err) {
      // ignore
    }
  };

  const getWhatsAppSummaryUrl = () => {
    const text =
      `Hi The House of Coffee (${currentOutletData.name})!\n` +
      `I would like to confirm my ${orderType} reservation:\n\n` +
      `🎫 Code: ${bookingCode}\n` +
      `👤 Name: ${name || 'Guest'}\n` +
      `📞 Phone: ${phone || 'Not provided'}\n` +
      `📍 Outlet: ${currentOutletData.name} (${currentOutletData.shortAddress})\n` +
      `🪑 Zone / Type: ${zone}\n` +
      `📅 Date & Time: ${date} at ${time}\n` +
      `👥 Guests: ${guests}\n` +
      (notes ? `📝 Special Note: ${notes}\n` : '');

    return `https://wa.me/${currentOutletData.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-[#F7F3EB] rounded-3xl border border-[#221814]/12 shadow-2xl overflow-hidden my-auto">
        
        {/* Header Strip */}
        <div className="bg-[#1C140F] text-[#F7F3EB] p-6 sm:p-7 relative">
          <button
            type="button"
            onClick={resetAndClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#C97A2B] mb-1">
            <Coffee className="w-3.5 h-3.5" />
            <span>The House of Coffee • Jaipur</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#F7F3EB]">
            Order Ahead or Reserve a Table
          </h3>
          <p className="text-xs sm:text-sm text-[#B3A69A] mt-1">
            Zero booking fees. Warm wooden corners and specialty extractions ready when you arrive.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Outlet Selection */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-[#1C140F] block">
                  1. Choose Outlet
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOutlet('vaishali')}
                    className={`btn-press p-3 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      outlet === 'vaishali'
                        ? 'bg-[#1C140F] text-white border-[#1C140F] shadow-sm'
                        : 'bg-white text-[#1C140F] border-[#221814]/10 hover:bg-[#EFE9DD]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#C97A2B]" />
                      <span className="text-xs font-bold">Vaishali Nagar</span>
                    </div>
                    <span className="text-[10px] opacity-80 leading-tight">Amber Book Wall &amp; Games</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOutlet('cscheme')}
                    className={`btn-press p-3 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      outlet === 'cscheme'
                        ? 'bg-[#1C140F] text-white border-[#1C140F] shadow-sm'
                        : 'bg-white text-[#1C140F] border-[#221814]/10 hover:bg-[#EFE9DD]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#5F7A52]" />
                      <span className="text-xs font-bold">C-Scheme</span>
                    </div>
                    <span className="text-[10px] opacity-80 leading-tight">Sunlit Balcony Patio</span>
                  </button>
                </div>
              </div>

              {/* Order Mode & Seating Zone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#1C140F] block">
                    2. Experience Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Dine-In Table', 'Takeaway Pickup'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setOrderType(type)}
                        className={`btn-press py-2 px-3 text-xs rounded-xl font-semibold border text-center transition-all cursor-pointer ${
                          orderType === type
                            ? 'bg-[#C97A2B] text-white border-[#C97A2B]'
                            : 'bg-white text-[#1C140F] border-[#221814]/10 hover:bg-[#EFE9DD]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#1C140F] block">
                    3. Guests
                  </label>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#221814]/10">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="btn-press w-9 h-9 rounded-lg bg-[#F7F3EB] hover:bg-[#EFE9DD] text-[#1C140F] font-bold flex items-center justify-center border border-[#221814]/10 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-[#1C140F]">
                      {guests} {guests === 1 ? 'Guest' : 'Guests'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(12, guests + 1))}
                      className="btn-press w-9 h-9 rounded-lg bg-[#F7F3EB] hover:bg-[#EFE9DD] text-[#1C140F] font-bold flex items-center justify-center border border-[#221814]/10 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Seating Atmosphere Preference */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-[#1C140F] block">
                  4. Preferred Corner
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    'Amber Library Shelf',
                    'Balcony Outdoor Patio',
                    'Work Table with Plugs',
                  ].map((z) => (
                    <button
                      key={z}
                      type="button"
                      onClick={() => setZone(z)}
                      className={`btn-press p-2 rounded-xl text-[11px] font-medium border text-center transition-all cursor-pointer ${
                        zone === z
                          ? 'bg-[#1C140F] text-[#F0B369] border-[#1C140F] font-bold'
                          : 'bg-white text-[#55473E] border-[#221814]/10 hover:bg-[#EFE9DD]'
                      }`}
                    >
                      {z}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#1C140F] uppercase tracking-wider block">
                    Date
                  </label>
                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#221814]/10 text-xs text-[#1C140F] focus:outline-none"
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Saturday">This Saturday</option>
                    <option value="This Sunday">This Sunday</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#1C140F] uppercase tracking-wider block">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#221814]/10 text-xs text-[#1C140F] focus:outline-none"
                  >
                    <option value="09:00 AM (Morning Brew)">09:00 AM (Morning Brew)</option>
                    <option value="12:30 PM (Midday Break)">12:30 PM (Midday Break)</option>
                    <option value="03:30 PM (Afternoon Read)">03:30 PM (Afternoon Read)</option>
                    <option value="05:00 PM (Golden Hour)">05:00 PM (Golden Hour)</option>
                    <option value="07:30 PM (Evening Lounge)">07:30 PM (Evening Lounge)</option>
                    <option value="09:30 PM (Late Night)">09:30 PM (Late Night)</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2 border-t border-[#221814]/8">
                <label className="text-xs uppercase tracking-wider font-bold text-[#1C140F] block">
                  5. Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-[#221814]/12 focus:outline-none focus:border-[#C97A2B]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-[#221814]/12 focus:outline-none focus:border-[#C97A2B]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Special requests or coffee grind method (Optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-[#221814]/12 focus:outline-none focus:border-[#C97A2B]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-press w-full py-3.5 px-6 rounded-2xl bg-[#1C140F] hover:bg-[#2F221B] text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#C97A2B]" />
                  <span>Confirm Reservation ({currentOutletData.name})</span>
                </button>
                <p className="text-[11px] text-center text-[#7E7065] mt-2">
                  No payment required • We hold tables for 15 minutes past arrival time
                </p>
              </div>

            </form>
          ) : (
            /* Ticket Confirmation */
            <div className="py-6 space-y-6 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9 stroke-[2]" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C97A2B]">
                  Confirmed Booking
                </span>
                <h4 className="font-serif text-3xl font-semibold text-[#1C140F]">
                  See You Soon, {name || 'Guest'}!
                </h4>
                <p className="text-xs text-[#7E7065]">
                  Your table reservation has been generated for {currentOutletData.name}.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#221814]/10 shadow-xs text-left space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#221814]/8">
                  <div>
                    <span className="text-[10px] uppercase text-[#7E7065] block font-bold">Booking Code</span>
                    <strong className="text-base font-serif text-[#1C140F]">{bookingCode}</strong>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#F7F3EB] text-[#C97A2B]">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#7E7065] block">Outlet</span>
                    <strong className="text-[#1C140F]">{currentOutletData.name}</strong>
                  </div>
                  <div>
                    <span className="text-[#7E7065] block">When</span>
                    <strong className="text-[#1C140F]">{date}, {time}</strong>
                  </div>
                  <div>
                    <span className="text-[#7E7065] block">Atmosphere</span>
                    <strong className="text-[#1C140F]">{zone}</strong>
                  </div>
                  <div>
                    <span className="text-[#7E7065] block">Party Size</span>
                    <strong className="text-[#1C140F]">{guests} Guests</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={getWhatsAppSummaryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Ticket to {currentOutletData.name} WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="btn-press text-xs font-semibold text-[#7E7065] hover:text-[#1C140F] underline underline-offset-4 cursor-pointer"
                >
                  Close &amp; Return to Page
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
