import { useState } from 'react';
import { 
  Calendar,
  Plus,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const dummyAppointments = [
  {
    id: 1,
    customer: 'Sara Johnson',
    service: 'Haircut',
    date: 'Jan 15, 2024',
    time: '9:00am',
    duration: 20,
    price: 100,
    status: 'confirmed',
  },
  {
    id: 2,
    customer: 'Hank Henson',
    service: 'Shaving',
    date: 'Jan 15, 2024',
    time: '9:00am',
    duration: 20,
    price: 50,
    status: 'pending',
  },
  {
    id: 3,
    customer: 'Tom Hardy',
    service: 'Color Treatment',
    date: 'Jan 15, 2024',
    time: '9:00am',
    duration: 20,
    price: 60,
    status: 'confirmed',
  },
  {
    id: 4,
    customer: 'Fred Henry',
    service: 'Color Treatment',
    date: 'Jan 16, 2024',
    time: '10:00am',
    duration: 20,
    price: 60,
    status: 'confirmed',
  },
  {
    id: 5,
    customer: 'Lisa Anderson',
    service: 'Haircut',
    date: 'Jan 16, 2024',
    time: '11:00am',
    duration: 20,
    price: 100,
    status: 'cancelled',
  },
];

const stats = [
  {
    title: 'Total Appointments',
    value: '32',
    subtitle: 'This week',
    icon: Calendar,
    bgColor: 'bg-[#FFF8E7]',
    iconColor: 'text-[#414e36]',
  },
  {
    title: 'Upcoming',
    value: '12',
    subtitle: 'Next 7 days',
    icon: Calendar,
    bgColor: 'bg-[#FFF8E7]',
    iconColor: 'text-[#BF994C]',
  },
  {
    title: 'Revenue',
    value: '$1,200',
    subtitle: 'From appointments',
    bgColor: 'bg-[#BF994C]',
    textColor: 'text-white',
  },
];

const statusColors: Record<string, string> = {
  confirmed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  cancelled: 'bg-red-100 text-red-700',
};

export function AdminAppointments() {
  const [selectedAppointment, setSelectedAppointment] = useState<typeof dummyAppointments[0] | null>(null);

  return (
    <div className="p-6 lg:p-8 bg-white min-h-screen">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <Card key={stat.title} className={`${stat.bgColor} border-0 shadow-none`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {stat.icon && <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />}
                <span className={`text-base font-medium ${stat.textColor || 'text-[#414e36]'}`} style={{ fontFamily: "'Gloock', serif" }}>
                  {stat.title}
                </span>
              </div>
              <p className={`text-5xl font-normal mb-2 ${stat.textColor || 'text-[#1a1a1a]'}`} style={{ fontFamily: "'Gloock', serif" }}>
                {stat.value}
              </p>
              <p className={`text-sm ${stat.textColor ? 'text-white/80' : 'text-gray-500'}`}>
                {stat.subtitle}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Appointments Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>
          All Appointments
        </h2>
        <Button className="bg-[#BF994C] hover:bg-[#A8824A] text-white rounded-lg px-5 py-2.5">
          <Plus className="h-4 w-4 mr-2" />
          Add Appointment
        </Button>
      </div>

      {/* Appointments Table */}
      <div className="overflow-hidden rounded-xl">
        {/* Table Header */}
        <div className="grid grid-cols-7 bg-[#E8EBE4] py-4 px-6">
          <span className="text-sm font-medium text-[#414e36]">Client</span>
          <span className="text-sm font-medium text-[#414e36]">Service</span>
          <span className="text-sm font-medium text-[#414e36]">Date</span>
          <span className="text-sm font-medium text-[#414e36]">Time</span>
          <span className="text-sm font-medium text-[#414e36]">Amount</span>
          <span className="text-sm font-medium text-[#414e36]">Status</span>
          <span className="text-sm font-medium text-[#414e36]"></span>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {dummyAppointments.map((appointment, index) => (
            <div 
              key={appointment.id} 
              className={`grid grid-cols-7 py-5 px-6 items-center ${index % 2 === 0 ? 'bg-[#FAFBF9]' : 'bg-white'}`}
            >
              <span className="text-base text-gray-700" style={{ fontFamily: "'Gloock', serif" }}>
                {appointment.customer}
              </span>
              <span className="text-base text-gray-700">
                {appointment.service}
              </span>
              <span className="text-base text-gray-700">
                {appointment.date}
              </span>
              <span className="text-base text-gray-700">
                {appointment.time}
              </span>
              <span className="text-base font-medium text-[#BF994C]">
                ${appointment.price}.00
              </span>
              <Badge className={`${statusColors[appointment.status]} capitalize w-fit`}>
                {appointment.status}
              </Badge>
              <div className="flex items-center gap-3 justify-end">
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg px-4 py-2 text-sm"
                  onClick={() => setSelectedAppointment(appointment)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button 
                  className="bg-[#BF994C] hover:bg-[#A8824A] text-white rounded-lg px-5 py-2 text-sm"
                >
                  Reschedule
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Detail Dialog */}
      <Dialog open={!!selectedAppointment} onOpenChange={() => setSelectedAppointment(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle style={{ fontFamily: "'Gloock', serif" }}>Appointment Details</DialogTitle>
          </DialogHeader>
          {selectedAppointment && (
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#414e36] flex items-center justify-center text-white text-xl font-medium">
                  {selectedAppointment.customer.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900" style={{ fontFamily: "'Gloock', serif" }}>{selectedAppointment.customer}</p>
                  <Badge className={`${statusColors[selectedAppointment.status]} capitalize`}>
                    {selectedAppointment.status}
                  </Badge>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Service</span>
                  <span className="font-medium text-gray-900">{selectedAppointment.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date</span>
                  <span className="font-medium text-gray-900">{selectedAppointment.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time</span>
                  <span className="font-medium text-gray-900">{selectedAppointment.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-medium text-gray-900">{selectedAppointment.duration} mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Price</span>
                  <span className="font-semibold text-[#BF994C]">${selectedAppointment.price}.00</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1 border-gray-300">
                  Cancel Appointment
                </Button>
                <Button className="flex-1 bg-[#BF994C] hover:bg-[#A8824A] text-white">
                  Reschedule
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
