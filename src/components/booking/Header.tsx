import { useBooking } from '@/context/BookingContext';

export function Header() {
  const { currentStep } = useBooking();

  return (
    <header className="bg-[#FFFBF2]">
      {/* Top Navigation Bar */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/images/logogreen.svg" alt="Logo" className="h-8" />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Home</a>
              <a href="/appointments" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Appointments</a>
            </nav>
            
            {/* Book Button */}
            <button className="bg-[#BF994C] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#A8824A] transition-all hover:scale-[1.02]">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      
      {/* Hero Section with Logo */}
      <div className="py-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src="/images/logogreen.svg" alt="Logo" className="h-16" />
        </div>
        <p className="text-gray-500 text-lg">
          Book your appointment in just a few clicks.
        </p>
      </div>
    </header>
  );
}
