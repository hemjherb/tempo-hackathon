export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  image: string;
}

export interface TimeSlot {
  id: string;
  start: string;
  end: string;
  available: boolean;
}

export interface BookingDetails {
  name: string;
  email: string;
  phone: string;
}

export interface BookingState {
  selectedServices: Service[];
  selectedDate: Date | null;
  selectedTimeSlot: TimeSlot | null;
  customerDetails: BookingDetails;
  stylist: string;
  location: string;
}
