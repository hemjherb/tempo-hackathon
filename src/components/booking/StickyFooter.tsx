import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    <div className="fixed bottom-0 left-0 right-0 bg-[#FFFBF2] border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50">
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
          <Button
            onClick={onProceed}
            disabled={!canProceed}
            className={cn(
              "flex-1 py-6 text-base font-medium rounded-lg transition-all",
              canProceed
                ? "bg-[#BF994C] hover:bg-[#A8824A] hover:scale-[1.01] text-white"
                : "bg-[#CCCCCC] text-white/70 cursor-not-allowed"
            )}
          >
            {proceedLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
