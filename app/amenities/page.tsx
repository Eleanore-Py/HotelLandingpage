'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BookingModal from '../../components/BookingModal';

export default function AmenitiesPage() {
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

  const amenities = [
    {
      title: 'Infinity Pool',
      description: 'Stunning rooftop pool with panoramic views',
      image: '/pool1.jpg',
      fullDescription: 'Our stunning infinity pool is located on the rooftop, offering breathtaking panoramic views of the city skyline and ocean. Open daily from 6 AM to 10 PM, enjoy swimming while watching the sunset or relax on our comfortable lounge chairs with a refreshing drink from the pool bar.',
      hours: '6:00 AM - 10:00 PM',
      location: 'Rooftop, 15th Floor',
      svgPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
    },
    {
      title: 'Spa & Wellness',
      description: 'Rejuvenate your body and mind',
      image: '/Spa1.jpg',
      fullDescription: 'Experience ultimate relaxation at our award-winning spa. Our skilled therapists offer a range of treatments including massages, facials, and body scrubs using premium organic products. We also feature a sauna, steam room, and jacuzzi for complete rejuvenation.',
      hours: '9:00 AM - 9:00 PM',
      location: 'Ground Floor, Spa Wing',
      svgPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      title: 'Fine Dining',
      description: 'Exquisite cuisine from world-renowned chefs',
      image: '/bar1.jpg',
      fullDescription: 'Indulge in culinary excellence at our five restaurants. From authentic local cuisine to international gourmet dishes, our award-winning chefs create memorable dining experiences. Enjoy romantic dinners, business lunches, or casual meals in our elegant settings.',
      hours: 'Various Hours by Restaurant',
      location: 'Multiple Locations',
      svgPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Fitness Center',
      description: 'State-of-the-art gym equipment',
      image: '/FC.jpg',
      fullDescription: 'Stay fit during your stay at our 24-hour fitness center. Equipped with the latest cardio and strength training equipment from leading brands. Personal training sessions are available upon request.',
      hours: '24 Hours',
      location: '2nd Floor',
      svgPath: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Sky Bar',
      description: 'Cocktails with breathtaking sunset views',
      image: '/Skybar.jpg',
      fullDescription: 'Our signature Sky Bar offers the perfect setting to enjoy craft cocktails and premium spirits while taking in spectacular sunset views. Live music on weekends creates the perfect ambiance for an unforgettable evening.',
      hours: '5:00 PM - 1:00 AM',
      location: 'Rooftop, 15th Floor',
      svgPath: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M6 6h2m3 0h2m3 0h2m3 0h2'
    },
    {
      title: 'Free WiFi',
      description: 'High-speed internet throughout the hotel',
      image: '/FW.jpg',
      fullDescription: 'Stay connected with complimentary high-speed WiFi available throughout the entire hotel, including all guest rooms, restaurants, meeting spaces, and public areas. No login required - just connect and enjoy.',
      hours: '24/7',
      location: 'Throughout the Hotel',
      svgPath: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'
    },
    {
      title: 'Valet Parking',
      description: 'Convenient parking service',
      image: '/valet.jpg',
      fullDescription: 'Our professional valet team is ready to assist you with parking upon arrival. Complimentary valet parking is available for all guests during their stay. Electric vehicle charging stations are also available.',
      hours: '24 Hours',
      location: 'Main Entrance',
      svgPath: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
    },
    {
      title: 'Concierge',
      description: '24/7 personalized assistance',
      image: '/e.jpg',
      fullDescription: 'Our knowledgeable concierge team is available 24/7 to assist with restaurant reservations, tour bookings, transportation arrangements, event tickets, and any other special requests to make your stay perfect.',
      hours: '24 Hours',
      location: 'Lobby Level',
      svgPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    },
    {
      title: 'Laundry Service',
      description: 'Professional laundry and dry cleaning',
      image: '/Laundy.jpg',
      fullDescription: 'Take advantage of our professional laundry and dry cleaning services. Same-day service is available for items received before 10 AM. Our team ensures your clothes receive the utmost care.',
      hours: '8:00 AM - 8:00 PM',
      location: 'Guest Services',
      svgPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      title: 'Airport Transfer',
      description: 'Complimentary airport pickup',
      image: '/Taxi.jpg',
      fullDescription: 'Enjoy complimentary airport transfers in our luxury vehicles. Available for all guests staying 3 nights or more. Advance reservation is required to ensure availability.',
      hours: '24 Hours (by reservation)',
      location: 'Airport Services',
      svgPath: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },
    {
      title: 'Business Center',
      description: 'Fully equipped meeting rooms',
      image: '/Business.jpg',
      fullDescription: 'Our state-of-the-art business center offers fully equipped meeting rooms, video conferencing facilities, printing, scanning, and secretarial services. Perfect for business meetings and conferences.',
      hours: '7:00 AM - 11:00 PM',
      location: '3rd Floor',
      svgPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      title: 'Babysitting',
      description: 'Professional childcare services',
      image: '/baby.jpg',
      fullDescription: 'Enjoy your evening knowing your children are in good hands with our professional, certified babysitters. Available upon request with advance booking. Activities and games provided.',
      hours: 'On Request',
      location: 'Guest Services',
      svgPath: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onBookNow={() => openBookingModal()} />
      
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/pool1.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Facilities</h1>
          <p className="text-xl">World-class amenities for your comfort and enjoyment</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold uppercase tracking-widest mb-2">Experience</p>
            <h2 className="text-4xl font-serif font-bold mb-4">Premium Facilities</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our extensive range of world-class amenities designed to make your stay truly exceptional.
            </p>
          </div>
          
          <div className="space-y-12">
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div 
                    className="h-80 md:h-96 bg-cover bg-center rounded-2xl shadow-xl border-4 border-gold"
                    style={{ backgroundImage: `url(${amenity.image})` }}
                  ></div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="w-16 h-16 mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={amenity.svgPath} />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4">{amenity.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{amenity.fullDescription}</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Hours</div>
                      <div className="font-bold">{amenity.hours}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <div className="font-bold">{amenity.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Experience It?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Book your stay today and enjoy all our premium facilities.
          </p>
          <button 
            onClick={() => openBookingModal()}
            className="bg-gold text-white px-10 py-4 rounded-full text-lg hover:bg-yellow-700 transition-all"
          >
            Book Your Stay
          </button>
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
