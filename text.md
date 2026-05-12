# Prompt : Implémentation Complète des Effets Antigravity sur le Site Web

## 🎯 Objectif Global
Transformer le site web en une expérience visuelle premium avec des **effets antigravity** (anti-gravité) : éléments flottants, animations de lévitation, parallax, glassmorphism avec profondeur, et interactions 3D subtiles. Le tout en restant performant et accessible.

---

## 📋 Contexte Technique

**Stack actuel** :
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

**Architecture** :
```
siteweb/
├── app/
│   ├── templates/ (restaurant, hotel, medical)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── templates/
│   ├── common/
│   └── layout/
└── lib/
```

---

## 🚀 Partie 1 : Composants Antigravity de Base

### 1.1 FloatingElement - Composant d'Animation Flottante

**Tâche** : Crée un composant React réutilisable qui fait flotter n'importe quel élément enfant avec un mouvement doux et naturel.

**Spécifications** :
- Animation infinie en boucle (mouvement vertical type "bobbing")
- Variantes : `subtle` (2-5px), `medium` (5-10px), `dramatic` (10-20px)
- Délai aléatoire pour éviter la synchronisation (si plusieurs éléments)
- Performance : utiliser `transform` (pas `top/bottom`) pour GPU acceleration

**Code attendu** :
```tsx
// components/common/FloatingElement.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  intensity?: 'subtle' | 'medium' | 'dramatic'
  duration?: number
  delay?: number
  className?: string
}

export function FloatingElement({
  children,
  intensity = 'medium',
  duration = 3,
  delay = 0,
  className = ''
}: FloatingElementProps) {
  const intensityMap = {
    subtle: 5,
    medium: 10,
    dramatic: 20
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensityMap[intensity], 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    >
      {children}
    </motion.div>
  )
}
```

**Utilisation** :
```tsx
<FloatingElement intensity="medium" duration={4}>
  <div className="card">Mon contenu flottant</div>
</FloatingElement>
```

---

### 1.2 ParallaxSection - Effet Parallax au Scroll

**Tâche** : Composant qui applique un effet parallax (vitesse de défilement différente) aux éléments.

**Spécifications** :
- Défilement plus lent que le scroll normal (effet de profondeur)
- Configurable : `speed` (0.1 = très lent, 1 = normal, 2 = rapide)
- Support du scroll horizontal et vertical
- Détection automatique du viewport avec Intersection Observer

**Code attendu** :
```tsx
// components/common/ParallaxSection.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number // 0.5 = slow, 1 = normal, 2 = fast
  className?: string
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = ''
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
```

---

### 1.3 GlassmorphCard - Cartes avec Effet de Profondeur

**Tâche** : Cartes avec glassmorphism + effet 3D au hover.

**Spécifications** :
- Backdrop blur + bordure semi-transparente
- Transformation 3D au hover (rotation subtile selon la position de la souris)
- Ombre dynamique qui suit le mouvement
- Variantes : `glass-light`, `glass-dark`, `glass-gradient`

**Code attendu** :
```tsx
// components/common/GlassmorphCard.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface GlassmorphCardProps {
  children: ReactNode
  variant?: 'light' | 'dark' | 'gradient'
  className?: string
}

export function GlassmorphCard({
  children,
  variant = 'light',
  className = ''
}: GlassmorphCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateXValue = ((y - centerY) / centerY) * -10
    const rotateYValue = ((x - centerX) / centerX) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const variantClasses = {
    light: 'bg-white/10 backdrop-blur-md border-white/20',
    dark: 'bg-black/20 backdrop-blur-md border-white/10',
    gradient: 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20'
  }

  return (
    <motion.div
      className={`rounded-2xl border p-6 ${variantClasses[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center'
      }}
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
```

---

### 1.4 MagneticButton - Bouton avec Effet Magnétique

**Tâche** : Boutons qui "attirent" le curseur quand il s'approche.

**Spécifications** :
- Détection de proximité du curseur (rayon : 50-100px)
- Animation fluide qui suit le curseur
- Retour en position normale quand le curseur s'éloigne
- Force magnétique configurable

**Code attendu** :
```tsx
// components/common/MagneticButton.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  strength?: number // 0.1 = weak, 0.5 = strong
  className?: string
}

