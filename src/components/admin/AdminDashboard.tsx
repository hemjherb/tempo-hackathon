import { 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: 'Total Revenue',
    value: '$12,450',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    title: 'Appointments',
    value: '156',
    change: '+8.2%',
    trend: 'up',
    icon: Calendar,
  },
  {
    title: 'New Customers',
    value: '32',
    change: '+15.3%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Avg. Duration',
    value: '45 min',
    change: '-2.1%',
    trend: 'down',
    icon: Clock,
  },
];

const recentAppointments = [
  { id: 1, customer: 'Sarah Johnson', service: 'Deep Tissue Massage', time: '10:00 AM', status: 'Confirmed' },
  { id: 2, customer: 'Michael Chen', service: 'Swedish Massage', time: '11:30 AM', status: 'Pending' },
  { id: 3, customer: 'Emily Davis', service: 'Hot Stone Therapy', time: '2:00 PM', status: 'Confirmed' },
  { id: 4, customer: 'James Wilson', service: 'Aromatherapy', time: '3:30 PM', status: 'Confirmed' },
  { id: 5, customer: 'Lisa Anderson', service: 'Sports Massage', time: '5:00 PM', status: 'Cancelled' },
];

const topServices = [
  { name: 'Deep Tissue Massage', bookings: 45, revenue: '$3,150' },
  { name: 'Swedish Massage', bookings: 38, revenue: '$2,660' },
  { name: 'Hot Stone Therapy', bookings: 28, revenue: '$2,520' },
  { name: 'Aromatherapy', bookings: 24, revenue: '$1,680' },
];

export function AdminDashboard() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-white border-gray-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#414e36]/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-[#414e36]" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {stat.change}
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Appointments */}
        <Card className="lg:col-span-2 bg-white border-gray-100">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-lg font-semibold">Today's Appointments</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#BF994C]/10 flex items-center justify-center text-[#BF994C] font-medium">
                      {appointment.customer.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{appointment.customer}</p>
                      <p className="text-sm text-gray-500">{appointment.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{appointment.time}</p>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      appointment.status === 'Confirmed' 
                        ? 'bg-green-100 text-green-700'
                        : appointment.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Services */}
        <Card className="bg-white border-gray-100">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#BF994C]" />
              Top Services
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {topServices.map((service, index) => (
                <div key={service.name} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#414e36] text-white text-xs flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{service.name}</p>
                      <p className="text-xs text-gray-500">{service.bookings} bookings</p>
                    </div>
                  </div>
                  <p className="font-semibold text-[#BF994C]">{service.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
