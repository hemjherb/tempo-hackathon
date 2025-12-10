import { Header } from './Header';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookingProvider } from '@/context/BookingContext';

// Mock appointments data
const appointments = [
  {
    id: '1',
    service: 'Haircut & Styling',
    date: new Date(2025, 0, 20),
    time: '10:00 AM',
    duration: 60,
    stylist: 'John Doe',
    location: '123 Main Street, New York',
    status: 'upcoming',
    price: 85,
  },
  {
    id: '2',
    service: 'Hair Coloring',
    date: new Date(2025, 0, 25),
    time: '2:00 PM',
    duration: 120,
    stylist: 'Jane Smith',
    location: '123 Main Street, New York',
    status: 'upcoming',
    price: 150,
  },
  {
    id: '3',
    service: 'Deep Conditioning',
    date: new Date(2024, 11, 15),
    time: '11:00 AM',
    duration: 45,
    stylist: 'John Doe',
    location: '123 Main Street, New York',
    status: 'completed',
    price: 65,
  },
];

export function AppointmentsPage() {
  const upcomingAppointments = appointments.filter(apt => apt.status === 'upcoming');
  const pastAppointments = appointments.filter(apt => apt.status === 'completed');

  return (
    <BookingProvider>
      <div className="min-h-screen bg-[#FFFBF2]">
        <Header />
      
        <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-display text-[#2C3E2D] mb-8">My Appointments</h1>
        
        {/* Upcoming Appointments */}
        <div className="mb-10">
          <h2 className="text-xl font-medium text-[#2C3E2D] mb-4">Upcoming</h2>
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-display text-[#2C3E2D] mb-3">
                        {appointment.service}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-[#5B6B4E]" />
                          <span>
                            {appointment.date.toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-[#5B6B4E]" />
                          <span>{appointment.time} ({appointment.duration} min)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <User className="w-4 h-4 text-[#5B6B4E]" />
                          <span>{appointment.stylist}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-[#5B6B4E]" />
                          <span>{appointment.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className="text-2xl font-display text-[#BF994C]">
                        ${appointment.price}
                      </span>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="border-gray-200 text-gray-600 hover:bg-gray-50"
                        >
                          Reschedule
                        </Button>
                        <Button
                          variant="outline"
                          className="border-red-200 text-red-600 hover:bg-red-50"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
              <p className="text-gray-500">No upcoming appointments</p>
              <Button
                className="mt-4 bg-[#BF994C] hover:bg-[#A8824A] text-white"
                onClick={() => window.location.href = '/'}
              >
                Book an Appointment
              </Button>
            </div>
          )}
        </div>

        {/* Past Appointments */}
        <div>
          <h2 className="text-xl font-medium text-[#2C3E2D] mb-4">Past Appointments</h2>
          {pastAppointments.length > 0 ? (
            <div className="space-y-4">
              {pastAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="bg-white/60 rounded-2xl border border-gray-100 p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-display text-gray-600 mb-3">
                        {appointment.service}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>
                            {appointment.date.toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{appointment.time} ({appointment.duration} min)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4 text-gray-400" />
                          <span>{appointment.stylist}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className="text-xl font-display text-gray-400">
                        ${appointment.price}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/60 rounded-2xl border border-gray-100 p-8 text-center">
              <p className="text-gray-500">No past appointments</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </BookingProvider>
  );
}
