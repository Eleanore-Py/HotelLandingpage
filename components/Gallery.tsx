export default function Gallery() {
  const images = [
    '/ps1.jpg',
    '/ps2.jpg',
    '/ps3.jpg',
    '/ps4.jpg',
    '/ps5.jpg',
    '/ps6.jpg',
    '/ps7.jpg',
    '/pool1.jpg'
  ];

  return (
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
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`h-48 md:h-64 bg-cover bg-center rounded-xl hover:scale-105 transition-transform cursor-pointer ${index === 0 || index === 7 ? 'col-span-2' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
