export default function Testimonials() {
  const testimonials = [
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
  ];

  return (
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
          {testimonials.map((testimonial, index) => (
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
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
