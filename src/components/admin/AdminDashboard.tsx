import { 
  Calendar, 
  DollarSign, 
  Plus
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stats = [
  {
    title: "Today's Appointments",
    value: '09',
    subtitle: 'Next at 2:00PM',
    icon: Calendar,
    bgColor: 'bg-[#FFF8E7]',
    iconColor: 'text-[#414e36]',
  },
  {
    title: "This Week's Appointments",
    value: '32',
    subtitle: '+15% from last week',
    icon: Calendar,
    bgColor: 'bg-[#FFF8E7]',
    iconColor: 'text-[#BF994C]',
  },
  {
    title: 'Revenue (Week)',
    value: '$1,200',
    subtitle: 'Across 32 Appointments',
    icon: DollarSign,
    bgColor: 'bg-[#BF994C]',
    iconColor: 'text-white',
    textColor: 'text-white',
  },
];

const todaySchedule = [
  { id: 1, time: '9:00am', service: 'Haircut', client: 'Sara Johnson', amount: '$100.00', duration: '20mins' },
  { id: 2, time: '9:00am', service: 'Shaving', client: 'Hank Henson', amount: '$50.00', duration: '20mins' },
  { id: 3, time: '9:00am', service: 'Color Treatment', client: 'Tom Hardy', amount: '$60.00', duration: '20mins' },
  { id: 4, time: '9:00am', service: 'Color Treatment', client: 'Fred Henry', amount: '$60.00', duration: '20mins' },
  { id: 5, time: '9:00am', service: 'Shaving', client: 'Hank Henson', amount: '$50.00', duration: '20mins' },
];

export function AdminDashboard() {
  return (
    <div className="p-6 lg:p-8 bg-white min-h-screen">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <Card key={stat.title} className={`${stat.bgColor} border-0 shadow-none`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
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

      {/* Today's Schedule Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>
          Today's Schedule
        </h2>
        <Button className="bg-[#BF994C] hover:bg-[#A8824A] text-white rounded-lg px-5 py-2.5">
          <Plus className="h-4 w-4 mr-2" />
          Add Booking
        </Button>
      </div>

      {/* Schedule Table */}
      <div className="overflow-hidden rounded-xl">
        {/* Table Header */}
        <div className="grid grid-cols-7 bg-[#E8EBE4] py-4 px-6">
          <span className="text-sm font-medium text-[#414e36]">Time</span>
          <span className="text-sm font-medium text-[#414e36]">Service</span>
          <span className="text-sm font-medium text-[#414e36] col-span-2">Client</span>
          <span className="text-sm font-medium text-[#414e36]">Amount</span>
          <span className="text-sm font-medium text-[#414e36]">Duration</span>
          <span className="text-sm font-medium text-[#414e36]"></span>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {todaySchedule.map((item, index) => (
            <div 
              key={item.id} 
              className={`grid grid-cols-7 py-5 px-6 items-center ${index % 2 === 0 ? 'bg-[#FAFBF9]' : 'bg-white'}`}
            >
              <span className="text-base text-gray-700" style={{ fontFamily: "'Gloock', serif" }}>
                {item.time}
              </span>
              <span className="text-base text-gray-700">
                {item.service}
              </span>
              <span className="text-base text-gray-700 col-span-2">
                {item.client}
              </span>
              <span className="text-base text-gray-700">
                {item.amount}
              </span>
              <span className="text-base text-gray-700">
                {item.duration}
              </span>
              <div className="flex items-center gap-3 justify-end">
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg px-4 py-2 text-sm"
                >
                  Reschedule
                </Button>
                <Button 
                  className="bg-[#BF994C] hover:bg-[#A8824A] text-white rounded-lg px-5 py-2 text-sm"
                >
                  Complete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
