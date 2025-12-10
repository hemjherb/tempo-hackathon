import { TimeSlot } from '@/types/booking';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TimeSlotButtonProps {
  slot: TimeSlot;
  isSelected: boolean;
  onSelect: () => void;
  index?: number;
}

export function TimeSlotButton({ slot, isSelected, onSelect, index = 0 }: TimeSlotButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={slot.available ? { scale: 1.05, backgroundColor: isSelected ? "#5B6B4E" : "rgba(91, 107, 78, 0.1)" } : {}}
      whileTap={slot.available ? { scale: 0.95 } : {}}
      onClick={onSelect}
      disabled={!slot.available}
      className={cn(
        'px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200',
        'border',
        slot.available
          ? isSelected
            ? 'bg-[#5B6B4E] text-white border-[#5B6B4E]'
            : 'bg-white text-gray-700 border-gray-200'
          : 'bg-gray-50 text-gray-300 border-transparent cursor-not-allowed'
      )}
    >
      {slot.start}-{slot.end}
    </motion.button>
  );
}
