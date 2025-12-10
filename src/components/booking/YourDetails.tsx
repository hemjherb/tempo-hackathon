import { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, User, Calendar as CalendarIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { StickyFooter } from "./StickyFooter";
import { motion, AnimatePresence } from "framer-motion";
import { PriceDisplay } from "./PriceDisplay";

const treats = [
  {
    id: "1",
    name: "Water",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80",
  },
  {
    id: "2",
    name: "Wine",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
  },
];

export function YourDetails() {
  const {
    bookingState,
    setCustomerDetails,
    setCurrentStep,
    getTotalPrice,
    getTotalDuration,
  } = useBooking();
  const {
    selectedServices,
    selectedDate,
    selectedTimeSlot,
    customerDetails,
    stylist,
    location,
  } = bookingState;

  const [formData, setFormData] = useState({
    ...customerDetails,
    stylist: stylist || "",
    specialRequest: "",
  });
  const [selectedTreat, setSelectedTreat] = useState<string | null>(null);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
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

  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#FFFBF2] pb-24">
      <div className="max-w-6xl mx-auto w-full px-6 pb-8">
        {/* Header with title and progress bar */}
        <div className="flex items-start justify-between mb-8">
          <h2 className="text-3xl font-display text-gray-800">Your Details</h2>

          {/* Progress bar */}
          <div className="hidden lg:flex items-center gap-3 pt-2">
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#5B6B4E] rounded-full" 
                initial={{ width: "50%" }}
                animate={{ width: "75%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Form */}
          <div className="w-full lg:w-[50%]">
            <motion.div 
              className="p-8 rounded-3xl space-y-6"
              variants={formVariants}
              initial="hidden"
              animate="show"
            >
              <div className="space-y-4">
                <motion.div variants={itemVariants}>
                  <Label
                    htmlFor="name"
                    className="text-base font-medium text-gray-500 mb-2 block"
                  >
                    Full Name
                  </Label>
                  <motion.div
                    animate={errors.name ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className={cn(
                        "h-14 bg-[#FFF8E7] border border-zinc-200 rounded-lg text-base px-4 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#5B6B4E] transition-colors duration-200",
                        errors.name && "ring-1 ring-red-500 bg-red-50",
                      )}
                    />
                  </motion.div>
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Label
                    htmlFor="email"
                    className="text-base font-medium text-gray-500 mb-2 block"
                  >
                    Email
                  </Label>
                  <motion.div
                    animate={errors.email ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="@email.com"
                      className={cn(
                        "h-14 bg-[#FFF8E7] border border-zinc-200 rounded-lg text-base px-4 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#5B6B4E] transition-colors duration-200",
                        errors.email && "ring-1 ring-red-500 bg-red-50",
                      )}
                    />
                  </motion.div>
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Label
                    htmlFor="phone"
                    className="text-base font-medium text-gray-500 mb-2 block"
                  >
                    Phone Number
                  </Label>
                  <motion.div
                    animate={errors.phone ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+12345676543"
                      className={cn(
                        "h-14 bg-[#FFF8E7] border border-zinc-200 rounded-lg text-base px-4 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#5B6B4E] transition-colors duration-200",
                        errors.phone && "ring-1 ring-red-500 bg-red-50",
                      )}
                    />
                  </motion.div>
                  {errors.phone && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Label
                    htmlFor="stylist"
                    className="text-base font-medium text-gray-500 mb-2 block"
                  >
                    Stylist
                  </Label>
                  <Select
                    value={formData.stylist}
                    onValueChange={(value) =>
                      setFormData({ ...formData, stylist: value })
                    }
                  >
                    <SelectTrigger className="h-14 bg-[#FFF8E7] border border-zinc-200 rounded-lg text-base px-4 text-gray-500 focus:ring-1 focus:ring-[#5B6B4E]">
                      <SelectValue placeholder="Select Stylist" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="John Doe">John Doe</SelectItem>
                      <SelectItem value="Jane Smith">Jane Smith</SelectItem>
                      <SelectItem value="Any Stylist">Any Stylist</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>

              {/* Treats */}
              <motion.div variants={itemVariants}>
                <Label className="text-base font-medium text-gray-500 mb-4 block">
                  Select Treat
                </Label>
                <div className="grid grid-cols-2 gap-6">
                  {treats.map((treat) => (
                    <motion.div
                      key={treat.id}
                      onClick={() =>
                        setSelectedTreat(
                          treat.id === selectedTreat ? null : treat.id,
                        )
                      }
                      whileHover={{ scale: 1.05, y: -4, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "cursor-pointer rounded-t-[100px] overflow-hidden transition-all duration-300",
                        selectedTreat === treat.id
                          ? "ring-2 ring-[#5B6B4E] ring-offset-2"
                          : "",
                      )}
                    >
                      <div className="aspect-[4/5] relative">
                        <img
                          src={treat.image}
                          alt={treat.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-[#4A5D4F] p-4">
                          <p className="text-white text-lg font-medium">
                            {treat.name}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Label
                  htmlFor="specialRequest"
                  className="text-base font-medium text-gray-500 mb-2 block"
                >
                  Special Request (Optional)
                </Label>
                <Input
                  id="specialRequest"
                  value={formData.specialRequest}
                  onChange={(e) =>
                    setFormData({ ...formData, specialRequest: e.target.value })
                  }
                  placeholder="+12345676543"
                  className="h-14 bg-[#FFF8E7] border border-zinc-200 rounded-lg text-base px-4 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#5B6B4E]"
                />
              </motion.div>

              <Button
                onClick={handleSubmit}
                className="hidden w-full bg-[#BF994C] hover:bg-[#A8824A] hover:scale-[1.01] text-white py-6 text-base font-medium rounded-lg mt-4 transition-all"
              >
                Request Payment
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Appointment Details */}
          <motion.div 
            className="hidden lg:block w-[50%]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="sticky top-8">
              {/* Appointment card with SVG background */}
              <div className="relative min-h-[500px] rounded-3xl overflow-hidden">
                {/* Background SVG */}
                <img
                  src="/images/appointment.svg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="space-y-4 w-full max-w-xs">
                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                        SERVICE
                      </p>
                      <h4 className="text-xl font-display text-[#F4F4F6]">
                        {selectedService?.name || "Select a service"}
                      </h4>
                    </div>

                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                        DURATION
                      </p>
                      <p className="text-lg text-[#F4F4F6]">
                        {getTotalDuration()}mins
                      </p>
                    </div>

                    <div className="border-b border-[#F4F4F6]/20 pb-4">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                        DATE & TIME
                      </p>
                      {selectedDate && selectedTimeSlot ? (
                        <p className="text-lg text-[#F4F4F6]">
                          {selectedDate.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          at {selectedTimeSlot.start}
                        </p>
                      ) : (
                        <p className="text-lg text-[#F4F4F6]/50">
                          _________________
                        </p>
                      )}
                    </div>

                    <motion.div 
                      className="border-b border-[#F4F4F6]/20 pb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                        STYLIST
                      </p>
                      <p className="text-lg text-[#F4F4F6]">{stylist}</p>
                    </motion.div>

                    <motion.div 
                      className="border-b border-[#F4F4F6]/20 pb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                        LOCATION
                      </p>
                      <p className="text-lg text-[#F4F4F6]">{location}</p>
                    </motion.div>

                    <div className="pt-2">
                      <p className="text-xs text-[#F4F4F6]/60 uppercase tracking-wider mb-1">
                        TOTAL
                      </p>
                      <span className="bg-[#BF994C] text-white font-display text-2xl px-4 py-2 rounded-lg inline-block">
                        <PriceDisplay price={getTotalPrice()} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