export function MagneticButton({
  children,
  strength = 0.3,
  className = ''
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * strength, y: y * strength })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.button>
  )
}
```

---

## 🎨 Partie 2 : Effets de Fond Antigravity

### 2.1 FloatingParticles - Particules Flottantes en Arrière-Plan

**Tâche** : Créer un arrière-plan avec des particules flottantes (cercles, étoiles, formes).

**Spécifications** :
- Génération aléatoire de 20-50 particules
- Mouvement aléatoire (x, y) avec vitesses différentes
- Opacity animée (fade in/out)
- Performance optimisée (Canvas ou CSS)

**Code attendu** :
```tsx
// components/common/FloatingParticles.tsx
'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function FloatingParticles({ count = 30 }: { count?: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }))
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20 dark:bg-primary/10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}
```

---

### 2.2 AnimatedGradientBackground - Fond Dégradé Animé

**Tâche** : Arrière-plan avec dégradé qui se déplace lentement.

**Spécifications** :
- Gradient animé (rotation ou déplacement)
- Couleurs adaptées au dark mode
- Animation subtile (20-30s par cycle)
- Option blur pour effet "glassmorphism backdrop"

**Code attendu** :
```tsx
// components/common/AnimatedGradientBackground.tsx
'use client'

import { motion } from 'framer-motion'

export function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 122, 122, 0.3), transparent 50%), radial-gradient(circle at 40% 20%, rgba(138, 180, 248, 0.3), transparent 50%)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <div className="absolute inset-0 backdrop-blur-3xl" />
    </div>
  )
}
```

---

### 2.3 BlobAnimation - Formes Organiques Animées (Blobs)

**Tâche** : Créer des formes organiques ("blobs") qui se déforment en arrière-plan.

**Spécifications** :
- SVG avec `filter: blur()` pour effet organique
- Animation de déformation (morphing)
- Couleurs dégradées
- Position aléatoire sur la page

**Code attendu** :
```tsx
// components/common/BlobAnimation.tsx
'use client'

import { motion } from 'framer-motion'

export function BlobAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />
    </div>
  )
}
```

---

## 🎭 Partie 3 : Intégration dans les Pages Existantes

### 3.1 Homepage (app/page.tsx)

**Tâche** : Intègre les effets antigravity sur la page d'accueil.

**Modifications à apporter** :
1. Ajouter `<AnimatedGradientBackground />` ou `<BlobAnimation />` en arrière-plan
2. Wrapper les cartes de services dans `<FloatingElement>` avec délais différents
3. Section hero avec `<ParallaxSection>` pour l'image de fond
4. Boutons CTA avec `<MagneticButton>`

**Code attendu** :
```tsx
// app/page.tsx
import { AnimatedGradientBackground } from '@/components/common/AnimatedGradientBackground'
import { FloatingElement } from '@/components/common/FloatingElement'
import { ParallaxSection } from '@/components/common/ParallaxSection'
import { MagneticButton } from '@/components/common/MagneticButton'

export default function HomePage() {
  return (
    <>
      <AnimatedGradientBackground />
      
      {/* Hero Section avec Parallax */}
      <section className="relative min-h-screen flex items-center">
        <ParallaxSection speed={0.5} className="w-full">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold mb-6">
              Créez votre présence digitale
            </h1>
            <MagneticButton 
              strength={0.4}
              className="px-8 py-4 bg-primary text-white rounded-full"
            >
              Découvrir nos solutions
            </MagneticButton>
          </div>
        </ParallaxSection>
      </section>

      {/* Services Cards avec Float */}
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FloatingElement intensity="subtle" delay={0}>
            <ServiceCard title="Restaurant" />
          </FloatingElement>
          <FloatingElement intensity="subtle" delay={0.5}>
            <ServiceCard title="Hôtel" />
          </FloatingElement>
          <FloatingElement intensity="subtle" delay={1}>
            <ServiceCard title="Médical" />
          </FloatingElement>
        </div>
      </section>
    </>
  )
}
```

---

### 3.2 Pages Templates (Restaurant, Hôtel, Médical)

**Tâche** : Ajoute les effets antigravity aux pages de templates.

**Pour chaque template** :
1. **Hero Section** : Utiliser `<GlassmorphCard>` pour les infos superposées
2. **Images** : Wrapper dans `<ParallaxSection>` pour effet de profondeur
3. **CTAs** : Convertir en `<MagneticButton>`
4. **Cartes de produits/services** : Ajouter `<FloatingElement>` avec délais aléatoires

**Exemple pour Restaurant** :
```tsx
// app/templates/restaurant/page.tsx
import { GlassmorphCard } from '@/components/common/GlassmorphCard'
import { FloatingElement } from '@/components/common/FloatingElement'
import { ParallaxSection } from '@/components/common/ParallaxSection'

export default function RestaurantTemplate() {
  return (
    <>
      {/* Hero avec Glassmorphism */}
      <section className="relative h-screen">
        <ParallaxSection speed={0.3}>
          <Image src="/restaurant-hero.jpg" fill className="object-cover" />
        </ParallaxSection>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <GlassmorphCard variant="gradient" className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Le Gourmet</h1>
            <p className="text-xl">Une expérience culinaire inoubliable</p>
          </GlassmorphCard>
        </div>
      </section>

      {/* Menu Items avec Float */}
      <section className="py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <FloatingElement key={item.id} intensity="medium" delay={index * 0.2}>
              <MenuCard {...item} />
            </FloatingElement>
          ))}
        </div>
      </section>
    </>
  )
}
```

---

### 3.3 Header Navigation

**Tâche** : Rendre le header plus immersif avec effets antigravity.

**Modifications** :
1. **Glassmorphism** sur le header au scroll (backdrop-blur)
2. **Logo flottant** avec `<FloatingElement>`
3. **Liens de menu** avec effet magnetic au hover
4. **Menu mobile** avec animation slide-in 3D

**Code attendu** :
```tsx
// components/layout/Header.tsx
'use client'

