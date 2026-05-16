interface SpecialOfferProps {
  onBookNow: () => void;
}

export default function SpecialOffer({ onBookNow }: SpecialOfferProps) {
  return (
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
          <button 
            onClick={onBookNow}
            className="bg-gold text-white px-8 py-4 rounded-full text-lg hover:bg-yellow-700 transition-all"
          >
            Claim Offer
          </button>
        </div>
      </div>
    </section>
  );
}
