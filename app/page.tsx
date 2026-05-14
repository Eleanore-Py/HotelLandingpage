export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-serif font-bold text-gold">
              Grand Horizon
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-gold transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-gold transition-colors">About</a>
              <a href="#rooms" className="text-gray-700 hover:text-gold transition-colors">Rooms</a>
              <a href="#amenities" className="text-gray-700 hover:text-gold transition-colors">Amenities</a>
              <a href="#gallery" className="text-gray-700 hover:text-gold transition-colors">Gallery</a>
              <a href="#testimonials" className="text-gray-700 hover:text-gold transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-gold transition-colors">Contact</a>
              <button className="bg-gold text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Lobby.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4" style={{ textShadow: '0 24px 70px rgba(0,0,0,0.95)' }}>
          <p className="text-lg md:text-xl mb-2 tracking-widest uppercase">Welcome to</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
            Grand Horizon
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Experience luxury and comfort in the heart of paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-white px-8 py-3 rounded-full text-lg hover:bg-yellow-700 transition-all transform hover:scale-105">
              Explore Rooms
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="h-64 bg-cover bg-center rounded-xl"
                  style={{
                    backgroundImage: 'url(/kamar1.jpg)'
                  }}
                ></div>
                <div 
                  className="h-64 bg-cover bg-center rounded-xl mt-8"
                  style={{
                    backgroundImage: 'url(/pool1.jpg)'
                  }}
                ></div>
                <div 
                  className="h-64 bg-cover bg-center rounded-xl -mt-8"
                  style={{
                    backgroundImage: 'url(/bar1.jpg)'
                  }}
                ></div>
                <div 
                  className="h-64 bg-cover bg-center rounded-xl"
                  style={{
                    backgroundImage: 'url(/Spa1.jpg)'
                  }}
                ></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-xl flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gold font-bold uppercase tracking-widest mb-2">About Us</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">A Legacy of Luxury Hospitality</h2>
              <p className="text-gray-600 text-lg mb-6">
                Since 1999, Grand Horizon has been the epitome of luxury and sophistication. Nestled in the most desirable location, our hotel offers an unparalleled experience of comfort, elegance, and world-class service.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Every detail has been meticulously crafted to ensure your stay is nothing short of extraordinary. From our opulent rooms to our award-winning restaurants, we invite you to discover the Grand Horizon difference.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">150+</div>
                  <div className="text-gray-600">Luxury Rooms</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">5</div>
                  <div className="text-gray-600">Restaurants</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">10k+</div>
                  <div className="text-gray-600">Happy Guests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            {[
              { number: '5.0', label: 'Guest Rating' },
              { number: '45+', label: 'Awards Won' },
              { number: '24/7', label: 'Concierge Service' },
              { number: 'Free', label: 'Airport Transfer' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    {index === 0 && <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />}
                    {index === 1 && <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z" />}
                    {index === 2 && <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />}
                    {index === 3 && <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />}
                  </svg>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold uppercase tracking-widest mb-2">Accommodations</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Luxury Rooms</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our selection of elegantly designed rooms and suites
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Deluxe King Room', 
                price: '$199', 
                description: 'Spacious room with king bed, city view, and modern amenities',
                size: '45 m²',
                guests: '2 Adults',
                image: '/kingbed.jpg' 
              },
              { 
                name: 'Executive Suite', 
                price: '$349', 
                description: 'Premium suite with separate living area, balcony, and panoramic views',
                size: '75 m²',
                guests: '2 Adults',
                image: '/premium.jpg' 
              },
              { 
                name: 'Presidential Suite', 
                price: '$599', 
                description: 'Ultimate luxury with private terrace, jacuzzi, and butler service',
                size: '150 m²',
                guests: '4 Adults',
                image: '/luxury.jpg' 
              }
            ].map((room, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${room.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">{room.name}</h3>
                  <div className="flex gap-6 mb-4 text-sm text-gray-500">
                    <span>📏 {room.size}</span>
                    <span>👥 {room.guests}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gold">{room.price}<span className="text-sm text-gray-500">/night</span></span>
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gold transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Special Offer</h2>
          <p className="text-xl mb-8 text-gray-300">Book now and get 30% off your stay! Limited time offer.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex gap-4">
              {[
                { label: 'Days', value: '15' },
                { label: 'Hours', value: '08' },
                { label: 'Minutes', value: '45' },
                { label: 'Seconds', value: '30' }
              ].map((time, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold">{time.value}</div>
                  <div className="text-sm text-gray-400">{time.label}</div>
                </div>
              ))}
            </div>
            <button className="bg-gold text-white px-8 py-4 rounded-full text-lg hover:bg-yellow-700 transition-all">
              Claim Offer
            </button>
          </div>
        </div>
      </section>

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
            {[
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
            ].map((amenity, index) => (
              <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="w-20 h-20 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />}
                    {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                    {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                    {index === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M6 6h2m3 0h2m3 0h2m3 0h2" />}
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
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold uppercase tracking-widest mb-2">Explore</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Gallery</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take a visual journey through our luxurious hotel
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/ps1.jpg',
              '/ps2.jpg',
              '/ps3.jpg',
              '/ps4.jpg',
              '/ps5.jpg',
              '/ps6.jpg',
              '/ps7.jpg',
              '/Lobby.jpg'
            ].map((image, index) => (
              <div 
                key={index} 
                className={`h-48 md:h-64 bg-cover bg-center rounded-xl hover:scale-105 transition-transform cursor-pointer ${index === 0 || index === 7 ? 'col-span-2' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Guests Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our valued guests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                location: 'New York, USA',
                rating: 5,
                image: '/sarah.jpg',
                quote: 'An absolutely incredible experience! The service was impeccable and the room was beyond luxurious. Will definitely be coming back!'
              },
              {
                name: 'Michael Chen',
                location: 'Singapore',
                rating: 5,
                image: '/Michael.jpg',
                quote: 'Best hotel I have ever stayed in. The attention to detail is remarkable. The rooftop pool and bar are simply breathtaking.'
              },
              {
                name: 'Emma Williams',
                location: 'London, UK',
                rating: 5,
                image: '/Emma.jpg',
                quote: 'Perfect stay from start to finish. The spa treatments were divine and the restaurants served the most delicious food. Highly recommend!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  ></div>
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { question: 'What time is check-in and check-out?', answer: 'Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request.' },
              { question: 'Is parking available at the hotel?', answer: 'Yes, we offer complimentary valet parking for all our guests during their stay.' },
              { question: 'Do you have Wi-Fi?', answer: 'Complimentary high-speed Wi-Fi is available throughout the entire hotel for all guests.' },
              { question: 'Are pets allowed?', answer: 'Yes, we are a pet-friendly hotel. We welcome pets up to 25 lbs with a nominal fee.' },
              { question: 'Do you have a swimming pool?', answer: 'Yes, we have a stunning infinity pool on the rooftop with panoramic views, open daily from 6 AM to 10 PM.' }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gold font-bold uppercase tracking-widest mb-2">Contact</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 text-lg mb-8">
                Ready to experience luxury? Contact us for reservations or inquiries.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-2xl">📍</div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-300">123 Paradise Boulevard, Oceanview City</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-2xl">📞</div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-2xl">✉️</div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-300">info@grandhorizon.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                {['📘', '📷', '🐦', '📌'].map((social, index) => (
                  <div key={index} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl hover:bg-gold transition-colors cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-serif font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-gold resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gold text-white py-3 rounded-lg font-bold hover:bg-yellow-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-4">Grand Horizon</h3>
              <p className="mb-4">Experience the perfect blend of luxury, comfort, and unforgettable moments.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                <li><a href="#rooms" className="hover:text-gold transition-colors">Rooms</a></li>
                <li><a href="#amenities" className="hover:text-gold transition-colors">Amenities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold transition-colors">Weddings</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Conferences</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Dining</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li>123 Paradise Blvd</li>
                <li>+1 (555) 123-4567</li>
                <li>info@grandhorizon.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2026 Grand Horizon Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}