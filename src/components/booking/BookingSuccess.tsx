import { useBooking } from '@/context/BookingContext';
import { Button } from '@/components/ui/button';
import { PartyPopper, Clock, MapPin, User, Calendar as CalendarIcon, Phone, CheckCircle } from 'lucide-react';

export function BookingSuccess() {
  const { bookingState, getTotalPrice, getTotalDuration, resetBooking } = useBooking();
  const { selectedServices, selectedDate, selectedTimeSlot, customerDetails, stylist, location } = bookingState;

  const selectedService = selectedServices[0];

  return (
    <div className="min-h-[calc(100vh-200px)] bg-white">
      <div className="max-w-6xl mx-auto w-full px-6 pb-8">
        {/* Header with title and progress bar */}
        <div className="flex items-start justify-between mb-8">
          <h2 className="text-3xl font-display text-gray-800">
            Booking Complete
          </h2>
          
          {/* Progress bar */}
          <div className="hidden lg:flex items-center gap-3 pt-2">
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-full bg-[#5B6B4E] rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Success Message */}
          <div className="w-full lg:w-[60%]">
            {/* Success Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#5B6B4E]/10 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-[#5B6B4E]" />
              </div>
              <h3 className="text-2xl font-display text-gray-800 mb-2">Booking Successful!</h3>
              <p className="text-gray-500 mb-8">
                We've sent a confirmation to your email
              </p>

              {/* Booking Details */}
              <div className="text-left bg-gray-50 rounded-xl p-6 space-y-4">
                {selectedServices.map((service) => (
                  <div key={service.id} className="flex justify-between items-center">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-display text-gray-800">${service.price}</span>
                  </div>
                ))}
                
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  {selectedDate && selectedTimeSlot && (
                    <div className="flex items-center gap-3 text-sm">
                      <CalendarIcon className="w-4 h-4 text-[#5B6B4E]" />
                      <span className="text-gray-600">
                        {selectedDate.toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        })} at {selectedTimeSlot.start}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-[#5B6B4E]" />
                    <span className="text-gray-600">Duration: {getTotalDuration()} min</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <User className="w-4 h-4 text-[#5B6B4E]" />
                    <span className="text-gray-600">Stylist: {stylist}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-[#5B6B4E]" />
                    <span className="text-gray-600">{location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-[#5B6B4E]" />
                    <span className="text-gray-600">{customerDetails.name}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">Total Paid</span>
                    <span className="text-2xl font-display text-[#BF994C]">${getTotalPrice()}</span>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-0.5">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-gray-800' : 'bg-white'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Book Another Button */}
            <div className="mt-6">
              <Button
                onClick={resetBooking}
                className="w-full bg-[#BF994C] hover:bg-[#A8824A] hover:scale-[1.01] text-white py-6 text-base font-medium rounded-lg transition-all"
              >
                Book Another Appointment
              </Button>
            </div>
          </div>

          {/* Right Column - Appointment Details */}
          <div className="hidden lg:block w-[40%]">
            <div className="sticky top-8">
              {/* Ticket-style summary card */}
              <div className="bg-[#2C3E2D] rounded-3xl p-8 min-h-[500px] relative overflow-hidden">
                {/* Scalloped edge effect - top */}
                <div className="absolute top-0 left-0 right-0 h-4 flex justify-around">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-white rounded-full -mt-2" />
                  ))}
                </div>
                
                {/* Logo */}
                <div className="text-center mb-6 pt-4">
                  <h3 className="text-[#BF994C] font-display text-2xl tracking-wider">HighCut</h3>
                </div>
                
                <h3 className="text-white/80 font-medium text-sm uppercase tracking-wider mb-6">Appointment Details</h3>
                
                <div className="space-y-4">
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">SERVICE</p>
                    <h4 className="text-xl font-display text-white">
                      {selectedService?.name || 'Service'}
                    </h4>
                  </div>
                  
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">DURATION</p>
                    <p className="text-lg text-white">{getTotalDuration()}mins</p>
                  </div>
                  
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">DATE & TIME</p>
                    {selectedDate && selectedTimeSlot ? (
                      <p className="text-lg text-white">
                        {selectedDate.toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                        })} at {selectedTimeSlot.start}
                      </p>
                    ) : (
                      <p className="text-lg text-white/50">_________________</p>
                    )}
                  </div>
                  
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">STYLIST</p>
                    <p className="text-lg text-white">{stylist}</p>
                  </div>
                  
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">LOCATION</p>
                    <p className="text-lg text-white">{location}</p>
                  </div>
                  
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">CONTACT</p>
                    <p className="text-lg text-white">{customerDetails.name}</p>
                    <p className="text-sm text-white/70">{customerDetails.email}</p>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">TOTAL</p>
                    <span className="bg-[#BF994C] text-white font-display text-2xl px-4 py-2 rounded-lg inline-block">
                      ${getTotalPrice()}
                    </span>
                  </div>
                </div>
                
                {/* QR Code placeholder */}
                <div className="mt-6 flex justify-center">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-0.5">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-[#2C3E2D]' : 'bg-white'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Scalloped edge effect - bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-4 flex justify-around">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-white rounded-full mt-2" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
