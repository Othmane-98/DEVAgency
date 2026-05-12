# Adding a New Réalisation Template

When the user asks to create a new website template for the `/realisations` page, follow these instructions in order. Do not ask for clarification — derive everything from the concept.

---

## 1. Analyze the concept

From the business name or type, infer:

- **What the business does** and who its customers are
- **The feeling the website should convey** (luxury, trust, warmth, energy, precision, etc.)
- **The key things to showcase** (services, products, spaces, team, process)
- **An authentic color palette** — pick colors that match the real-world identity of this type of business. Never use generic grays or blues unless they genuinely fit.
- **Which sections the page needs** — every website is different. A riad needs a hammam section, an electrician needs a services section, a restaurant needs a menu section.

---

## 2. Design the page sections

Before generating anything, decide what sections the one-page demo will have and in what order. Examples:

| Business | Sections |
|----------|---------|
| Riad | Hero → Experiences (hammam, spa, pool) → Suites → Gallery |
| Electrician | Hero → Services → How we work → Projects → Contact |
| Restaurant | Hero → Menu highlights → Chef → Ambiance gallery |
| Bakery | Hero → Signature products → The baker → Gallery |
| Hotel | Hero → Rooms → Amenities → Gallery |
| Law firm | Hero → Practice areas → Team → Contact |

The sections you define here determine exactly which images and videos you need to generate.

---

## 3. Output the image prompts

For each image the page needs, output a ready-to-use nanobanana prompt. Do not use a fixed list — derive the images from the sections you designed.

**For each image, specify:**
- A descriptive filename (e.g. `hero.png`, `electrical-panel.png`, `team-on-site.png`)
- The aspect ratio (`16:9` for hero/feature images, `1:1` for gallery details, `4:3` for portraits)
- The full prompt

**Prompt formula:**
```
[Specific subject that matches this business]. [Key visual elements].
[Lighting that fits the mood]. [Materials and textures authentic to this business].
[People or no people]. Photorealistic, [style] photography.
```

**Examples by business type:**

*Electrician — hero:*
```
Professional electrician installing a modern smart electrical panel in a sleek
residential home. Clean white walls, organized cable runs, precision tools on a belt.
Bright natural light from a large window. Photorealistic professional photography.
```

*Electrician — completed project:*
```
Modern open-plan living room with an elegant hidden home automation system.
Recessed lighting perfectly balanced, smart switches on the wall, no visible wiring.
Warm evening light. No people. Photorealistic interior architecture photography.
```

*Riad — hammam:*
```
Traditional Moroccan hammam interior. Arched stone ceiling with star-shaped skylights
letting in rays of light through steam. Marble slabs, copper bowls. Warm terracotta
tones. No people. Atmospheric, photorealistic spa photography.
```

> Every prompt must be specific to this concept — its culture, setting, materials, and mood.

---

## 4. Output the Veo 3 video prompt

Output one video prompt for the hero background. Use **Ingredients mode** (descriptive, not frame-by-frame).

**Formula:**
```
Cinematic [camera movement] [through/over/into] [specific subject].
The camera [motion detail]. [Key visual elements the viewer sees].
[Lighting]. [No people unless the concept requires them].
Shot on RED camera, anamorphic lens, cinematic color grade.
Seamless loop-friendly motion, no sudden cuts.
```

**Electrician example:**
```
Cinematic slow push through a modern smart home at dusk. Lights gradually turn on
room by room as the camera glides through open spaces — living room, kitchen, hallway.
Recessed lighting warm and precise, smart panels glowing softly on walls.
No people. Shot on RED camera, anamorphic lens, cinematic color grade.
Seamless loop-friendly motion, no cuts.
```

**Settings to tell the user:** Duration 8–10 sec · 16:9 · Style: Cinematic

---

## 5. Wait for the user to generate and provide the assets

