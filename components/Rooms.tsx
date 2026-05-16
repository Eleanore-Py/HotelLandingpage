interface RoomsProps {
  onBookNow: (roomName: string) => void;
}

export default function Rooms({ onBookNow }: RoomsProps) {
  const rooms = [
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
      image: '/kamar1.jpg' 
    }
  ];

  return (
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
          {rooms.map((room, index) => (
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
                  <button 
                    onClick={() => onBookNow(room.name)}
                    className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gold transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
