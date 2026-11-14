import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoasteryLookbook from './components/RoasteryLookbook';
import SpecialtyMenuBar from './components/SpecialtyMenuBar';
import OutletsDirectoryFooter from './components/OutletsDirectoryFooter';
import BookingModal from './components/BookingModal';
import QrSimulatorModal from './components/QrSimulatorModal';
import PhotoLightbox from './components/PhotoLightbox';

export default function App() {
  const [activeOutlet, setActiveOutlet] = useState('vaishali');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    image: '',
    title: '',
    description: '',
  });

  const handleOpenLightbox = (image, title, description) => {
    setLightboxData({
      isOpen: true,
      image,
      title,
      description,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#17120E] font-sans selection:bg-[#C86D2D]/20 selection:text-[#17120E]">
      
      {/* 1. Ultra-Clean Single-Line Header (Strict Single-Row h-16) */}
      <Navbar
        activeOutlet={activeOutlet}
        onOutletChange={setActiveOutlet}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* 2. Full-Width Architectural Editorial Hero (Swiss Grid + 21:9 Split-Frame Gallery Strip) */}
        <Hero
          activeOutlet={activeOutlet}
          onOutletChange={setActiveOutlet}
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 3. Numbered Editorial Lookbook (01 Amber Library, 02 Pâtisserie, 03 Balcony Deck) */}
        <RoasteryLookbook
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 4. Roaster's Tasting Menu & Bean Bar (#17120E) */}
        <SpecialtyMenuBar
          onOpenQr={() => setIsQrOpen(true)}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      {/* 5. Split-Screen Two-Outlet Directory & Live Map Footer */}
      <OutletsDirectoryFooter
        activeOutlet={activeOutlet}
        onOutletChange={setActiveOutlet}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Modals & Interactive Overlays */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultOutlet={activeOutlet}
      />

      <QrSimulatorModal
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
        activeOutlet={activeOutlet}
      />

      <PhotoLightbox
        isOpen={lightboxData.isOpen}
        onClose={handleCloseLightbox}
        image={lightboxData.image}
        title={lightboxData.title}
        description={lightboxData.description}
      />

    </div>
  );
}
