'use client';

import Link from 'next/link';

interface NavbarProps {
  onBookNow: () => void;
}

export default function Navbar({ onBookNow }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-serif font-bold text-gold hover:text-yellow-700 transition-colors">
            Grand Horizon
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-gold transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gold transition-colors">About</Link>
            <Link href="/#rooms" className="text-gray-700 hover:text-gold transition-colors">Rooms</Link>
            <Link href="/amenities" className="text-gray-700 hover:text-gold transition-colors">Amenities</Link>
            <Link href="/#gallery" className="text-gray-700 hover:text-gold transition-colors">Gallery</Link>
            <Link href="/#testimonials" className="text-gray-700 hover:text-gold transition-colors">Reviews</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-gold transition-colors">Contact</Link>
            <button 
              onClick={onBookNow}
              className="bg-gold text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
