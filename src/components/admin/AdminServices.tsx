import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Clock,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const dummyServices = [
  {
    id: 1,
    name: 'Deep Tissue Massage',
    description: 'Intensive massage targeting deep muscle layers to release chronic tension.',
    duration: 60,
    price: 70,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80',
    active: true,
  },
  {
    id: 2,
    name: 'Swedish Massage',
    description: 'Classic relaxation massage using long, flowing strokes.',
    duration: 60,
    price: 70,
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&q=80',
    active: true,
  },
  {
    id: 3,
    name: 'Hot Stone Therapy',
    description: 'Heated stones placed on key points to melt away tension.',
    duration: 90,
    price: 90,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=80',
    active: true,
  },
  {
    id: 4,
    name: 'Aromatherapy',
    description: 'Essential oil massage for mind and body relaxation.',
    duration: 60,
    price: 70,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80',
    active: true,
  },
  {
    id: 5,
    name: 'Sports Massage',
    description: 'Targeted massage for athletes and active individuals.',
    duration: 45,
    price: 60,
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=80',
    active: false,
  },
  {
    id: 6,
    name: 'Prenatal Massage',
    description: 'Gentle massage designed for expecting mothers.',
    duration: 60,
    price: 75,
    image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=400&q=80',
    active: true,
  },
];

export function AdminServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [services] = useState(dummyServices);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Services</h1>
          <p className="text-gray-500 mt-1">Manage your service offerings</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#BF994C] hover:bg-[#A8824A] text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Service Name</Label>
                <Input placeholder="e.g., Deep Tissue Massage" />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea placeholder="Describe the service..." rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Duration (mins)</Label>
                  <Input type="number" placeholder="60" />
                </div>
                <div className="space-y-2">
                  <Label>Price ($)</Label>
                  <Input type="number" placeholder="70" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Image URL</Label>
                <Input placeholder="https://..." />
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

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 bg-white border-gray-200"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} className="bg-white border-gray-100 overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {!service.active && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    Inactive
                  </span>
                </div>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <MoreVertical className="h-4 w-4 text-gray-600" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="cursor-pointer">
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-red-600">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{service.name}</h3>
                <span className="text-lg font-semibold text-[#BF994C]">${service.price}</span>
              </div>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">{service.description}</p>
              <div className="flex items-center gap-2 text-gray-500">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{service.duration} mins</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No services found matching your search.</p>
        </div>
      )}
    </div>
  );
}
