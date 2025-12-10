import { useState } from 'react';
import { 
  Users,
  UserPlus,
  Mail,
  Phone,
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

const dummyCustomers = [
  {
    id: 1,
    name: 'Sara Johnson',
    email: 'sara.j@email.com',
    phone: '(555) 123-4567',
    totalBookings: 12,
    totalSpent: 840,
    status: 'active',
  },
  {
    id: 2,
    name: 'Hank Henson',
    email: 'hank.h@email.com',
    phone: '(555) 234-5678',
    totalBookings: 8,
    totalSpent: 560,
    status: 'active',
  },
  {
    id: 3,
    name: 'Tom Hardy',
    email: 'tom.h@email.com',
    phone: '(555) 345-6789',
    totalBookings: 24,
    totalSpent: 2160,
    status: 'vip',
  },
  {
    id: 4,
    name: 'Fred Henry',
    email: 'fred.h@email.com',
    phone: '(555) 456-7890',
    totalBookings: 3,
    totalSpent: 210,
    status: 'active',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    email: 'lisa.a@email.com',
    phone: '(555) 567-8901',
    totalBookings: 6,
    totalSpent: 360,
    status: 'inactive',
  },
];

const stats = [
  {
    title: 'Total Customers',
    value: '156',
    subtitle: '+12 this month',
    icon: Users,
    bgColor: 'bg-[#FFF8E7]',
    iconColor: 'text-[#414e36]',
  },
  {
    title: 'Active Customers',
    value: '142',
    subtitle: '91% active rate',
    icon: Users,
    bgColor: 'bg-[#FFF8E7]',
    iconColor: 'text-[#BF994C]',
  },
  {
    title: 'Total Revenue',
    value: '$12,450',
    subtitle: 'From all customers',
    bgColor: 'bg-[#BF994C]',
    textColor: 'text-white',
  },
];

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  inactive: 'bg-gray-100 text-gray-700',
  vip: 'bg-purple-100 text-purple-700',
};

export function AdminCustomers() {
  const [selectedCustomer, setSelectedCustomer] = useState<typeof dummyCustomers[0] | null>(null);

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

      {/* Customers Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>
          All Customers
        </h2>
        <Button className="bg-[#BF994C] hover:bg-[#A8824A] text-white rounded-lg px-5 py-2.5">
          <UserPlus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Customers Table */}
      <div className="overflow-hidden rounded-xl">
        {/* Table Header */}
        <div className="grid grid-cols-7 bg-[#E8EBE4] py-4 px-6">
          <span className="text-sm font-medium text-[#414e36]">Name</span>
          <span className="text-sm font-medium text-[#414e36] col-span-2">Email</span>
          <span className="text-sm font-medium text-[#414e36]">Phone</span>
          <span className="text-sm font-medium text-[#414e36]">Bookings</span>
          <span className="text-sm font-medium text-[#414e36]">Status</span>
          <span className="text-sm font-medium text-[#414e36]"></span>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {dummyCustomers.map((customer, index) => (
            <div 
              key={customer.id} 
              className={`grid grid-cols-7 py-5 px-6 items-center ${index % 2 === 0 ? 'bg-[#FAFBF9]' : 'bg-white'}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#414e36] flex items-center justify-center text-white font-medium">
                  {customer.name.charAt(0)}
                </div>
                <span className="text-base text-gray-700" style={{ fontFamily: "'Gloock', serif" }}>
                  {customer.name}
                </span>
              </div>
              <span className="text-base text-gray-500 col-span-2">
                {customer.email}
              </span>
              <span className="text-base text-gray-700">
                {customer.phone}
              </span>
              <span className="text-base font-medium text-[#BF994C]">
                {customer.totalBookings}
              </span>
              <Badge className={`${statusColors[customer.status]} capitalize w-fit`}>
                {customer.status}
              </Badge>
              <div className="flex items-center gap-3 justify-end">
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg px-4 py-2 text-sm"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button 
                  className="bg-[#BF994C] hover:bg-[#A8824A] text-white rounded-lg px-5 py-2 text-sm"
                >
                  Book
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Detail Dialog */}
      <Dialog open={!!selectedCustomer} onOpenChange={() => setSelectedCustomer(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle style={{ fontFamily: "'Gloock', serif" }}>Customer Profile</DialogTitle>
          </DialogHeader>
          {selectedCustomer && (
            <div className="space-y-6 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#414e36] flex items-center justify-center text-white text-2xl font-medium">
                  {selectedCustomer.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900" style={{ fontFamily: "'Gloock', serif" }}>{selectedCustomer.name}</p>
                  <Badge className={`${statusColors[selectedCustomer.status]} capitalize`}>
                    {selectedCustomer.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#FFF8E7] border-0">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Gloock', serif" }}>{selectedCustomer.totalBookings}</p>
                    <p className="text-sm text-gray-500">Total Bookings</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#FFF8E7] border-0">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-semibold text-[#BF994C]" style={{ fontFamily: "'Gloock', serif" }}>${selectedCustomer.totalSpent}</p>
                    <p className="text-sm text-gray-500">Total Spent</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span>{selectedCustomer.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>{selectedCustomer.phone}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="flex-1 border-gray-300">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button className="flex-1 bg-[#BF994C] hover:bg-[#A8824A] text-white">
                  Book Appointment
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
