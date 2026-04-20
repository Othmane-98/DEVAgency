"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRightIcon, AlertCircle } from "lucide-react";
import React, { useState } from "react";
import { getWhatsAppLink } from "@/lib/site-config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(3, "Le sujet est trop court"),
  message: z.string().min(10, "Le message est trop court"),
});

type ContactData = z.infer<typeof contactSchema>;

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Simulate API call
    console.log("Contact Form Data:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden pb-32">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-amber-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUpVariant}
          className="mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Contact
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Discutons de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">projet</span>.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Que ce soit pour une refonte, un logiciel CRM sur-mesure ou une simple demande de renseignements, notre équipe est là pour vous répondre.
          </p>
        </motion.div>
      </section>

      <section className="px-4 lg:px-8 max-w-7xl mx-auto">
         <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
           
           {/* Contact Information Cards */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }} 
             animate={{ opacity: 1, x: 0 }} 
             transition={{ duration: 0.7, delay: 0.2 }}
             className="space-y-6"
           >
             <h2 className="text-3xl font-bold mb-8">Informations de contact</h2>
             
             <div className="group flex items-start gap-4 p-6 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/80 transition-all hover:border-primary/50">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:contact@nexaflow.ma" className="text-muted-foreground mt-1 hover:text-primary transition-colors block">
                    contact@nexaflow.ma
                  </a>
                  <p className="text-sm text-muted-foreground/60 mt-1">Nous répondons sous 24h ouvrées.</p>
                </div>
             </div>

             <div className="group flex items-start gap-4 p-6 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/80 transition-all hover:border-primary/50">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Téléphone / WhatsApp</h3>
                  <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="text-muted-foreground mt-1 hover:text-primary transition-colors block">
                    +212 6 00 00 00 00
                  </a>
                  <p className="text-sm text-muted-foreground/60 mt-1">Du Lundi au Vendredi, 9h - 18h.</p>
                </div>
             </div>

             <div className="group flex items-start gap-4 p-6 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/80 transition-all hover:border-primary/50">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Bureaux Internationaux</h3>
                  <p className="text-muted-foreground mt-1 block">Casablanca, Maroc</p>
                  <p className="text-muted-foreground block">Paris, France</p>
                </div>
             </div>
           </motion.div>

           {/* Contact Form */}
           <motion.div 
             initial={{ opacity: 0, y: 50 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.7, delay: 0.4 }}
             className="relative"
           >
             {/* Decorative form blur */}
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-amber-500/5 rounded-[3rem] blur-xl -z-10" />

             <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 rounded-[3rem] border border-border bg-card/60 backdrop-blur-xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>
                
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="p-8 bg-green-500/10 border border-green-500/30 rounded-2xl text-center"
                  >
                    <div className="h-16 w-16 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Message envoyé avec succès !</h3>
                    <p className="text-muted-foreground">Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.</p>
                    <button type="button" onClick={() => setIsSuccess(false)} className="mt-6 text-sm font-medium text-primary hover:underline">
                      Envoyer un autre message
                    </button>
                  </motion.div>
                 ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">Nom complet</label>
                        <input 
                          {...register("name")}
                          type="text" 
                          id="name" 
                          className={`w-full bg-background border ${errors.name ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`} 
                          placeholder="Jean Dupont"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">Adresse Email</label>
                        <input 
                          {...register("email")}
                          type="email" 
                          id="email" 
                          className={`w-full bg-background border ${errors.email ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`} 
                          placeholder="jean@entreprise.com"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">Sujet de votre demande</label>
                      <input 
                         {...register("subject")}
                         type="text" 
                         id="subject" 
                         className={`w-full bg-background border ${errors.subject ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`} 
                         placeholder="Création d'un ERP ou Site Web..."
                      />
                      {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">Votre Message</label>
                      <textarea 
                         {...register("message")}
                         id="message" 
                         rows={5}
                         className={`w-full bg-background border ${errors.message ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none`} 
                         placeholder="Décrivez votre projet en quelques mots..."
                      ></textarea>
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-xl shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                         <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent flex-shrink-0 rounded-full animate-spin"></div>
                      ) : (
                         <>
                           Envoyer le message
                           <Send className="h-4 w-4" />
                         </>
                      )}
                    </button>
                    {submitError && (
                      <p className="flex items-center gap-2 text-sm text-red-500 font-medium animate-pulse">
                        <AlertCircle className="w-4 h-4" />
                        {submitError}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-4 block">
                      En soumettant ce formulaire, vous acceptez que nous traitions vos données conformément à notre politique de confidentialité.
                    </p>
                  </div>
                )}
             </form>
            </motion.div>
         </div>
      </section>
    </main>
  );
}
