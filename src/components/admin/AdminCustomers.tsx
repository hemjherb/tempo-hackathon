import { useState } from 'react';
import { 
  Search, 
  Mail,
  Phone,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Eye,
  MoreVertical,
  UserPlus,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const dummyCustomers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '(555) 123-4567',
    joinDate: '2023-06-15',
    totalBookings: 12,
    totalSpent: 840,
    lastVisit: '2024-01-10',
    status: 'active',
    favoriteService: 'Deep Tissue Massage',
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'mchen@email.com',
    phone: '(555) 234-5678',
    joinDate: '2023-08-22',
    totalBookings: 8,
    totalSpent: 560,
    lastVisit: '2024-01-08',
    status: 'active',
    favoriteService: 'Swedish Massage',
  },
  {
    id: 3,
    name: 'Emily Davis',
    email: 'emily.d@email.com',
    phone: '(555) 345-6789',
    joinDate: '2023-03-10',
    totalBookings: 24,
    totalSpent: 2160,
    lastVisit: '2024-01-12',
    status: 'vip',
    favoriteService: 'Hot Stone Therapy',
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'jwilson@email.com',
    phone: '(555) 456-7890',
    joinDate: '2023-11-05',
    totalBookings: 3,
    totalSpent: 210,
    lastVisit: '2023-12-20',
    status: 'active',
    favoriteService: 'Aromatherapy',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    email: 'lisa.a@email.com',
    phone: '(555) 567-8901',
    joinDate: '2023-09-18',
    totalBookings: 6,
    totalSpent: 360,
    lastVisit: '2023-11-15',
    status: 'inactive',
    favoriteService: 'Sports Massage',
  },
  {
    id: 6,
    name: 'Robert Brown',
    email: 'rbrown@email.com',
    phone: '(555) 678-9012',
    joinDate: '2023-04-25',
    totalBookings: 15,
    totalSpent: 1050,
    lastVisit: '2024-01-05',
    status: 'active',
    favoriteService: 'Deep Tissue Massage',
  },
  {
    id: 7,
    name: 'Jennifer Martinez',
    email: 'jmartinez@email.com',
    phone: '(555) 789-0123',
    joinDate: '2023-07-30',
    totalBookings: 18,
    totalSpent: 1350,
    lastVisit: '2024-01-11',
    status: 'vip',
    favoriteService: 'Prenatal Massage',
  },
  {
    id: 8,
    name: 'David Lee',
    email: 'dlee@email.com',
    phone: '(555) 890-1234',
    joinDate: '2024-01-02',
    totalBookings: 1,
    totalSpent: 70,
    lastVisit: '2024-01-02',
    status: 'new',
    favoriteService: 'Swedish Massage',
  },
];

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  inactive: 'bg-gray-100 text-gray-700',
  vip: 'bg-purple-100 text-purple-700',
  new: 'bg-blue-100 text-blue-700',
};

export function AdminCustomers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<typeof dummyCustomers[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredCustomers = dummyCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const stats = {
    total: dummyCustomers.length,
    active: dummyCustomers.filter(c => c.status === 'active').length,
    vip: dummyCustomers.filter(c => c.status === 'vip').length,
    totalRevenue: dummyCustomers.reduce((sum, c) => sum + c.totalSpent, 0),
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
          <p className="text-gray-500 mt-1">Manage your customer database</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-200">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-[#BF994C] hover:bg-[#A8824A] text-white">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-white border-gray-100">
          <CardContent className="p-4">
            <p className="text-2xl font-semibold text-gray-900">{stats.total}</p>
            <p className="text-sm text-gray-500">Total Customers</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-100">
          <CardContent className="p-4">
            <p className="text-2xl font-semibold text-green-600">{stats.active}</p>
            <p className="text-sm text-gray-500">Active</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-100">
          <CardContent className="p-4">
            <p className="text-2xl font-semibold text-purple-600">{stats.vip}</p>
            <p className="text-sm text-gray-500">VIP Members</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-100">
          <CardContent className="p-4">
            <p className="text-2xl font-semibold text-[#BF994C]">${stats.totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-500">Total Revenue</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 bg-white border-gray-200"
        />
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCustomers.map((customer) => (
          <Card key={customer.id} className="bg-white border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#414e36] flex items-center justify-center text-white text-lg font-medium">
                    {customer.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{customer.name}</p>
                    <Badge className={`${statusColors[customer.status]} capitalize text-xs`}>
                      {customer.status}
                    </Badge>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-1 rounded hover:bg-gray-100">
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSelectedCustomer(customer)}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Phone className="h-4 w-4" />
                  <span>{customer.phone}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-lg font-semibold text-gray-900">{customer.totalBookings}</p>
                  <p className="text-xs text-gray-500">Bookings</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#BF994C]">${customer.totalSpent}</p>
                  <p className="text-xs text-gray-500">Total Spent</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mt-4 border-gray-200"
                onClick={() => setSelectedCustomer(customer)}
              >
                View Profile
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-8">
          <p className="text-sm text-gray-500">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredCustomers.length)} of {filteredCustomers.length}
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

      {filteredCustomers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No customers found.</p>
        </div>
      )}

      {/* Customer Detail Dialog */}
      <Dialog open={!!selectedCustomer} onOpenChange={() => setSelectedCustomer(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Customer Profile</DialogTitle>
          </DialogHeader>
          {selectedCustomer && (
            <div className="space-y-6 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#414e36] flex items-center justify-center text-white text-2xl font-medium">
                  {selectedCustomer.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900">{selectedCustomer.name}</p>
                  <Badge className={`${statusColors[selectedCustomer.status]} capitalize`}>
                    {selectedCustomer.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gray-50 border-0">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-semibold text-gray-900">{selectedCustomer.totalBookings}</p>
                    <p className="text-sm text-gray-500">Total Bookings</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-0">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-semibold text-[#BF994C]">${selectedCustomer.totalSpent}</p>
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
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span>Member since {selectedCustomer.joinDate}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Favorite Service</span>
                  <span className="font-medium text-gray-900">{selectedCustomer.favoriteService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Last Visit</span>
                  <span className="font-medium text-gray-900">{selectedCustomer.lastVisit}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="flex-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button className="flex-1 bg-[#BF994C] hover:bg-[#A8824A] text-white">
                  <Calendar className="h-4 w-4 mr-2" />
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
