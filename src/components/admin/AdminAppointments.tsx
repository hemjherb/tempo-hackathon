import { useState } from 'react';
import { 
  Search, 
  Calendar,
  Clock,
  Filter,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
    customer: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '(555) 123-4567',
    service: 'Deep Tissue Massage',
    date: '2024-01-15',
    time: '10:00 AM',
    duration: 60,
    price: 70,
    status: 'confirmed',
    notes: 'First time customer, prefers firm pressure',
  },
  {
    id: 2,
    customer: 'Michael Chen',
    email: 'mchen@email.com',
    phone: '(555) 234-5678',
    service: 'Swedish Massage',
    date: '2024-01-15',
    time: '11:30 AM',
    duration: 60,
    price: 70,
    status: 'pending',
    notes: '',
  },
  {
    id: 3,
    customer: 'Emily Davis',
    email: 'emily.d@email.com',
    phone: '(555) 345-6789',
    service: 'Hot Stone Therapy',
    date: '2024-01-15',
    time: '2:00 PM',
    duration: 90,
    price: 90,
    status: 'confirmed',
    notes: 'Regular customer',
  },
  {
    id: 4,
    customer: 'James Wilson',
    email: 'jwilson@email.com',
    phone: '(555) 456-7890',
    service: 'Aromatherapy',
    date: '2024-01-16',
    time: '9:00 AM',
    duration: 60,
    price: 70,
    status: 'confirmed',
    notes: 'Allergic to lavender',
  },
  {
    id: 5,
    customer: 'Lisa Anderson',
    email: 'lisa.a@email.com',
    phone: '(555) 567-8901',
    service: 'Sports Massage',
    date: '2024-01-16',
    time: '10:30 AM',
    duration: 45,
    price: 60,
    status: 'cancelled',
    notes: 'Cancelled due to illness',
  },
  {
    id: 6,
    customer: 'Robert Brown',
    email: 'rbrown@email.com',
    phone: '(555) 678-9012',
    service: 'Deep Tissue Massage',
    date: '2024-01-16',
    time: '1:00 PM',
    duration: 60,
    price: 70,
    status: 'completed',
    notes: '',
  },
  {
    id: 7,
    customer: 'Jennifer Martinez',
    email: 'jmartinez@email.com',
    phone: '(555) 789-0123',
    service: 'Prenatal Massage',
    date: '2024-01-17',
    time: '11:00 AM',
    duration: 60,
    price: 75,
    status: 'confirmed',
    notes: '7 months pregnant',
  },
  {
    id: 8,
    customer: 'David Lee',
    email: 'dlee@email.com',
    phone: '(555) 890-1234',
    service: 'Swedish Massage',
    date: '2024-01-17',
    time: '3:00 PM',
    duration: 60,
    price: 70,
    status: 'pending',
    notes: '',
  },
];

const statusColors: Record<string, string> = {
  confirmed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  cancelled: 'bg-red-100 text-red-700',
  completed: 'bg-blue-100 text-blue-700',
};

export function AdminAppointments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedAppointment, setSelectedAppointment] = useState<typeof dummyAppointments[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredAppointments = dummyAppointments.filter(apt => {
    const matchesSearch = apt.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || apt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const stats = {
    total: dummyAppointments.length,
    confirmed: dummyAppointments.filter(a => a.status === 'confirmed').length,
    pending: dummyAppointments.filter(a => a.status === 'pending').length,
    cancelled: dummyAppointments.filter(a => a.status === 'cancelled').length,
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
        <p className="text-gray-500 mt-1">Manage and track all appointments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-white border-gray-100">
          <CardContent className="p-4">
            <p className="text-2xl font-semibold text-gray-900">{stats.total}</p>
            <p className="text-sm text-gray-500">Total</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-100">
          <CardContent className="p-4">
            <p className="text-2xl font-semibold text-green-600">{stats.confirmed}</p>
            <p className="text-sm text-gray-500">Confirmed</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-100">
          <CardContent className="p-4">
            <p className="text-2xl font-semibold text-yellow-600">{stats.pending}</p>
            <p className="text-sm text-gray-500">Pending</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-100">
          <CardContent className="p-4">
            <p className="text-2xl font-semibold text-red-600">{stats.cancelled}</p>
            <p className="text-sm text-gray-500">Cancelled</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search by customer or service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 bg-white border-gray-200"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48 h-12 bg-white border-gray-200">
            <Filter className="h-4 w-4 mr-2 text-gray-400" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Appointments Table */}
      <Card className="bg-white border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Customer</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Service</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Date & Time</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Price</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedAppointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#BF994C]/10 flex items-center justify-center text-[#BF994C] font-medium">
                        {appointment.customer.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{appointment.customer}</p>
                        <p className="text-sm text-gray-500">{appointment.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900">{appointment.service}</p>
                    <p className="text-sm text-gray-500">{appointment.duration} mins</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-900">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      {appointment.time}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={`${statusColors[appointment.status]} capitalize`}>
                      {appointment.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-[#BF994C]">${appointment.price}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedAppointment(appointment)}
                        className="text-gray-500 hover:text-gray-900"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {appointment.status === 'pending' && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-green-600 hover:text-green-700 hover:bg-green-50"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredAppointments.length)} of {filteredAppointments.length}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </Card>

      {filteredAppointments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No appointments found.</p>
        </div>
      )}

      {/* Appointment Detail Dialog */}
      <Dialog open={!!selectedAppointment} onOpenChange={() => setSelectedAppointment(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
          </DialogHeader>
          {selectedAppointment && (
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#BF994C]/10 flex items-center justify-center text-[#BF994C] text-xl font-medium">
                  {selectedAppointment.customer.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{selectedAppointment.customer}</p>
                  <p className="text-sm text-gray-500">{selectedAppointment.email}</p>
                  <p className="text-sm text-gray-500">{selectedAppointment.phone}</p>
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
                  <span className="font-semibold text-[#BF994C]">${selectedAppointment.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Status</span>
                  <Badge className={`${statusColors[selectedAppointment.status]} capitalize`}>
                    {selectedAppointment.status}
                  </Badge>
                </div>
              </div>

              {selectedAppointment.notes && (
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-500 mb-1">Notes</p>
                  <p className="text-gray-900">{selectedAppointment.notes}</p>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                {selectedAppointment.status === 'pending' && (
                  <>
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                      <Check className="h-4 w-4 mr-2" />
                      Confirm
                    </Button>
                    <Button variant="outline" className="flex-1 text-red-600 border-red-200 hover:bg-red-50">
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </>
                )}
                {selectedAppointment.status === 'confirmed' && (
                  <Button className="flex-1 bg-[#BF994C] hover:bg-[#A8824A] text-white">
                    Mark as Completed
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