Tell the user:
- Save all images to `public/[category]/` with the filenames you specified
- Save the video as `public/[category]/hero-video.mp4`
- If files land in the project root, say you will move them

Once the user confirms the files are ready (or provides them), move any misplaced files to `public/[category]/` and proceed to build.

---

## 6. Build the template

### File structure to create

```
public/[category]/              ← images and video
components/templates/[category]/
  [Category]Hero.tsx
  [Category][Section].tsx       ← one file per section
  ...
app/templates/[category]/
  page.tsx
```

### Rules every component must follow

- `'use client'` at the top
- All animations use Framer Motion `motion.div` with `whileInView={{ opacity: 1, y: 0 }}` + `viewport={{ once: true }}`
- All images use `next/image` with `fill` + `object-cover`
- Every image has a hover scale: `transition-transform duration-1000 group-hover:scale-110`
- Color palette uses exact hex values derived from the concept — not generic Tailwind defaults
- One scrollable page — no internal links or sub-routes

### Hero pattern (video background)

```tsx
'use client';
import { motion } from 'framer-motion';

export function [Category]Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/[category]/hero-video.mp4"
        poster="/[category]/hero.png"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}>
          {/* Concept-specific headline */}
        </motion.h1>
      </div>
    </section>
  );
}
```

### Image card with hover reveal — reusable pattern

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-60px' }}
  transition={{ duration: 0.7, delay: index * 0.1 }}
  className="group relative overflow-hidden"
>
  <Image src={img} alt={title} fill
    className="object-cover transition-transform duration-1000 group-hover:scale-110" />
  <div className="absolute inset-0 bg-gradient-to-t from-[dark]/80 to-transparent" />
  <div className="absolute bottom-0 p-6 md:p-8">
    <h3>{title}</h3>
    <p className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
      {description}
    </p>
  </div>
</motion.div>
```

### Page file

```tsx
import { Metadata } from 'next';
// import each section component

export const metadata: Metadata = {
  title: '[Display Name] | WebAgency',
  description: '...',
};

export default function [Category]TemplatePage() {
  return (
    <main className="min-h-screen font-sans"
      style={{ backgroundColor: '#[bg]', color: '#[text]' }}>
      <[Category]Hero />
      {/* sections in scroll order */}
    </main>
  );
}
```

---

## 7. Wire up the realisations page

**`content/demo-templates.ts`** — add to `demoTemplates` array and update the `category` union type:

```ts
{
  id: "[category]",
  title: "[Display Name]",
  description: "[One sentence for the card]",
  category: "[category]",
  tags: ["Tag1", "Tag2"],
  previewClassName: "from-[color]-900 via-[color]-800 to-[color]-950",
}
```

**`components/templates/TemplateDemoCard.tsx`** — add to the `images` object in `MockPageContent`:

```ts
[category]: {
  hero: "/[category]/hero.png",
  img1: "/[category]/[any-feature].png",
  img2: "/[category]/[any-other].png",
  heroTitleWidth: "w-28",
  heroSubWidth: "w-40",
},
```

**`components/templates/TemplatesDemoSection.tsx`** — add to the `categories` filter array:

```ts
{ id: "[category]", label: "[Label]" },
```

---

## Checklist before finishing

- [ ] Image and video prompts output to the user before building
- [ ] All assets in `public/[category]/`
- [ ] `content/demo-templates.ts` updated (entry + type union)
- [ ] `TemplateDemoCard.tsx` updated with preview images
- [ ] `TemplatesDemoSection.tsx` updated with filter tab
- [ ] All section components built in `components/templates/[category]/`
- [ ] Page created at `app/templates/[category]/page.tsx`
- [ ] Every section animates on scroll with Framer Motion
- [ ] Every image scales on hover
- [ ] Color palette is specific to the concept
- [ ] Single scrollable page, no sub-routes
- [ ] Card visible on `/realisations`
- [ ] Demo accessible at `/templates/[category]`
