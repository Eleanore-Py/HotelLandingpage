'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Rooms from '../components/Rooms';
import SpecialOffer from '../components/SpecialOffer';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>();

  const openBookingModal = (roomName?: string) => {
    setSelectedRoom(roomName);
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(undefined);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onBookNow={() => openBookingModal()} />
      <Hero onBookNow={() => openBookingModal()} />
      <About />
      <Stats />
      <Rooms onBookNow={openBookingModal} />
      <SpecialOffer onBookNow={() => openBookingModal()} />
      <Amenities />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={closeBookingModal} 
        roomName={selectedRoom} 
      />
    </div>
  );
}
