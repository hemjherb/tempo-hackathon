import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Service, TimeSlot, BookingDetails, BookingState } from '@/types/booking';

interface BookingContextType {
  bookingState: BookingState;
  setSelectedServices: (services: Service[]) => void;
  toggleService: (service: Service) => void;
  setSelectedDate: (date: Date | null) => void;
  setSelectedTimeSlot: (slot: TimeSlot | null) => void;
  setCustomerDetails: (details: BookingDetails) => void;
  resetBooking: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  getTotalPrice: () => number;
  getTotalDuration: () => number;
}

const initialState: BookingState = {
  selectedServices: [],
  selectedDate: null,
  selectedTimeSlot: null,
  customerDetails: {
    name: '',
    email: '',
    phone: '',
  },
  stylist: 'John Doe',
  location: '932 Neut Street, Downtown',
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingState, setBookingState] = useState<BookingState>(initialState);
  const [currentStep, setCurrentStep] = useState(1);

  const setSelectedServices = (services: Service[]) => {
    setBookingState((prev) => ({ ...prev, selectedServices: services }));
  };

  const toggleService = (service: Service) => {
    setBookingState((prev) => {
      const isSelected = prev.selectedServices.some((s) => s.id === service.id);
      if (isSelected) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s.id !== service.id),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, service],
        };
      }
    });
  };

  const setSelectedDate = (date: Date | null) => {
    setBookingState((prev) => ({ ...prev, selectedDate: date }));
  };

  const setSelectedTimeSlot = (slot: TimeSlot | null) => {
    setBookingState((prev) => ({ ...prev, selectedTimeSlot: slot }));
  };

  const setCustomerDetails = (details: BookingDetails) => {
    setBookingState((prev) => ({ ...prev, customerDetails: details }));
  };

  const resetBooking = () => {
    setBookingState(initialState);
    setCurrentStep(1);
  };

  const getTotalPrice = () => {
    return bookingState.selectedServices.reduce((sum, service) => sum + service.price, 0);
  };

  const getTotalDuration = () => {
    return bookingState.selectedServices.reduce((sum, service) => sum + service.duration, 0);
  };

  return (
    <BookingContext.Provider
      value={{
        bookingState,
        setSelectedServices,
        toggleService,
        setSelectedDate,
        setSelectedTimeSlot,
        setCustomerDetails,
        resetBooking,
        currentStep,
        setCurrentStep,
        getTotalPrice,
        getTotalDuration,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
