import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface StickyFooterProps {
  onProceed: () => void;
  onBack?: () => void;
  proceedLabel?: string;
  backLabel?: string;
  canProceed?: boolean;
  showBack?: boolean;
}

export function StickyFooter({
  onProceed,
  onBack,
  proceedLabel = 'Proceed',
  backLabel = 'Back',
  canProceed = true,
  showBack = false,
}: StickyFooterProps) {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 bg-[#FFFBF2] border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex gap-4">
          {showBack && onBack && (
            <Button
              onClick={onBack}
              variant="outline"
              className="flex-1 py-6 text-base font-medium rounded-lg border-gray-200"
            >
              {backLabel}
            </Button>
          )}
          <motion.button
            onClick={onProceed}
            disabled={!canProceed}
            animate={{
              backgroundColor: canProceed ? "#BF994C" : "#CCCCCC",
              scale: canProceed ? [1, 1.02, 1] : 1,
            }}
            whileHover={canProceed ? { y: -2, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" } : {}}
            whileTap={canProceed ? { scale: 0.95 } : {}}
            transition={{ duration: 0.3 }}
            className={cn(
              "flex-1 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-center",
              canProceed
                ? "text-white"
                : "text-white/70 cursor-not-allowed"
            )}
          >
            {proceedLabel}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
