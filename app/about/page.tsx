'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BookingModal from '../../components/BookingModal';

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: 'Robert Johnson',
      position: 'General Manager',
      image: '/Robert.jpg',
      bio: 'With over 25 years in hospitality, Robert ensures every guest experience exceeds expectations.'
    },
    {
      name: 'Maria Santos',
      position: 'Guest Relations Director',
      image: '/maria.jpg',
      bio: 'Maria has been with Grand Horizon for 15 years, creating memorable experiences for our guests.'
    },
    {
      name: 'David Chen',
      position: 'Executive Chef',
      image: '/david.jpg',
      bio: 'Award-winning chef David brings international flavors to our restaurants with passion and creativity.'
    },
    {
      name: 'Jennifer Williams',
      position: 'Spa & Wellness Manager',
      image: '/Jennifer.jpg',
      bio: 'Jennifer leads our wellness team, ensuring every spa visit is a transformative experience.'
    }
  ];

  const milestones = [
    { year: '1999', title: 'Hotel Opens', description: 'Grand Horizon opens its doors to the public' },
    { year: '2005', title: 'First Award', description: 'Receives our first 5-star rating' },
    { year: '2012', title: 'Spa Addition', description: 'Opens our award-winning spa facility' },
    { year: '2018', title: 'Expansion', description: 'Adds 50 new luxury suites' },
    { year: '2024', title: '25th Anniversary', description: 'Celebrating 25 years of excellence' }
  ];

  const values = [
    { title: 'Excellence', description: 'We strive for excellence in everything we do' },
    { title: 'Integrity', description: 'Honesty and transparency in all our interactions' },
    { title: 'Guest First', description: 'Our guests are always our top priority' },
    { title: 'Sustainability', description: 'Committed to environmental responsibility' },
    { title: 'Teamwork', description: 'Together we achieve extraordinary results' }
  ];

  const awards = [
    { 
      title: '5-Star Diamond Award', 
      year: '2020-2024',
      svgPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    },
    { 
      title: 'Best Luxury Hotel', 
      year: '2023',
      svgPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
    },
    { 
      title: 'Excellence in Service', 
      year: '2022',
      svgPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
    },
    { 
      title: 'Traveler\'s Choice', 
      year: '2021-2024',
      svgPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  const galleryImages = [
    '/luxury.jpg',
    '/pool1.jpg',
    '/Spa1.jpg',
    '/bar1.jpg'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onBookNow={() => openBookingModal()} />
      
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Lobby.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl">Discover our story of luxury and hospitality</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-bold uppercase tracking-widest mb-2">Our Story</p>
              <h2 className="text-4xl font-serif font-bold mb-6">A Legacy of Luxury Since 1999</h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 1999, Grand Horizon began with a simple yet powerful vision: to create a sanctuary of luxury where every guest feels like royalty. What started as a small boutique hotel has grown into one of the most prestigious destinations in the region.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our journey has been marked by a relentless pursuit of perfection. Every detail, from the architecture to the amenities, has been carefully curated to provide an unparalleled experience of comfort and sophistication.
              </p>
              <p className="text-gray-600 text-lg">
                Today, Grand Horizon stands as a testament to our commitment to excellence. We continue to innovate and evolve, always staying true to our mission of creating unforgettable memories for our guests.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="h-64 bg-cover bg-center rounded-xl border-4 border-gold overflow-hidden hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="text-4xl font-serif font-bold mb-4">Milestones</h2>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0 w-24 h-24 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {milestone.year}
                </div>
                <div className="flex-1 py-4">
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold uppercase tracking-widest mb-2">Mission & Vision</p>
            <h2 className="text-4xl font-serif font-bold mb-4">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gold">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To create unforgettable experiences by providing exceptional service, luxurious accommodations, and genuine hospitality that makes every guest feel valued and cherished.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gold">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the world's most preferred luxury hotel brand, setting new standards in hospitality and creating lasting memories for our guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold uppercase tracking-widest mb-2">Our Values</p>
            <h2 className="text-4xl font-serif font-bold mb-4">Core Principles</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow">
                <h3 className="text-xl font-bold mb-3 text-gold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold uppercase tracking-widest mb-2">Meet the Team</p>
            <h2 className="text-4xl font-serif font-bold mb-4">The People Behind Grand Horizon</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our dedicated team of professionals works tirelessly to ensure your stay is nothing short of perfect.
            </p>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex-shrink-0 w-75 snap-start bg-white rounded-xl overflow-hidden shadow-lg text-center hover:shadow-xl transition-shadow border-4 border-gold">
                <div className="h-64">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.name === 'David Chen' ? 'object-center' : 'object-top'}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gold font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-bold uppercase tracking-widest mb-2">Recognition</p>
            <h2 className="text-4xl font-serif font-bold mb-4">Awards & Accolades</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center p-8 bg-white/10 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={award.svgPath} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-white/80">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={closeBookingModal} 
        roomName={selectedRoom} 
      />
    </div>
  );
}
