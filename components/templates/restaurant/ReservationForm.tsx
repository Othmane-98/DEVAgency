'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const reservationSchema = z.object({
  date: z.string().min(1, "La date est requise"),
  time: z.string().min(1, "L'heure est requise"),
  guests: z.string().min(1, "Le nombre de convives est requis"),
  firstName: z.string().min(2, "Le prénom est trop court"),
  lastName: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  notes: z.string().optional(),
});

type ReservationData = z.infer<typeof reservationSchema>;

export function ReservationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ReservationData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: "2",
    }
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof ReservationData)[] = [];
    if (step === 1) fieldsToValidate = ['date', 'time', 'guests'];
    if (step === 2) fieldsToValidate = ['firstName', 'lastName', 'email', 'phone'];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const onSubmit = async (data: ReservationData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (Math.random() > 0.8) {
      setSubmitError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      setIsSubmitting(false);
    } else {
      console.log("Reservation Data:", data);
      setIsSubmitting(false);
      setStep(4);
    }
  };

  return (
    <div className="bg-[#121212] p-8 md:p-12 border border-[#C5A059]/30 relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C5A059]/50" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C5A059]/50" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#C5A059]/50" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C5A059]/50" />

      {/* Progress Indicator */}
      {step < 4 && (
        <div className="flex justify-between items-center mb-12 relative max-w-sm mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#333] -z-10 -translate-y-1/2" />
          <div 
            className="absolute top-1/2 left-0 h-[1px] bg-[#C5A059] -z-10 -translate-y-1/2 transition-all duration-500"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
          {[1, 2, 3].map((num) => (
            <div 
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-serif text-sm transition-colors duration-300 ${
                step >= num ? 'bg-[#C5A059] text-[#121212]' : 'bg-[#1A1A1A] text-[#E5D1B0] border border-[#333]'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-widest text-[#E5D1B0] mb-2 font-medium">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C5A059] w-5 h-5" />
                  <input 
                    {...register("date")}
                    type="date" 
                    className={`w-full bg-[#1A1A1A] border ${errors.date ? 'border-red-500' : 'border-[#333]'} text-[#F9F9F9] focus:outline-none focus:border-[#C5A059] pl-12 pr-4 py-3 font-mono cursor-pointer transition-colors`} 
                  />
                </div>
                {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>}
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-[#E5D1B0] mb-2 font-medium">Heure</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C5A059] w-5 h-5" />
                  <select 
                    {...register("time")}
                    className={`w-full bg-[#1A1A1A] border ${errors.time ? 'border-red-500' : 'border-[#333]'} text-[#F9F9F9] focus:outline-none focus:border-[#C5A059] pl-12 pr-4 py-3 font-mono cursor-pointer transition-colors appearance-none`}
                  >
                    <option value="">Sélectionnez</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
                {errors.time && <p className="mt-1 text-xs text-red-500">{errors.time.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-[#E5D1B0] mb-2 font-medium">Nombre de Convives</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C5A059] w-5 h-5" />
                <select 
                  {...register("guests")}
                  className="w-full bg-[#1A1A1A] border border-[#333] text-[#F9F9F9] focus:outline-none focus:border-[#C5A059] pl-12 pr-4 py-3 font-mono cursor-pointer transition-colors appearance-none"
                >
                  <option value="2">2 Personnes</option>
                  <option value="3">3 Personnes</option>
                  <option value="4">4 Personnes</option>
                  <option value="5">5 Personnes</option>
                  <option value="6">6 Personnes</option>
                  <option value="groupe">Groupe (7+)</option>
                </select>
              </div>
            </div>
            <button onClick={nextStep} type="button" className="w-full bg-[#C5A059] text-[#121212] font-semibold tracking-widest uppercase py-4 hover:bg-[#D4AF68] transition-colors">
              Continuer
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-widest text-[#E5D1B0] mb-2 font-medium">Prénom</label>
                <input 
                  {...register("firstName")}
                  type="text" 
                  className={`w-full bg-[#1A1A1A] border ${errors.firstName ? 'border-red-500' : 'border-[#333]'} text-[#F9F9F9] focus:outline-none focus:border-[#C5A059] px-4 py-3 font-mono transition-colors`} 
                />
                {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-[#E5D1B0] mb-2 font-medium">Nom</label>
                <input 
                  {...register("lastName")}
                  type="text" 
                  className={`w-full bg-[#1A1A1A] border ${errors.lastName ? 'border-red-500' : 'border-[#333]'} text-[#F9F9F9] focus:outline-none focus:border-[#C5A059] px-4 py-3 font-mono transition-colors`} 
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-[#E5D1B0] mb-2 font-medium">Email</label>
              <input 
                {...register("email")}
                type="email" 
                className={`w-full bg-[#1A1A1A] border ${errors.email ? 'border-red-500' : 'border-[#333]'} text-[#F9F9F9] focus:outline-none focus:border-[#C5A059] px-4 py-3 font-mono transition-colors`} 
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-[#E5D1B0] mb-2 font-medium">Téléphone</label>
              <input 
                {...register("phone")}
                type="tel" 
                className={`w-full bg-[#1A1A1A] border ${errors.phone ? 'border-red-500' : 'border-[#333]'} text-[#F9F9F9] focus:outline-none focus:border-[#C5A059] px-4 py-3 font-mono transition-colors`} 
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>
            <div className="flex gap-4">
              <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-transparent border border-[#C5A059] text-[#C5A059] font-semibold tracking-widest uppercase py-4 hover:bg-[#C5A059]/10 transition-colors">
                Retour
              </button>
              <button onClick={nextStep} type="button" className="w-2/3 bg-[#C5A059] text-[#121212] font-semibold tracking-widest uppercase py-4 hover:bg-[#D4AF68] transition-colors">
                Continuer
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.form 
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm uppercase tracking-widest text-[#E5D1B0] mb-2 font-medium">Demandes Spéciales / Allergies</label>
              <textarea 
                {...register("notes")}
                rows={4} 
                className="w-full bg-[#1A1A1A] border border-[#333] text-[#F9F9F9] focus:outline-none focus:border-[#C5A059] px-4 py-3 font-mono transition-colors resize-none placeholder:text-[#333]" 
                placeholder="Une intolérance, un événement à célébrer..."
              />
            </div>
            
            <div className="flex gap-4">
              <button type="button" onClick={() => setStep(2)} className="w-1/3 bg-transparent border border-[#C5A059] text-[#C5A059] font-semibold tracking-widest uppercase py-4 hover:bg-[#C5A059]/10 transition-colors" disabled={isSubmitting}>
                Retour
              </button>
              <button type="submit" className="w-2/3 bg-[#C5A059] text-[#121212] font-semibold tracking-widest uppercase py-4 hover:bg-[#D4AF68] transition-colors flex items-center justify-center" disabled={isSubmitting}>
                {isSubmitting ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-[#121212] border-t-transparent rounded-full" />
                ) : (
                  <span>Confirmer la Réservation</span>
                )}
              </button>
            </div>
            {submitError && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="p-4 bg-red-900/30 border border-red-500/50 text-red-200 text-sm text-center rounded flex items-center justify-center gap-2"
              >
                <AlertCircle className="w-4 h-4" />
                {submitError}
              </motion.div>
            )}
          </motion.form>
        )}

        {step === 4 && (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C5A059]/20 mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
            </div>
            <h3 className="text-3xl font-serif text-[#F9F9F9] mb-4">Demande Confirmée</h3>
            <p className="text-[#E5D1B0] font-light max-w-sm mx-auto">
              Nous avons bien reçu votre demande. Un e-mail de confirmation vient de vous être envoyé. Au plaisir de vous recevoir.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
