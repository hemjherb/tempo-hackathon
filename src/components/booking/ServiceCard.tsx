import { Clock } from 'lucide-react';
import { Service } from '@/types/booking';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onToggle: () => void;
  showLimitedSlots?: boolean;
}

export function ServiceCard({ service, isSelected, onToggle }: ServiceCardProps) {
  return (
    <div
      onClick={onToggle}
      className={cn(
        'relative flex flex-col cursor-pointer transition-all duration-300 group',
        'rounded-t-[500px] rounded-b-none overflow-hidden',
        isSelected ? 'ring-4 ring-[#BF994C] ring-offset-2' : 'hover:shadow-xl'
      )}
    >
      {/* Image Section */}
      <div className="h-56 relative overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="bg-[#414e36] p-5">
        <div className="flex items-baseline justify-between mb-1">
          <h3 className="text-white text-lg font-medium leading-tight">
            {service.name}
          </h3>
          <span className="text-white font-display text-xl">
            ${service.price}
          </span>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-sm">{service.duration}mins</span>
        </div>
      </div>
    </div>
  );
}
