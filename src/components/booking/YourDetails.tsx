import { useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Clock, MapPin, User, Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StickyFooter } from './StickyFooter';

const products = [
  {
    id: '1',
    name: 'Smooth Repair Shampoo',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80',
  },
  {
    id: '2',
    name: 'Hydrating Conditioner',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&q=80',
  },
  {
    id: '3',
    name: 'Hair Styling Gel',
    image: 'https://images.unsplash.com/photo-1597854710119-c6e48e8c1e2e?w=400&q=80',
  },
  {
    id: '4',
    name: 'Nourishing Hair Oil',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&q=80',
  },
];

export function YourDetails() {
  const { bookingState, setCustomerDetails, setCurrentStep, getTotalPrice, getTotalDuration } = useBooking();
  const { selectedServices, selectedDate, selectedTimeSlot, customerDetails, stylist, location } = bookingState;

  const [formData, setFormData] = useState(customerDetails);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setCustomerDetails(formData);
      setCurrentStep(4);
    }
  };

  const selectedService = selectedServices[0];

  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#FFFBF2] pb-24">
      <div className="max-w-6xl mx-auto w-full px-6 pb-8">
        {/* Header with title and progress bar */}
        <div className="flex items-start justify-between mb-8">
          <h2 className="text-3xl font-display text-gray-800">
            Your Details
          </h2>
          
          {/* Progress bar */}
          <div className="hidden lg:flex items-center gap-3 pt-2">
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-[#5B6B4E] rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Form */}
          <div className="w-full lg:w-[50%]">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className={cn(
                      "mt-1.5 rounded-lg border-gray-200 focus:border-[#5B6B4E] focus:ring-[#5B6B4E]",
                      errors.name && 'border-red-500'
                    )}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className={cn(
                      "mt-1.5 rounded-lg border-gray-200 focus:border-[#5B6B4E] focus:ring-[#5B6B4E]",
                      errors.email && 'border-red-500'
                    )}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className={cn(
                      "mt-1.5 rounded-lg border-gray-200 focus:border-[#5B6B4E] focus:ring-[#5B6B4E]",
                      errors.phone && 'border-red-500'
                    )}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <Button
                  onClick={handleSubmit}
                  className="hidden w-full bg-[#BF994C] hover:bg-[#A8824A] hover:scale-[1.01] text-white py-6 text-base font-medium rounded-lg mt-4 transition-all"
                >
                  Request Payment
                </Button>
              </div>
            </div>

            {/* Back Button - Hidden, using sticky footer instead */}

            {/* Product Recommendations */}
            <div className="mt-8">
              <h3 className="font-display text-lg mb-4 text-gray-800">Recommended Products</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-36 bg-white rounded-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="aspect-square bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-700 line-clamp-2">{product.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Appointment Details */}
          <div className="hidden lg:block w-[50%]">
            <div className="sticky top-8 h-[calc(100vh-120px)]">
              {/* Appointment card with SVG background */}
              <div className="relative h-full rounded-3xl overflow-hidden">
                {/* Background SVG */}
                <img 
                  src="/images/appointment.svg" 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="text-[#F4F4F6] font-medium text-sm uppercase tracking-wider mb-6">Appointment Details</h3>
                  
                  <div className="space-y-4 w-full max-w-xs">
                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">SERVICE</p>
                      <h4 className="text-xl font-display text-[#F4F4F6]">
                        {selectedService?.name || 'Select a service'}
                      </h4>
                    </div>
                    
                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">DURATION</p>
                      <p className="text-lg text-[#F4F4F6]">{getTotalDuration()}mins</p>
                    </div>
                    
                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">DATE & TIME</p>
                      {selectedDate && selectedTimeSlot ? (
                        <p className="text-lg text-[#F4F4F6]">
                          {selectedDate.toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                          })} at {selectedTimeSlot.start}
                        </p>
                      ) : (
                        <p className="text-lg text-[#F4F4F6]/50">_________________</p>
                      )}
                    </div>
                    
                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">STYLIST</p>
                      <p className="text-lg text-[#F4F4F6]">{stylist}</p>
                    </div>
                    
                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">LOCATION</p>
                      <p className="text-lg text-[#F4F4F6]">{location}</p>
                    </div>
                    
                    <div className="pt-2">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">TOTAL</p>
                      <span className="bg-[#BF994C] text-white font-display text-2xl px-4 py-2 rounded-lg inline-block">
                        ${getTotalPrice()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky Footer */}
      <StickyFooter
        onProceed={handleSubmit}
        onBack={() => setCurrentStep(2)}
        canProceed={true}
        showBack={true}
        proceedLabel="Request Payment"
      />
    </div>
  );
}
