import { useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import { Button } from '@/components/ui/button';
import { TimeSlotButton } from './TimeSlotButton';
import { TimeSlot } from '@/types/booking';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const startHour = 9;
  const endHour = 18;

  for (let hour = startHour; hour < endHour; hour++) {
    slots.push({
      id: `${hour}:00`,
      start: `${hour}:00`,
      end: `${hour}:30`,
      available: Math.random() > 0.3,
    });
    slots.push({
      id: `${hour}:30`,
      start: `${hour}:30`,
      end: `${hour + 1}:00`,
      available: Math.random() > 0.3,
    });
  }
  return slots;
};

const timeSlots = generateTimeSlots();

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function PickDateTime() {
  const { bookingState, setSelectedDate, setSelectedTimeSlot, setCurrentStep, getTotalPrice, getTotalDuration } = useBooking();
  const { selectedDate, selectedTimeSlot, selectedServices } = bookingState;

  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1)); // January 2025

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days: (number | null)[] = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const days = getDaysInMonth(currentMonth);

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const canContinue = selectedDate && selectedTimeSlot;
  const selectedService = selectedServices[0];

  return (
    <div className="min-h-[calc(100vh-200px)] bg-white">
      <div className="max-w-6xl mx-auto w-full px-6 pb-8">
        {/* Header with title and progress bar */}
        <div className="flex items-start justify-between mb-8">
          <h2 className="text-3xl font-display text-gray-800">
            Pick Date & Time
          </h2>
          
          {/* Progress bar */}
          <div className="hidden lg:flex items-center gap-3 pt-2">
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-2/4 bg-[#5B6B4E] rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Calendar and Time Slots */}
          <div className="w-full lg:w-[60%]">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-display">
                  {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                  <div key={index} className="aspect-square">
                    {day && (
                      <button
                        onClick={() => handleDateSelect(day)}
                        className={cn(
                          'w-full h-full rounded-lg text-sm font-medium transition-all duration-200',
                          'hover:bg-[#5B6B4E]/10',
                          isDateSelected(day)
                            ? 'bg-[#5B6B4E] text-white'
                            : 'text-gray-700'
                        )}
                      >
                        {day}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-500 mb-4">Available Time Slots</h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                  {timeSlots.map((slot) => (
                    <TimeSlotButton
                      key={slot.id}
                      slot={slot}
                      isSelected={selectedTimeSlot?.id === slot.id}
                      onSelect={() => setSelectedTimeSlot(slot)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex gap-4">
              <Button
                onClick={() => setCurrentStep(1)}
                variant="outline"
                className="flex-1 py-6 text-base font-medium rounded-lg border-gray-200"
              >
                Back
              </Button>
              <Button
                onClick={() => setCurrentStep(3)}
                disabled={!canContinue}
                className={cn(
                  "flex-1 py-6 text-base font-medium rounded-lg transition-all",
                  canContinue
                    ? "bg-[#BF994C] hover:bg-[#A8824A] hover:scale-[1.01] text-white"
                    : "bg-[#CCCCCC] text-white/70 cursor-not-allowed"
                )}
              >
                Proceed
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
                      {selectedService?.name || 'Select a service'}
                    </h4>
                  </div>
                  
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">DURATION</p>
                    <p className="text-lg text-white">{getTotalDuration()}mins</p>
                  </div>
                  
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">DATE</p>
                    {selectedDate ? (
                      <p className="text-lg text-white">
                        {selectedDate.toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    ) : (
                      <p className="text-lg text-white/50">_________________</p>
                    )}
                  </div>
                  
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">TIME</p>
                    {selectedTimeSlot ? (
                      <p className="text-lg text-white">{selectedTimeSlot.start}</p>
                    ) : (
                      <p className="text-lg text-white/50">_________________</p>
                    )}
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">TOTAL</p>
                    <span className="bg-[#BF994C] text-white font-display text-2xl px-4 py-2 rounded-lg inline-block">
                      ${getTotalPrice()}
                    </span>
                  </div>
                </div>
                
                {/* QR Code placeholder */}
                <div className="mt-8 flex justify-center">
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
