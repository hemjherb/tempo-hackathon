import { useBooking } from '@/context/BookingContext';
import { Scissors } from 'lucide-react';

export function Header() {
  const { currentStep } = useBooking();

  return (
    <header className="bg-white">
      {/* Top Navigation Bar */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="text-[#5B6B4E]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" opacity="0.3"/>
                  <circle cx="8" cy="8" r="2" fill="currentColor"/>
                  <circle cx="16" cy="8" r="2" fill="currentColor"/>
                  <circle cx="8" cy="16" r="2" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xl font-display text-[#5B6B4E]">HighCut</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Appointments</a>
            </nav>
            
            {/* Book Button */}
            <button className="bg-[#BF994C] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#A8824A] transition-all hover:scale-[1.02]">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      
      {/* Hero Section with HIGHCUT Logo */}
      <div className="py-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h1 className="text-4xl font-display tracking-[0.2em] text-[#5B6B4E] uppercase">
            HIGHCUT
          </h1>
          <Scissors className="w-8 h-8 text-[#5B6B4E] -rotate-45" />
        </div>
        <p className="text-gray-500 text-lg">
          Book your appointment in just a few clicks.
        </p>
      </div>
    </header>
  );
}
