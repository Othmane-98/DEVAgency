"use client";

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-background text-foreground text-center">
      <div className="max-w-md w-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-black text-primary/20 select-none">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Oups ! Page introuvable</h2>
          <p className="text-muted-foreground">
            Il semble que vous ayez cliqué sur un lien cassé ou que la page ait été déplacée. Ne vous inquiétez pas, cela arrive aux meilleurs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-input bg-background rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Page précédente
          </button>
        </div>
      </div>
    </main>
  );
}
