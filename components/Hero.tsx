interface HeroProps {
  onBookNow: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/luxury.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-lg md:text-xl mb-2 tracking-widest uppercase">Welcome to</p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
          Grand Horizon
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Experience luxury and comfort in the heart of paradise
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onBookNow}
            className="bg-gold text-white px-8 py-3 rounded-full text-lg hover:bg-yellow-700 transition-all transform hover:scale-105"
          >
            Explore Rooms
          </button>
          <a href="/about" className="border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