import { FloatingElement } from '@/components/common/FloatingElement'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Header() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  )

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
      style={{
        backgroundColor: headerBg
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo flottant */}
        <FloatingElement intensity="subtle" duration={4}>
          <Logo />
        </FloatingElement>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-lg font-medium"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
```

---

## ⚡ Partie 4 : Optimisations de Performance

### 4.1 Lazy Loading des Animations

**Tâche** : Charger les composants d'animation uniquement quand ils sont visibles.

**Code attendu** :
```tsx
// Utiliser next/dynamic pour le lazy loading
import dynamic from 'next/dynamic'

const FloatingParticles = dynamic(
  () => import('@/components/common/FloatingParticles'),
  { ssr: false }
)

const BlobAnimation = dynamic(
  () => import('@/components/common/BlobAnimation'),
  { ssr: false }
)
```

---

### 4.2 Reduce Motion (Accessibilité)

**Tâche** : Respecter la préférence `prefers-reduced-motion` de l'utilisateur.

**Code attendu** :
```tsx
// hooks/useReducedMotion.ts
import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

// Utilisation dans FloatingElement
export function FloatingElement({ children, ...props }: FloatingElementProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div>{children}</div>
  }

  return (
    <motion.div animate={{ y: [0, -10, 0] }} {...props}>
      {children}
    </motion.div>
  )
}
```

---

### 4.3 GPU Acceleration

**Tâche** : S'assurer que toutes les animations utilisent `transform` et `opacity` uniquement (GPU-accelerated).

**Checklist** :
- [ ] Utiliser `transform: translateX/Y/Z` au lieu de `left/top`
- [ ] Utiliser `opacity` au lieu de `visibility` pour les fade-ins
- [ ] Ajouter `will-change: transform` sur les éléments animés
- [ ] Utiliser `translateZ(0)` ou `transform: translate3d(0,0,0)` pour forcer GPU

**CSS à ajouter** :
```css
/* app/globals.css */
.gpu-accelerated {
  will-change: transform;
  transform: translateZ(0);
}
```

---

## 📊 Partie 5 : Plan d'Implémentation

### Phase 1 : Composants de Base (2-3 jours)
- [ ] Créer `FloatingElement.tsx`
- [ ] Créer `ParallaxSection.tsx`
- [ ] Créer `GlassmorphCard.tsx`
- [ ] Créer `MagneticButton.tsx`
- [ ] Tester chaque composant isolément

### Phase 2 : Effets de Fond (1-2 jours)
- [ ] Créer `FloatingParticles.tsx`
- [ ] Créer `AnimatedGradientBackground.tsx`
- [ ] Créer `BlobAnimation.tsx`
- [ ] Optimiser les performances (lazy loading)

### Phase 3 : Intégration Pages (3-4 jours)
- [ ] Intégrer sur Homepage
- [ ] Intégrer sur Templates (Restaurant, Hôtel, Médical)
- [ ] Intégrer dans Header/Footer
- [ ] Tester responsive (mobile, tablette, desktop)

### Phase 4 : Polissage & Accessibilité (1-2 jours)
- [ ] Implémenter `useReducedMotion`
- [ ] Tests de performance (Lighthouse)
- [ ] Ajustement des timings d'animation
- [ ] Documentation des composants

---

## 🎯 Résultats Attendus

Après implémentation complète, le site devra présenter :
- ✅ Éléments flottants sur toutes les pages clés
- ✅ Effets parallax sur les sections hero
- ✅ Cartes avec glassmorphism + effet 3D au hover
- ✅ Boutons magnétiques sur les CTA principales
- ✅ Arrière-plans animés (gradient, blobs ou particules)
- ✅ Header avec glassmorphism au scroll
- ✅ Performance maintenue (Lighthouse > 85)
- ✅ Accessibilité respectée (prefers-reduced-motion)

---

## 📝 Livrables Finaux

1. **Dossier `/components/common/antigravity/`** avec tous les composants
2. **Documentation** de chaque composant (props, exemples)
3. **Guide d'utilisation** pour les développeurs
4. **Storybook** (optionnel) pour tester les variantes
5. **Rapport de performance** (avant/après Lighthouse)

---

**⚡ Commence par la Phase 1 et attends validation avant de passer aux suivantes, ou traite l'ensemble en une fois si tu as tous les éléments nécessaires.**