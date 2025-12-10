import { 
  Check, 
  Star, 
  Menu, 
  X, 
  ArrowRight, 
  Calendar, 
  Link as LinkIcon, 
  Globe, 
  Clock, 
  Users, 
  TrendingUp,
  Mail,
  Shield,
  Zap,
  ChevronRight,
  PlayCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 text-[#6366f1]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-[#1a1a1a]">Vello</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
            <Button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-full px-6">
              Start Free Trial
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/image.png')" }}>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          {/* Floating Elements (Decorative) */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center transform -rotate-12">
              <Mail className="w-8 h-8 text-gray-400" />
            </div>
          </div>
          <div className="absolute top-10 right-1/4 translate-x-1/2 hidden lg:block">
            <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center transform rotate-12">
              <Calendar className="w-10 h-10 text-blue-500" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl text-[#1a1a1a] mb-6 leading-tight" style={{ fontFamily: "'Gloock', serif" }}>
            Your <span className="text-[#6366f1] italic">Simple</span> Appointment<br />
            Scheduler.
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Vello helps small businesses manage bookings without chaos or missed calls.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button className="h-12 px-8 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-full text-lg">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="h-12 px-8 bg-white hover:bg-gray-50 text-gray-700 rounded-full text-lg border-gray-200">
              How it Works
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto -mb-48">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
              {/* Browser Bar */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 md:p-8 bg-[#FAFAFA]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 text-[#1a1a1a]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                      </svg>
                    </div>
                    <span className="font-bold text-xl">Vello</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="User" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-2 mb-4 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Today's Appointments</span>
                    </div>
                    <p className="text-4xl font-medium mb-1">09</p>
                    <p className="text-sm text-gray-400">Next at 2:00PM</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-2 mb-4 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">This Week's Appointments</span>
                    </div>
                    <p className="text-4xl font-medium mb-1">32</p>
                    <p className="text-sm text-green-500">+15% from last week</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-2 mb-4 text-gray-500">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">Revenue (Week)</span>
                    </div>
                    <p className="text-4xl font-medium mb-1">$1,200</p>
                    <p className="text-sm text-gray-400">Across 32 Appointments</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-medium text-gray-900">Today's Schedule</h3>
                    <Button className="bg-[#6366f1] text-white hover:bg-[#4f46e5]">
                      + Add Booking
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-50">
                      <div className="flex items-center gap-8">
                        <span className="font-medium w-20">9:00am</span>
                        <span className="text-gray-600 w-32">Haircut</span>
                        <span className="text-gray-600">Sara Johnson</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-900 font-medium">$100.00</span>
                        <span className="text-gray-500 text-sm">20mins</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button size="sm" className="bg-[#6366f1] text-white">Complete</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-5xl md:text-6xl mb-4 text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>10K+</h3>
              <p className="text-xl text-gray-500">Active Businesses</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl mb-4 text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>6</h3>
              <p className="text-xl text-gray-500">Hours Saved Per Week</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl mb-4 text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>30%</h3>
              <p className="text-xl text-gray-500">More Bookings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#6366f1] text-white text-sm font-medium mb-6">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl text-[#1a1a1a] mb-6" style={{ fontFamily: "'Gloock', serif" }}>
              Everything You Need to Manage Appointments
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional tools designed specifically for small service businesses like yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#F0FDF4] p-8 rounded-3xl">
              <div className="w-12 h-12 bg-[#DCFCE7] rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-[#16A34A]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Smart Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                See your whole schedule at a glance. View today's bookings, manage your week, and avoid double-booking with Vello's intelligent calendar system.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#F5F3FF] p-8 rounded-3xl">
              <div className="w-12 h-12 bg-[#EDE9FE] rounded-full flex items-center justify-center mb-6">
                <LinkIcon className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Custom Booking Link</h3>
              <p className="text-gray-600 leading-relaxed">
                Create a personalized booking URL for your business. Simply use vello.com/yourstorename, and clients land directly on your appointment page—easy to share, easy to remember.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#FFF7ED] p-8 rounded-3xl">
              <div className="w-12 h-12 bg-[#FFEDD5] rounded-full flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-[#EA580C]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Public Booking Page</h3>
              <p className="text-gray-600 leading-relaxed">
                Get a clean, professional booking page that works 24/7. Clients can book instantly without calling, even when you're busy or closed.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" className="h-12 px-8 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-900 border-gray-200">
              Explore More Features
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-[#0B1120] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#6366f1] text-white text-sm font-medium mb-6">
              How it Works
            </span>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Gloock', serif" }}>
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No tech experience needed. Set up your booking system and start accepting appointments in under 5 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div className="w-12 h-12 bg-gray-200 text-[#0B1120] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: "'Gloock', serif" }}>Add Your Services</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                List what you offer with pricing and duration. Takes 2 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div className="w-12 h-12 bg-gray-200 text-[#0B1120] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: "'Gloock', serif" }}>Set Your Hours</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Choose when you're available. We'll handle the scheduling logic.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div className="w-12 h-12 bg-gray-200 text-[#0B1120] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: "'Gloock', serif" }}>Share Your Link</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get a custom booking page to share with clients via social media, email, or your website.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div className="w-12 h-12 bg-gray-200 text-[#0B1120] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: "'Gloock', serif" }}>Accept Bookings</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Clients book online 24/7. You get instant notifications and a organized schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#6366f1] text-white text-sm font-medium mb-6">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl text-[#1a1a1a] mb-6" style={{ fontFamily: "'Gloock', serif" }}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="border border-gray-100 rounded-3xl p-8 bg-white hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-current" /> Starter
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>$0.00</span>
                <span className="text-gray-500">/ month</span>
              </div>
              <p className="text-gray-500 text-sm mb-8">Perfect for getting started</p>
              
              <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg mb-8 h-12">
                Start Free Trial
              </Button>

              <ul className="space-y-4">
                {[
                  'Up to 50 bookings/month',
                  'Public Booking Page',
                  'Calendar management',
                  '3 services max',
                  'Email Support',
                  'Mobile App Access'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-xl relative transform md:-translate-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 fill-current" /> Professional
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>$19.00</span>
                <span className="text-gray-500">/ month</span>
              </div>
              <p className="text-gray-500 text-sm mb-8">For growing businesses</p>
              
              <Button className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-lg mb-8 h-12">
                Start 14-Day Trial
              </Button>

              <ul className="space-y-4">
                {[
                  'Unlimited bookings',
                  'Unlimited services',
                  'SMS reminders (coming soon)',
                  'Custom branding',
                  'Advanced analytics',
                  'Priority support',
                  'No-show tracking',
                  'Export data'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Plan */}
            <div className="border border-gray-100 rounded-3xl p-8 bg-white hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-medium mb-6">
                <Globe className="w-4 h-4" /> Business
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>$39.00</span>
                <span className="text-gray-500">/ month</span>
              </div>
              <p className="text-gray-500 text-sm mb-8">For multi-location teams</p>
              
              <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg mb-8 h-12">
                Contact Sales
              </Button>

              <ul className="space-y-4">
                {[
                  'Everything in Professional',
                  'Up to 5 team members',
                  'Multiple locations',
                  'Payment processing',
                  'API access',
                  'White-label option',
                  'Dedicated account manager',
                  'Custom integrations'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#6366f1] text-white text-sm font-medium mb-6">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl text-[#1a1a1a] mb-6" style={{ fontFamily: "'Gloock', serif" }}>
              Loved by Small Business Owners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers have to say about Vello
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&q=80" 
                alt="Leo Martin" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="text-white">
                  <h4 className="text-xl font-medium mb-1" style={{ fontFamily: "'Gloock', serif" }}>Leo Martin</h4>
                  <p className="text-sm text-gray-300">Owner, HighCut Hair Salon</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" 
                alt="Leo Martin" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <p className="text-white mb-6 text-lg leading-relaxed">
                  "Vello has been a game-changer for my salon. I used to spend hours on the phone scheduling appointments. Now clients book online and I can focus on what I do best."
                </p>
                <div className="text-white">
                  <h4 className="text-xl font-medium mb-1" style={{ fontFamily: "'Gloock', serif" }}>Leo Martin</h4>
                  <p className="text-sm text-gray-300">Owner, HighCut Hair Salon</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" 
                alt="Leo Martin" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="text-white">
                  <h4 className="text-xl font-medium mb-1" style={{ fontFamily: "'Gloock', serif" }}>Leo Martin</h4>
                  <p className="text-sm text-gray-300">Owner, HighCut Hair Salon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1120] text-white pt-20 pb-10">
        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto bg-cover bg-center rounded-[3rem] overflow-hidden relative" style={{ backgroundImage: "url('/images/footer.png')" }}>
            
            <div className="relative z-10 py-24 px-6 text-center">
              <h2 className="text-4xl md:text-6xl text-[#1a1a1a] mb-6" style={{ fontFamily: "'Gloock', serif" }}>
                Ready to Stop Losing Bookings?
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Join thousands of small business owners who've simplified their scheduling with Vello.
                Start your free trial today - no credit card required.
              </p>
              <Button className="h-14 px-10 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-lg text-lg">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Vello</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Simple appointment scheduling for small businesses. Focus on your clients, we'll handle the bookings.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-6">Product</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Update</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6">Resources</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Help</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with care for small businesses</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 Vello. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
