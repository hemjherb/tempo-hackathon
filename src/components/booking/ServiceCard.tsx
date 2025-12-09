import { Check, Clock } from 'lucide-react';
import { Service } from '@/types/booking';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onToggle: () => void;
  showLimitedSlots?: boolean;
}

export function ServiceCard({ service, isSelected, onToggle, showLimitedSlots = false }: ServiceCardProps) {
  return (
    <div
      onClick={onToggle}
      className={cn(
        'relative overflow-hidden cursor-pointer transition-all duration-200 group',
        'border-2 border-[#E5E5E5] rounded-t-2xl rounded-b-none',
        'hover:shadow-lg hover:border-[#D5D5D5]',
        isSelected && 'ring-2 ring-[#5B6B4E] ring-offset-2'
      )}
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden rounded-t-[14px]">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Limited slots badge */}
        {showLimitedSlots && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#5B6B4E]/90 text-white text-xs font-medium px-3 py-1 rounded-full">
              limited slots
            </span>
          </div>
        )}
        
        {/* Selection checkmark */}
        {isSelected && (
          <div className="absolute top-3 right-3 bg-[#5B6B4E] rounded-full p-1.5 shadow-lg">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
        
        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-white font-display text-lg">{service.name}</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <Clock className="w-3.5 h-3.5 text-white/80" />
                <span className="text-white/80 text-sm">{service.duration}mins</span>
              </div>
            </div>
            
            {/* Price badge - Gold pill */}
            <span className="bg-[#BF994C] text-white font-display text-lg px-3 py-1 rounded-full">
              ${service.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
