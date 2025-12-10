import { useBooking } from '@/context/BookingContext';
import { Button } from '@/components/ui/button';
import { PartyPopper, Clock, MapPin, User, Calendar as CalendarIcon, Phone, CheckCircle } from 'lucide-react';

export function BookingSuccess() {
  const { bookingState, getTotalPrice, getTotalDuration, resetBooking } = useBooking();
  const { selectedServices, selectedDate, selectedTimeSlot, customerDetails, stylist, location } = bookingState;

  const selectedService = selectedServices[0];

  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#FFFBF2]">
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

        <div className="flex justify-center">
          {/* Single Green Ticket Card */}
          <div className="w-full max-w-md">
            {/* Ticket-style summary card */}
            <div className="bg-[#2C3E2D] rounded-3xl p-8 relative overflow-hidden">
              {/* Scalloped edge effect - top */}
              <div className="absolute top-0 left-0 right-0 h-4 flex justify-around">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-[#FFFBF2] rounded-full -mt-2" />
                ))}
              </div>
              
              {/* Success Header */}
              <div className="text-center pt-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-[#BF994C]" />
                </div>
                <h3 className="text-2xl font-display text-white mb-1">Booking Successful!</h3>
                <p className="text-white/60 text-sm">
                  We've sent a confirmation to your email
                </p>
              </div>

              {/* Dashed divider */}
              <div className="border-t border-dashed border-white/30 my-6 relative">
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FFFBF2] rounded-full" />
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FFFBF2] rounded-full" />
              </div>
              
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-4">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">SERVICE</p>
                  <h4 className="text-xl font-display text-white">
                    {selectedService?.name || 'Service'}
                  </h4>
                </div>
                
                <div className="border-b border-white/20 pb-4">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">DURATION</p>
                  <p className="text-lg text-white">{getTotalDuration()} mins</p>
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
                  <p className="text-sm text-white/70">{customerDetails.phone}</p>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">TOTAL PAID</p>
                  <span className="bg-[#BF994C] text-white font-display text-2xl px-4 py-2 rounded-lg inline-block">
                    ${getTotalPrice()}
                  </span>
                </div>
              </div>
              
              {/* QR Code */}
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
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-[#FFFBF2] rounded-full mt-2" />
                ))}
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
        </div>
      </div>
    </div>
  );
}
