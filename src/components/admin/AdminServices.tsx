import { useState } from 'react';
import { 
  Plus, 
  Clock,
  Edit2,
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const dummyServices = [
  {
    id: 1,
    name: 'Haircut',
    description: 'Professional haircut service',
    duration: 20,
    price: 100,
  },
  {
    id: 2,
    name: 'Shaving',
    description: 'Classic shaving service',
    duration: 20,
    price: 50,
  },
  {
    id: 3,
    name: 'Color Treatment',
    description: 'Hair coloring and treatment',
    duration: 20,
    price: 60,
  },
  {
    id: 4,
    name: 'Hair Styling',
    description: 'Professional hair styling',
    duration: 30,
    price: 80,
  },
  {
    id: 5,
    name: 'Beard Trim',
    description: 'Beard trimming and shaping',
    duration: 15,
    price: 35,
  },
];

const stats = [
  {
    title: 'Total Services',
    value: '05',
    subtitle: '2 most booked',
    bgColor: 'bg-[#FFF8E7]',
    textColor: 'text-[#1a1a1a]',
  },
  {
    title: 'Active Services',
    value: '05',
    subtitle: 'All services active',
    bgColor: 'bg-[#FFF8E7]',
    textColor: 'text-[#1a1a1a]',
  },
  {
    title: 'Avg. Price',
    value: '$65',
    subtitle: 'Across all services',
    bgColor: 'bg-[#BF994C]',
    textColor: 'text-white',
  },
];

export function AdminServices() {
  const [services] = useState(dummyServices);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-6 lg:p-8 bg-white min-h-screen">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <Card key={stat.title} className={`${stat.bgColor} border-0 shadow-none`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-base font-medium ${stat.textColor === 'text-white' ? 'text-white' : 'text-[#414e36]'}`} style={{ fontFamily: "'Gloock', serif" }}>
                  {stat.title}
                </span>
              </div>
              <p className={`text-5xl font-normal mb-2 ${stat.textColor}`} style={{ fontFamily: "'Gloock', serif" }}>
                {stat.value}
              </p>
              <p className={`text-sm ${stat.textColor === 'text-white' ? 'text-white/80' : 'text-gray-500'}`}>
                {stat.subtitle}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Services Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>
          All Services
        </h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#BF994C] hover:bg-[#A8824A] text-white rounded-lg px-5 py-2.5">
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle style={{ fontFamily: "'Gloock', serif" }}>Add New Service</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Service Name</Label>
                <Input placeholder="e.g., Haircut" />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea placeholder="Describe the service..." rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Duration (mins)</Label>
                  <Input type="number" placeholder="20" />
                </div>
                <div className="space-y-2">
                  <Label>Price ($)</Label>
                  <Input type="number" placeholder="100" />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  className="bg-[#BF994C] hover:bg-[#A8824A] text-white"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Add Service
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Services Table */}
      <div className="overflow-hidden rounded-xl">
        {/* Table Header */}
        <div className="grid grid-cols-6 bg-[#E8EBE4] py-4 px-6">
          <span className="text-sm font-medium text-[#414e36]">Service</span>
          <span className="text-sm font-medium text-[#414e36] col-span-2">Description</span>
          <span className="text-sm font-medium text-[#414e36]">Duration</span>
          <span className="text-sm font-medium text-[#414e36]">Price</span>
          <span className="text-sm font-medium text-[#414e36]"></span>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`grid grid-cols-6 py-5 px-6 items-center ${index % 2 === 0 ? 'bg-[#FAFBF9]' : 'bg-white'}`}
            >
              <span className="text-base text-gray-700" style={{ fontFamily: "'Gloock', serif" }}>
                {service.name}
              </span>
              <span className="text-base text-gray-500 col-span-2">
                {service.description}
              </span>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-base">{service.duration}mins</span>
              </div>
              <span className="text-base font-medium text-[#BF994C]">
                ${service.price}.00
              </span>
              <div className="flex items-center gap-3 justify-end">
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg px-4 py-2 text-sm"
                >
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button 
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 rounded-lg px-4 py-2 text-sm"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
