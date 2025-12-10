import { Clock, Check } from 'lucide-react';
import { Service } from '@/types/booking';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onToggle: () => void;
  showLimitedSlots?: boolean;
  index?: number;
}

export function ServiceCard({ service, isSelected, onToggle, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className={cn(
        'relative flex flex-col cursor-pointer transition-all duration-300 group',
        'rounded-t-[500px] rounded-b-none overflow-hidden',
        isSelected ? 'ring-4 ring-[#BF994C] ring-offset-2' : ''
      )}
    >
      {/* Checkmark Overlay */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="absolute top-4 right-4 z-10 bg-[#BF994C] rounded-full p-1"
        >
          <Check className="w-4 h-4 text-white" />
        </motion.div>
      )}

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
    </motion.div>
  );
}
