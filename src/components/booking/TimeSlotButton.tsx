import { TimeSlot } from '@/types/booking';
import { cn } from '@/lib/utils';

interface TimeSlotButtonProps {
  slot: TimeSlot;
  isSelected: boolean;
  onSelect: () => void;
}

export function TimeSlotButton({ slot, isSelected, onSelect }: TimeSlotButtonProps) {
  return (
    <button
      onClick={onSelect}
      disabled={!slot.available}
      className={cn(
        'px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
        'border',
        slot.available
          ? isSelected
            ? 'bg-[#5B6B4E] text-white border-[#5B6B4E]'
            : 'bg-white text-gray-700 border-gray-200 hover:border-[#5B6B4E] hover:bg-[#5B6B4E]/5'
          : 'bg-gray-50 text-gray-300 border-transparent cursor-not-allowed'
      )}
    >
      {slot.start}-{slot.end}
    </button>
  );
}
