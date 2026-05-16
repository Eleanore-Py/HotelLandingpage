export default function FAQ() {
  const faqs = [
    { question: 'What time is check-in and check-out?', answer: 'Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request.' },
    { question: 'Is parking available at the hotel?', answer: 'Yes, we offer complimentary valet parking for all our guests during their stay.' },
    { question: 'Do you have Wi-Fi?', answer: 'Complimentary high-speed Wi-Fi is available throughout the entire hotel for all guests.' },
    { question: 'Are pets allowed?', answer: 'Yes, we are a pet-friendly hotel. We welcome pets up to 25 lbs with a nominal fee.' },
    { question: 'Do you have a swimming pool?', answer: 'Yes, we have a stunning infinity pool on the rooftop with panoramic views, open daily from 6 AM to 10 PM.' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-bold uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
