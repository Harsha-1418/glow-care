import React, { useState } from 'react';
import { SALON_SERVICES } from '../data/mockData';
import { Calendar, MapPin, CheckCircle2, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SalonBookingModal({ initialServiceCategory = null, onClose, onConfirmAppointment }) {
  const [selectedService, setSelectedService] = useState(
    SALON_SERVICES.find(s => s.category.toLowerCase().includes((initialServiceCategory || '').toLowerCase())) || SALON_SERVICES[0]
  );
  const [selectedDate, setSelectedDate] = useState('2026-09-28');
  const [selectedTime, setSelectedTime] = useState('02:30 PM');
  const [selectedStylist, setSelectedStylist] = useState('Aaria Sharma (Master Stylist)');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);

  const timeSlots = [
    '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  const stylistsList = [
    'Aaria Sharma (Master Stylist)',
    'Rohan Kapoor (Creative Colorist)',
    'Priya Sen (HD Makeup Specialist)',
    'First Available Specialist'
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = {
      id: 'GC-BOOK-' + Math.floor(100000 + Math.random() * 900000),
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      stylist: selectedStylist,
      location: 'GlowCare Flagship Salon & Spa, Bandra West, Mumbai',
      status: 'Confirmed'
    };

    setConfirmationData(bookingDetails);
    setIsConfirmed(true);

    // Confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (onConfirmAppointment) {
      onConfirmAppointment(bookingDetails);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="max-w-3xl w-full glass-modal p-6 sm:p-8 rounded-3xl border border-white/20 bg-slate-900/95 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isConfirmed ? (
          <form onSubmit={handleBookingSubmit} className="space-y-6">
            
            {/* Modal Title */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-semibold uppercase tracking-widest mb-2">
                <Calendar className="w-3.5 h-3.5" />
                Partner Salon Booking
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
                Book Your <span className="gradient-text-rose">Salon Service</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-400">
                Choose a luxury service, select your date & preferred master stylist.
              </p>
            </div>

            {/* 1. Select Service */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                1. Select Salon Service
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto pr-1">
                {SALON_SERVICES.map((serv) => (
                  <button
                    type="button"
                    key={serv.id}
                    onClick={() => setSelectedService(serv)}
                    className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                      selectedService.id === serv.id
                        ? 'bg-rose-500/20 border-rose-500 text-white shadow-lg shadow-rose-950/40'
                        : 'bg-slate-950/60 border-white/10 text-slate-300 hover:border-white/25'
                    }`}
                  >
                    <img src={serv.image} alt={serv.title} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                    <div className="truncate">
                      <p className="text-sm font-bold text-white truncate">{serv.title}</p>
                      <p className="text-xs text-rose-300 font-semibold">₹{serv.price} • {serv.duration}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Date & Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  2. Select Appointment Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white text-sm focus:border-rose-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  3. Select Preferred Stylist
                </label>
                <select
                  value={selectedStylist}
                  onChange={(e) => setSelectedStylist(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white text-sm focus:border-rose-500 focus:outline-none"
                >
                  {stylistsList.map((stylist) => (
                    <option key={stylist} value={stylist}>{stylist}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Time Slot Grid */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                4. Select Available Time Slot
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition-all text-center ${
                      selectedTime === slot
                        ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                        : 'bg-slate-950 border border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary & Submit Button */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs text-slate-400">Selected Service Total:</span>
                <p className="text-2xl font-extrabold text-white">₹{selectedService.price}</p>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-white gradient-btn-primary flex items-center justify-center gap-2 shadow-xl"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Confirm Appointment</span>
              </button>
            </div>

          </form>
        ) : (
          /* CONFIRMATION SCREEN */
          <div className="text-center space-y-6 py-6 animate-fade-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 shadow-xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-extrabold text-white font-outfit">
              ✨ Appointment Confirmed!
            </h2>

            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Your salon experience has been successfully scheduled. We have synced your Glow Plan details directly with your stylist.
            </p>

            {/* Ticket Card */}
            <div className="max-w-md mx-auto p-5 rounded-2xl glass-card border border-white/15 bg-slate-950 text-left space-y-3 font-sans-body">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-slate-400">Ref #: {confirmationData.id}</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Confirmed
                </span>
              </div>

              <div>
                <p className="text-xs text-slate-400">Service Reserved</p>
                <p className="text-base font-bold text-white">{confirmationData.service.title}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-slate-400">Date & Time</p>
                  <p className="font-semibold text-white">{confirmationData.date} • {confirmationData.time}</p>
                </div>
                <div>
                  <p className="text-slate-400">Stylist</p>
                  <p className="font-semibold text-white">{confirmationData.stylist}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="truncate">{confirmationData.location}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl font-bold text-white gradient-btn-primary mx-auto"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
