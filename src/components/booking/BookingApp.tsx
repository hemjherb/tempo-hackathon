import { BookingProvider, useBooking } from '@/context/BookingContext';
import { Header } from './Header';
import { SelectServices } from './SelectServices';
import { PickDateTime } from './PickDateTime';
import { YourDetails } from './YourDetails';
import { BookingSuccess } from './BookingSuccess';
import { motion, AnimatePresence } from 'framer-motion';

function BookingContent() {
  const { currentStep } = useBooking();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="overflow-hidden">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <SelectServices />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <PickDateTime />
            </motion.div>
          )}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <YourDetails />
            </motion.div>
          )}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <BookingSuccess />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export function BookingApp() {
  return (
    <BookingProvider>
      <BookingContent />
    </BookingProvider>
  );
}
