export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="h-64 bg-cover bg-center rounded-xl"
                style={{ backgroundImage: 'url(/Lobby.jpg)' }}
              ></div>
              <div 
                className="h-64 bg-cover bg-center rounded-xl mt-8"
                style={{ backgroundImage: 'url(/bar1.jpg)' }}
              ></div>
              <div 
                className="h-64 bg-cover bg-center rounded-xl -mt-8"
                style={{ backgroundImage: 'url(/Spa1.jpg)' }}
              ></div>
              <div 
                className="h-64 bg-cover bg-center rounded-xl"
                style={{ backgroundImage: 'url(/pool1.jpg)' }}
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
            <div className="mt-8">
              <a 
                href="/about" 
                className="inline-block bg-gold text-white px-8 py-3 rounded-full hover:bg-yellow-700 transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
