import { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/booking";
import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { StickyFooter } from "./StickyFooter";
import { motion, AnimatePresence } from "framer-motion";
import { PriceDisplay } from "./PriceDisplay";

const services: Service[] = [
  {
    id: "1",
    name: "Beards Grooming",
    price: 100,
    duration: 20,
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
  },
  {
    id: "2",
    name: "Color Treatment",
    price: 100,
    duration: 20,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    id: "3",
    name: "Beards Grooming",
    price: 100,
    duration: 20,
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  },
  {
    id: "4",
    name: "Color Treatment",
    price: 100,
    duration: 20,
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
  },
];

export function SelectServices() {
  const {
    bookingState,
    toggleService,
    setCurrentStep,
    getTotalPrice,
    getTotalDuration,
  } = useBooking();
  const { selectedServices } = bookingState;
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const canContinue = selectedServices.length > 0;
  const selectedService = selectedServices[0];

  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#FFFBF2] pb-24">
      <div className="max-w-6xl mx-auto w-full px-6 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Services Grid */}
          <div className="w-full lg:w-[50%]">
            {/* Header with title and progress bar */}
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-3xl font-display text-gray-800">
                Select Services
              </h2>

              {/* Progress bar */}
              <div className="hidden lg:flex items-center gap-3 pt-2">
                <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#5B6B4E] rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: "25%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSelected={selectedServices.some((s) => s.id === service.id)}
                  onToggle={() => toggleService(service)}
                  showLimitedSlots={index === 0 || index === 2}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Appointment Details (Desktop) */}
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
                  <AnimatePresence mode="wait">
                    {selectedService ? (
                      <motion.div 
                        key="selected"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 w-full max-w-xs"
                      >
                        <div className="border-b border-[#F4F4F6]/20 pb-4">
                          <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                            SERVICE
                          </p>
                          <h4 className="text-xl font-display text-[#F4F4F6]">
                            {selectedService.name}
                          </h4>
                        </div>

                        <div className="border-b border-[#F4F4F6]/20 pb-4">
                          <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                            DURATION
                          </p>
                          <p className="text-lg text-[#F4F4F6]">
                            {selectedService.duration}mins
                          </p>
                        </div>

                        <div className="border-b border-[#F4F4F6]/20 pb-4">
                          <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                            DATE
                          </p>
                          <p className="text-lg text-[#F4F4F6]/50">_________________</p>
                        </div>

                        <div className="border-b border-[#F4F4F6]/20 pb-4">
                          <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                            TIME
                          </p>
                          <p className="text-lg text-[#F4F4F6]/50">_________________</p>
                        </div>

                        <div className="pt-2">
                          <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                            TOTAL
                          </p>
                          <span className="bg-[#BF994C] text-white font-display text-2xl px-4 py-2 rounded-lg inline-block">
                            <PriceDisplay price={selectedService.price} />
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="empty"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 w-full max-w-xs"
                      >
                        <div className="border-b border-[#F4F4F6]/20 pb-4">
                          <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                            SERVICE
                          </p>
                          <p className="text-lg text-[#F4F4F6]/30">_________________</p>
                        </div>

                        <div className="border-b border-[#F4F4F6]/20 pb-4">
                          <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                            DURATION
                          </p>
                          <p className="text-lg text-[#F4F4F6]/30">_________________</p>
                        </div>

                        <div className="border-b border-[#F4F4F6]/20 pb-4">
                          <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                            DATE
                          </p>
                          <p className="text-lg text-[#F4F4F6]/30">_________________</p>
                        </div>

                        <div className="border-b border-[#F4F4F6]/20 pb-4">
                          <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                            TIME
                          </p>
                          <p className="text-lg text-[#F4F4F6]/30">_________________</p>
                        </div>

                        <div className="pt-2">
                          <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                            TOTAL
                          </p>
                          <span className="bg-[#F4F4F6]/20 text-[#F4F4F6]/50 font-display text-2xl px-4 py-2 rounded-lg inline-block">
                            $0
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Mobile/Tablet Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#FFFBF2] border-t shadow-lg z-50">
        {/* Expandable Summary */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            mobileExpanded ? "max-h-80" : "max-h-0",
          )}
        >
          <div className="p-4 border-b max-h-60 overflow-y-auto bg-[#2C3E2D]">
            {selectedService ? (
              <div className="text-white">
                <p className="text-xs text-white/50 uppercase mb-1">SERVICE</p>
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-display">
                    {selectedService.name}
                  </h4>
                  <span className="font-display bg-[#BF994C] px-3 py-1 rounded-full">
                    ${selectedService.price}
                  </span>
                </div>
                <p className="text-sm text-white/70 mt-2">
                  {selectedService.duration}mins
                </p>
              </div>
            ) : (
              <p className="text-center text-white/50 py-4">
                Select a service to continue
              </p>
            )}
          </div>
        </div>

        {/* Summary Bar */}
        <div className="p-4">
          <div
            className="flex items-center justify-between mb-3 cursor-pointer"
            onClick={() => setMobileExpanded(!mobileExpanded)}
          >
            <div>
              <p className="text-sm text-gray-500">
                {selectedServices.length} service
                {selectedServices.length !== 1 ? "s" : ""} selected
              </p>
              <p className="font-display text-lg">
                ${getTotalPrice()}{" "}
                <span className="text-sm font-sans font-normal text-gray-500">
                  • {getTotalDuration()} min
                </span>
              </p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              {mobileExpanded ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronUp className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Sticky Footer */}
      <StickyFooter
        onProceed={() => setCurrentStep(2)}
        canProceed={canContinue}
        proceedLabel="Proceed"
      />
    </div>
  );
}
