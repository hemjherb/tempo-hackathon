import { BookingProvider, useBooking } from '@/context/BookingContext';
import { Header } from './Header';
import { SelectServices } from './SelectServices';
import { PickDateTime } from './PickDateTime';
import { YourDetails } from './YourDetails';
import { BookingSuccess } from './BookingSuccess';

function BookingContent() {
  const { currentStep } = useBooking();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {currentStep === 1 && <SelectServices />}
        {currentStep === 2 && <PickDateTime />}
        {currentStep === 3 && <YourDetails />}
        {currentStep === 4 && <BookingSuccess />}
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
