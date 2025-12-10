import { useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import { Button } from '@/components/ui/button';
import { TimeSlotButton } from './TimeSlotButton';
import { TimeSlot } from '@/types/booking';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StickyFooter } from './StickyFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { PriceDisplay } from './PriceDisplay';

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
    <div className="min-h-[calc(100vh-200px)] bg-[#FFFBF2] pb-24">
      <div className="max-w-6xl mx-auto w-full px-6 pb-8">
        {/* Header with title and progress bar */}
        <div className="flex items-start justify-between mb-8">
          <h2 className="text-3xl font-display text-gray-800">
            Pick Date & Time
          </h2>
          
          {/* Progress bar */}
          <div className="hidden lg:flex items-center gap-3 pt-2">
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#5B6B4E] rounded-full" 
                initial={{ width: "25%" }}
                animate={{ width: "50%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Calendar and Time Slots */}
          <div className="w-full lg:w-[50%]">
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
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.01 }}
                        onClick={() => handleDateSelect(day)}
                        className={cn(
                          'w-full h-full rounded-lg text-sm font-medium transition-all duration-200',
                          'hover:bg-[#5B6B4E]/10',
                          isDateSelected(day)
                            ? 'bg-[#5B6B4E] text-white'
                            : 'text-gray-700'
                        )}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {day}
                      </motion.button>
                    )}
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-500 mb-4">Available Time Slots</h4>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={selectedDate ? selectedDate.toISOString() : 'no-date'}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2"
                  >
                    {timeSlots.map((slot, index) => (
                      <TimeSlotButton
                        key={slot.id}
                        slot={slot}
                        isSelected={selectedTimeSlot?.id === slot.id}
                        onSelect={() => setSelectedTimeSlot(slot)}
                        index={index}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column - Appointment Details */}
          <motion.div 
            className="hidden lg:block w-[50%]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="sticky top-8 h-[calc(100vh-120px)]">
              {/* Appointment card with SVG background */}
              <div className="relative h-full rounded-3xl overflow-hidden">
                {/* Background SVG */}
                <img 
                  src="/images/appointment.svg" 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="space-y-4 w-full max-w-xs">
                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">SERVICE</p>
                      <h4 className="text-xl font-display text-[#F4F4F6]">
                        {selectedService?.name || 'Select a service'}
                      </h4>
                    </div>
                    
                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">DURATION</p>
                      <p className="text-lg text-[#F4F4F6]">{getTotalDuration()}mins</p>
                    </div>
                    
                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">DATE</p>
                      <AnimatePresence mode="wait">
                        {selectedDate ? (
                          <motion.div
                            key={selectedDate.toISOString()}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center justify-center gap-2"
                          >
                            <p className="text-lg text-[#F4F4F6]">
                              {selectedDate.toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </p>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            >
                              <Check className="w-4 h-4 text-[#BF994C]" />
                            </motion.div>
                          </motion.div>
                        ) : (
                          <p className="text-lg text-[#F4F4F6]/50">_________________</p>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">TIME</p>
                      <AnimatePresence mode="wait">
                        {selectedTimeSlot ? (
                          <motion.div
                            key={selectedTimeSlot.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center justify-center gap-2"
                          >
                            <p className="text-lg text-[#F4F4F6]">{selectedTimeSlot.start}</p>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            >
                              <Check className="w-4 h-4 text-[#BF994C]" />
                            </motion.div>
                          </motion.div>
                        ) : (
                          <p className="text-lg text-[#F4F4F6]/50">_________________</p>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className="pt-2">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">TOTAL</p>
                      <span className="bg-[#BF994C] text-white font-display text-2xl px-4 py-2 rounded-lg inline-block">
                        <PriceDisplay price={getTotalPrice()} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Sticky Footer */}
      <StickyFooter
        onProceed={() => setCurrentStep(3)}
        onBack={() => setCurrentStep(1)}
        canProceed={!!canContinue}
        showBack={true}
        proceedLabel="Proceed"
      />
    </div>
  );
}
