export default function Amenities() {
  const amenities = [
    { title: 'Infinity Pool', description: 'Stunning rooftop pool with panoramic views' },
    { title: 'Spa & Wellness', description: 'Rejuvenate your body and mind' },
    { title: 'Fine Dining', description: 'Exquisite cuisine from world-renowned chefs' },
    { title: 'Fitness Center', description: 'State-of-the-art gym equipment' },
    { title: 'Sky Bar', description: 'Cocktails with breathtaking sunset views' },
    { title: 'Free WiFi', description: 'High-speed internet throughout the hotel' },
    { title: 'Valet Parking', description: 'Convenient parking service' },
    { title: 'Concierge', description: '24/7 personalized assistance' },
    { title: 'Laundry Service', description: 'Professional laundry and dry cleaning' },
    { title: 'Airport Transfer', description: 'Complimentary airport pickup' },
    { title: 'Business Center', description: 'Fully equipped meeting rooms' },
    { title: 'Babysitting', description: 'Professional childcare services' }
  ];

  return (
    <section id="amenities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-bold uppercase tracking-widest mb-2">Facilities</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">World-Class Amenities</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Enjoy our premium facilities designed for your comfort and relaxation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-20 h-20 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />}
                  {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                  {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                  {index === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M6 6h2m3 0h2m3 0h2m3 0h2" />}
                  {index === 5 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />}
                  {index === 6 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />}
                  {index === 7 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                  {index === 8 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />}
                  {index === 9 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />}
                  {index === 10 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                  {index === 11 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="/amenities" 
            className="inline-block bg-gold text-white px-8 py-3 rounded-full hover:bg-yellow-700 transition-colors"
          >
            View All Facilities
          </a>
        </div>
      </div>
    </section>
  );
}
