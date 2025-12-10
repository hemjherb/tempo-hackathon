import { useState } from 'react';
import { 
  User,
  Building,
  Clock,
  Bell,
  CreditCard,
  Shield,
  Palette,
  Save,
  Crown,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

export function AdminSettings() {
  const [businessSettings, setBusinessSettings] = useState({
    name: 'Serenity Spa & Wellness',
    email: 'contact@serenityspa.com',
    phone: '(555) 123-4567',
    address: '123 Wellness Street, Suite 100',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    description: 'Premium spa and wellness center offering a variety of massage and relaxation services.',
  });

  const [scheduleSettings, setScheduleSettings] = useState({
    openTime: '09:00',
    closeTime: '20:00',
    slotDuration: '30',
    bufferTime: '15',
    maxAdvanceBooking: '30',
    minAdvanceBooking: '2',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailConfirmation: true,
    smsReminder: true,
    reminderTime: '24',
    adminNewBooking: true,
    adminCancellation: true,
    marketingEmails: false,
  });

  const [paymentSettings, setPaymentSettings] = useState({
    currency: 'USD',
    depositRequired: true,
    depositPercentage: '25',
    cancellationPolicy: '24',
    refundPolicy: 'partial',
  });

  const handleSave = () => {
    // Dummy save - just show alert
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-1">Manage your business preferences</p>
        </div>
        <Button onClick={handleSave} className="bg-[#BF994C] hover:bg-[#A8824A] text-white">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="business" className="space-y-6">
        <TabsList className="bg-white border border-gray-200 p-1">
          <TabsTrigger value="business" className="data-[state=active]:bg-[#414e36] data-[state=active]:text-white">
            <Building className="h-4 w-4 mr-2" />
            Business
          </TabsTrigger>
          <TabsTrigger value="schedule" className="data-[state=active]:bg-[#414e36] data-[state=active]:text-white">
            <Clock className="h-4 w-4 mr-2" />
            Schedule
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-[#414e36] data-[state=active]:text-white">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="payments" className="data-[state=active]:bg-[#414e36] data-[state=active]:text-white">
            <CreditCard className="h-4 w-4 mr-2" />
            Payments
          </TabsTrigger>
          <TabsTrigger value="subscription" className="data-[state=active]:bg-[#414e36] data-[state=active]:text-white">
            <Crown className="h-4 w-4 mr-2" />
            Subscription
          </TabsTrigger>
        </TabsList>

        {/* Business Settings */}
        <TabsContent value="business">
          <Card className="bg-white border-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-[#BF994C]" />
                Business Information
              </CardTitle>
              <CardDescription>Update your business details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Business Name</Label>
                  <Input
                    value={businessSettings.name}
                    onChange={(e) => setBusinessSettings({ ...businessSettings, name: e.target.value })}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input
                    type="email"
                    value={businessSettings.email}
                    onChange={(e) => setBusinessSettings({ ...businessSettings, email: e.target.value })}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input
                    value={businessSettings.phone}
                    onChange={(e) => setBusinessSettings({ ...businessSettings, phone: e.target.value })}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Street Address</Label>
                  <Input
                    value={businessSettings.address}
                    onChange={(e) => setBusinessSettings({ ...businessSettings, address: e.target.value })}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input
                    value={businessSettings.city}
                    onChange={(e) => setBusinessSettings({ ...businessSettings, city: e.target.value })}
                    className="h-11"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>State</Label>
                    <Input
                      value={businessSettings.state}
                      onChange={(e) => setBusinessSettings({ ...businessSettings, state: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>ZIP Code</Label>
                    <Input
                      value={businessSettings.zip}
                      onChange={(e) => setBusinessSettings({ ...businessSettings, zip: e.target.value })}
                      className="h-11"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Business Description</Label>
                <Textarea
                  value={businessSettings.description}
                  onChange={(e) => setBusinessSettings({ ...businessSettings, description: e.target.value })}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-100 mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-[#BF994C]" />
                Admin Account
              </CardTitle>
              <CardDescription>Manage your admin account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Admin Name</Label>
                  <Input defaultValue="Admin User" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label>Admin Email</Label>
                  <Input type="email" defaultValue="admin@serenityspa.com" className="h-11" />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Change Password</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Current Password</Label>
                    <Input type="password" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label>New Password</Label>
                    <Input type="password" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label>Confirm Password</Label>
                    <Input type="password" className="h-11" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Schedule Settings */}
        <TabsContent value="schedule">
          <Card className="bg-white border-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#BF994C]" />
                Business Hours
              </CardTitle>
              <CardDescription>Set your operating hours and booking preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Opening Time</Label>
                  <Input
                    type="time"
                    value={scheduleSettings.openTime}
                    onChange={(e) => setScheduleSettings({ ...scheduleSettings, openTime: e.target.value })}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Closing Time</Label>
                  <Input
                    type="time"
                    value={scheduleSettings.closeTime}
                    onChange={(e) => setScheduleSettings({ ...scheduleSettings, closeTime: e.target.value })}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Time Slot Duration (minutes)</Label>
                  <Select
                    value={scheduleSettings.slotDuration}
                    onValueChange={(value) => setScheduleSettings({ ...scheduleSettings, slotDuration: value })}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Buffer Time Between Appointments (minutes)</Label>
                  <Select
                    value={scheduleSettings.bufferTime}
                    onValueChange={(value) => setScheduleSettings({ ...scheduleSettings, bufferTime: value })}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No buffer</SelectItem>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Maximum Advance Booking (days)</Label>
                  <Input
                    type="number"
                    value={scheduleSettings.maxAdvanceBooking}
                    onChange={(e) => setScheduleSettings({ ...scheduleSettings, maxAdvanceBooking: e.target.value })}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Minimum Advance Booking (hours)</Label>
                  <Input
                    type="number"
                    value={scheduleSettings.minAdvanceBooking}
                    onChange={(e) => setScheduleSettings({ ...scheduleSettings, minAdvanceBooking: e.target.value })}
                    className="h-11"
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Working Days</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div key={day} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">{day}</span>
                      <Switch defaultChecked={day !== 'Sunday'} />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <Card className="bg-white border-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-[#BF994C]" />
                Customer Notifications
              </CardTitle>
              <CardDescription>Configure how customers receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Email Confirmation</p>
                    <p className="text-sm text-gray-500">Send confirmation email after booking</p>
                  </div>
                  <Switch
                    checked={notificationSettings.emailConfirmation}
                    onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, emailConfirmation: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">SMS Reminder</p>
                    <p className="text-sm text-gray-500">Send SMS reminder before appointment</p>
                  </div>
                  <Switch
                    checked={notificationSettings.smsReminder}
                    onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, smsReminder: checked })}
                  />
                </div>
                {notificationSettings.smsReminder && (
                  <div className="ml-4 space-y-2">
                    <Label>Reminder Time (hours before)</Label>
                    <Select
                      value={notificationSettings.reminderTime}
                      onValueChange={(value) => setNotificationSettings({ ...notificationSettings, reminderTime: value })}
                    >
                      <SelectTrigger className="w-48 h-11">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hour</SelectItem>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="4">4 hours</SelectItem>
                        <SelectItem value="24">24 hours</SelectItem>
                        <SelectItem value="48">48 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Marketing Emails</p>
                    <p className="text-sm text-gray-500">Send promotional emails to customers</p>
                  </div>
                  <Switch
                    checked={notificationSettings.marketingEmails}
                    onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, marketingEmails: checked })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-100 mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#BF994C]" />
                Admin Notifications
              </CardTitle>
              <CardDescription>Configure notifications for admin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">New Booking Alert</p>
                  <p className="text-sm text-gray-500">Get notified when a new booking is made</p>
                </div>
                <Switch
                  checked={notificationSettings.adminNewBooking}
                  onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, adminNewBooking: checked })}
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Cancellation Alert</p>
                  <p className="text-sm text-gray-500">Get notified when a booking is cancelled</p>
                </div>
                <Switch
                  checked={notificationSettings.adminCancellation}
                  onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, adminCancellation: checked })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payments">
          <Card className="bg-white border-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-[#BF994C]" />
                Payment Configuration
              </CardTitle>
              <CardDescription>Manage payment and pricing settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Currency</Label>
                  <Select
                    value={paymentSettings.currency}
                    onValueChange={(value) => setPaymentSettings({ ...paymentSettings, currency: value })}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="CAD">CAD ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Cancellation Policy (hours notice required)</Label>
                  <Select
                    value={paymentSettings.cancellationPolicy}
                    onValueChange={(value) => setPaymentSettings({ ...paymentSettings, cancellationPolicy: value })}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12 hours</SelectItem>
                      <SelectItem value="24">24 hours</SelectItem>
                      <SelectItem value="48">48 hours</SelectItem>
                      <SelectItem value="72">72 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Require Deposit</p>
                    <p className="text-sm text-gray-500">Require a deposit when booking</p>
                  </div>
                  <Switch
                    checked={paymentSettings.depositRequired}
                    onCheckedChange={(checked) => setPaymentSettings({ ...paymentSettings, depositRequired: checked })}
                  />
                </div>
                {paymentSettings.depositRequired && (
                  <div className="ml-4 space-y-2">
                    <Label>Deposit Percentage</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        value={paymentSettings.depositPercentage}
                        onChange={(e) => setPaymentSettings({ ...paymentSettings, depositPercentage: e.target.value })}
                        className="w-24 h-11"
                      />
                      <span className="text-gray-500">%</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Refund Policy</Label>
                <Select
                  value={paymentSettings.refundPolicy}
                  onValueChange={(value) => setPaymentSettings({ ...paymentSettings, refundPolicy: value })}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full refund</SelectItem>
                    <SelectItem value="partial">Partial refund (minus deposit)</SelectItem>
                    <SelectItem value="credit">Store credit only</SelectItem>
                    <SelectItem value="none">No refunds</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-100 mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-[#BF994C]" />
                Appearance
              </CardTitle>
              <CardDescription>Customize the look of your booking page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#BF994C] border border-gray-200" />
                    <Input defaultValue="#BF994C" className="h-11 font-mono" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#414e36] border border-gray-200" />
                    <Input defaultValue="#414e36" className="h-11 font-mono" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Subscription Settings */}
        <TabsContent value="subscription">
          <Card className="bg-white border-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ fontFamily: "'Gloock', serif" }}>
                <Crown className="h-5 w-5 text-[#BF994C]" />
                Your Subscription
              </CardTitle>
              <CardDescription>Manage your subscription plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Plan */}
              <div className="bg-[#FFF8E7] rounded-xl p-6 border-2 border-[#BF994C]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#BF994C] flex items-center justify-center">
                      <Crown className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-normal text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>Professional</p>
                      <p className="text-sm text-gray-500">Current Plan</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-normal text-[#1a1a1a]" style={{ fontFamily: "'Gloock', serif" }}>$19.00</p>
                    <p className="text-sm text-gray-500">/ month</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">For growing businesses</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                    <Check className="h-4 w-4 mr-1" />
                    Active
                  </span>
                  <span className="text-sm text-gray-500">Next billing: Feb 15, 2024</span>
                </div>
              </div>

              {/* Plan Features */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4" style={{ fontFamily: "'Gloock', serif" }}>Plan Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-[#FAFBF9] rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Unlimited bookings</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FAFBF9] rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Unlimited services</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FAFBF9] rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">SMS reminders <span className="text-xs text-gray-400">(coming soon)</span></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FAFBF9] rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Custom branding</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FAFBF9] rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Advanced analytics</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FAFBF9] rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Priority support</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FAFBF9] rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">No-show tracking</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FAFBF9] rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Export data</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Billing Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1 border-gray-300">
                  View Billing History
                </Button>
                <Button variant="outline" className="flex-1 border-gray-300">
                  Update Payment Method
                </Button>
                <Button variant="outline" className="flex-1 border-red-200 text-red-600 hover:bg-red-50">
                  Cancel Subscription
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
