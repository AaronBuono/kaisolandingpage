# Kaiso Design System

Kaiso is an Integrated Management System for businesses preparing for and maintaining ISO certification — ISO 9001 (quality), ISO 14001 (environment) and ISO 45001 (work health and safety). AI drafts documents, finds gaps and preps audits; Kaiso's own ISO experts verify every change before it lands. The audience is small and medium Australian businesses with no dedicated compliance team.

Two product surfaces are represented here: the **signed-in IMS app** (`ui_kits/app`) and the **marketing website** (`ui_kits/site`).

## Sources this system was built from

- **Uploaded brand assets** (in `uploads/`, copied into `assets/`): the KAISO wordmark (`Theme=Light, Logo Type=Text.svg`), 20 Kobi mascot expressions, and 29 "keygraphic" illustrations.
- **Written brief supplied in chat**: company description, voice in four words (Confident. Operational. Expert. Unexpected & Cheeky.), house style rules, banned words, messaging spine per segment, and the read-it-back test. Reproduced in CONTENT FUNDAMENTALS below.
- **Not supplied, and therefore not represented:** no codebase, no Figma file, no screenshots, no slide template, no font files, no colour specification, no icon set. Everything below marked *(decision)* was chosen here and needs brand sign-off.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The one stylesheet consumers link; `@import`s everything below |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `elevation.css`, `motion.css`, `base.css` |
| `assets/logo/` | KAISO wordmark |
| `assets/kobi/` | Kobi mascot: body plus 20 expressions |
| `assets/illustrations/` | 29 key graphics |
| `guidelines/` | 22 specimen cards (Colors, Type, Spacing, Shape, Motion, Brand) |
| `components/core/` | Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs |
| `components/feedback/` | Dialog, Toast, Tooltip, ReadinessMeter |
| `components/brand/` | Logo, Kobi, KeyGraphic, ExpertNote |
| `ui_kits/app/` | Kaiso IMS: dashboard, documents, gap analysis, audit prep, sign-in |
| `ui_kits/site/` | Marketing home page and the readiness-check modal |
| `templates/ims-screen/` | Starting template: app dashboard screen |
| `templates/marketing-page/` | Starting template: marketing home page |
| `SKILL.md` | Agent-skill entry point |

## Components

Every component is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, exported on `window.KaisoDesignSystem_caee0d`.

- **Core:** `Button`, `IconButton`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Card`, `Badge`, `Tag`, `Tabs`
- **Feedback:** `Dialog`, `Toast`, `Tooltip`, `ReadinessMeter`
- **Brand:** `Logo`, `Kobi`, `KeyGraphic`, `ExpertNote`

### Intentional additions

No source defined a component inventory, so the standard primitive set was authored. Three additions are brand- or product-specific rather than generic:

- **`ExpertNote`** — human oversight is structural to Kaiso, so every surface that shows AI output needs a fixed way to state who verified it and when.
- **`ReadinessMeter`** — readiness as a percentage is the product's core number; it appears in the app, the website and the readiness check, so it is a component rather than a one-off chart.
- **`Kobi` / `KeyGraphic`** — thin wrappers over the supplied SVGs, so nobody hand-rolls illustration markup or invents new faces.

---

## CONTENT FUNDAMENTALS

**Voice in four words:** Confident. Operational. Expert. Unexpected & cheeky.

**Person and address.** Second person to the reader ("your evidence", "you'll see"), third person for the company ("Kaiso drafts", "Kaiso's ISO experts verify"). Never "we" as a personality — Kaiso is a system with experts behind it, not a startup with feelings. Kobi is the only first-person voice, and only in-product ("I've drafted this — want me to send it for review?").

**Casing.** Sentence case everywhere: headlines, buttons, labels, nav, table headers. Uppercase is used only for eyebrows/kickers, with 0.12em tracking. Title Case is never used.

**Punctuation.** No exclamation marks, anywhere. Em dashes sparingly for a single mid-sentence turn. Numbered clause references keep their dots (`clause 7.5.3`). "audit-ready" and "non-conformance" are hyphenated. "ISO 9001" always with a space, spelled out on first mention where it helps ("ISO 9001 — the quality management standard").

**Numbers.** One–nine spelled out; numerals for 10 and up, and for all percentages and currency. AUD, GST noted where prices appear ("$390 per month, excluding GST").

**Spelling.** Australian: organisation, customise, recognise, prioritise, licence (noun). AU context by default — JAS-ANZ, tenders, councils, AEST timestamps, Pty Ltd.

**Emoji.** Never. Not in product, not in marketing, not in empty states. Kobi's expressions do that job.

**Structure of a good block.** Outcome first, mechanism second, human oversight implied. Example:

> **Stay audit-ready year-round — without the annual scramble.**
> Your evidence, due dates and audit records in one place. AI drafts what's missing; a Kaiso ISO expert verifies every change before it lands.

**Explaining ISO.** This audience is smart but new to the standards, so always explain, plainly, without condescension. Translate jargon on first use — "a non-conformance — auditor-speak for something that didn't meet a requirement". Simplicity is the promise: say it, then prove it with mechanism.

**Banned words.** revolutionise, disrupt, supercharge, seamless, world-class, cutting-edge, next-gen, magical, effortless, unleash, game-changing, and "AI-powered" as a naked claim. No "in today's fast-moving world" throat-clearing.

**Cheek, calibrated.** The humour lives in object choice (a toilet roll among the key graphics), in Kobi's face, and in a dry aside once per page — never in the claim itself, and never next to a compliance failure. Compare:

> Yes: "Last year's audit pack took three weeks of evenings. This one has been building itself since January."
> No: "Compliance doesn't have to suck!"

**Empty states and errors.** Say what happened, what it means, and the one next step. Kobi appears with `questions` or `loading`, never with a mistake the user made.

**The read-it-back test.** Before anything ships, read the first 50 words aloud: would an owner keep reading; did we lead with their problem; did we imply a human expert in the loop; could a competitor have written this; could every claim be defended to an auditor's face?

**Messaging spine.** Segment A (already certified): *Stay audit-ready year-round — without the annual scramble.* Segment B (getting certified): *The faster, more affordable path to the certification your tenders demand.* Both: let them feel the product in the readiness checker, then bridge — "that took two minutes; imagine your whole compliance system working like this."

---

## VISUAL FOUNDATIONS

The supplied assets are unambiguous about one thing: Kaiso looks like **industrial signage**. Heavy solid ink line art, an octagon that reads as a stop sign, forklifts and conveyor belts and traffic lights. The system below is built out from that, and the colour and type layers are decisions *(see caveats)*.

**Colour.** One ink, one accent, three statuses.
- Ink `#091919` is sampled directly from every supplied illustration and is the brand's near-black. The neutral ramp `--ink-900…--ink-50` is that hue desaturated, so greys read slightly cool-green rather than blue.
- Hi-vis yellow `--hivis-400 #F2E635` *(decision)* is the single accent: safety-vest yellow, used for fills, active nav, the expert-verified badge and the checkbox tick. Never as text on white — it fails contrast. Never behind the wordmark.
- Status is a literal traffic light, matching the supplied `traffic-light` graphic: green `#1B8A5A` pass, amber `#C97A0A` attention, red `#C8402F` gap, deep teal `#1F6F73` info.
- Backgrounds are white or `--ink-50`. One ink-filled section per page, one hi-vis band per page — no more. No gradients anywhere. No blue-purple SaaS tint.

**Type** *(substitution — no font files supplied).* Display and UI: **Space Grotesk** (600/700), the nearest Google Fonts match to the chamfered geometric wordmark, tracked tight (−0.015em to −0.03em) at large sizes. Body: **Archivo** 400/500 at 16/1.45, 14/1.45 in UI. Data: **IBM Plex Mono** for clause numbers, document IDs, dates, percentages and metadata — mono is how the system signals "this is a record". Scale runs 11→80px with nothing between 18 and 22 and nothing above 80. Measure caps at 68ch.

**Shape and corners.** Radii are tiny — 2px is the default, 10px the maximum. The brand move is the **chamfer**: cutting the top-left and bottom-right corners of buttons, cards, dialogs and toasts, taken from the cut corners in the KAISO wordmark. Kobi's octagon (`.k-octagon`) is the second geometry, reserved for plates behind illustrations and mascot crops. Utilities: `.k-chamfer`, `.k-chamfer-all`, `.k-octagon`.

**Borders.** Present on nearly everything: 1.5px is the default (`--ink-200` at rest, `--ink-900` for emphasis), 1px for hairline table rules, 3px for the active tab underline. A border does the work a shadow would do elsewhere.

**Shadows.** No ambient blur in the UI. Depth is a **hard ink offset** — `2px 2px 0`, `4px 4px 0`, `6px 6px 0` — the same trick the isometric illustrations use, and only on things that sit above the page: accent buttons, dialogs, the featured pricing tier, hovering cards. Soft shadows exist as tokens (`--shadow-soft-md`, `--shadow-overlay`) for overlays only.

**Cards.** White, 1.5px `--ink-200` border, 2px radius, one chamfered corner pair, 20px padding, no shadow at rest. Tones: `sunken` (ink-50) for inert panels, `ink` for one statement block per screen, `accent` (hivis-100 with an ink border) for the AI/expert callout, `outline` (ink border) for emphasis. Never nest two toned cards.

**Hover.** Fills change, opacity never does. Primary button goes ink → hi-vis yellow with ink text (the signature interaction). Secondary goes white → ink-50. Quiet controls pick up an ink-100 wash. Hoverable cards translate −1px and gain a 2px hard shadow. Links get a hi-vis highlight behind the text rather than a colour change.

**Press.** A 1px translate down-right into the shadow — mechanical, like a physical button. No scale, no colour shift.

**Focus.** Two-ring: 2px white then 2px ink (`--focus-ring`), so it survives on both light and dark surfaces. Never removed.

**Motion.** Fast and unfussy: 140ms for hover and press, 220ms for panels and dialogs, 360ms only for a progress fill. `--ease-standard` `cubic-bezier(.2,.6,.2,1)` for almost everything; `--ease-mech` for meters filling (it starts and stops hard, like machinery). No bounce, no spring, no parallax, no scroll-jacking. Nothing decorative moves; if it moves, it changed. Reduced-motion zeroes all durations.

**Transparency and blur.** Almost none. Modals use a flat `rgba(9,25,25,.55)` scrim; there is no frosted glass, no translucent nav, no backdrop blur beyond the 2px overlay token. Solid surfaces are the house style.

**Imagery.** There is no photography in the supplied set and none should be invented. All imagery is the 29 supplied key graphics: solid `#091919`, isometric or flat-front, heavy weight, no outline-only variants, no colour, no gradients, no grain. Use them large (84–420px), one per section, chosen literally for the subject. Never recolour, rotate, crop or trace them. Full-bleed treatment is a large graphic on white or on the hi-vis band, not a photographic hero.

**Kobi.** The octagonal mascot; the body never changes, only the face. He speaks for the product in empty states, drafting states, onboarding and the readiness check. One per screen, 32px minimum, never beside bad news the user caused.

**Layout.** 24px page gutter (48px on wide marketing sections), 24px grid gap, 1240px max container, 68ch prose measure. App shell is a fixed 260px ink sidebar and a 64px white top bar with a 1.5px bottom border; both stay put while content scrolls. Marketing sections are full-width bands separated by 1.5px rules, each band a single background. Control heights are only 32 / 40 / 48px.

**What Kaiso does not look like.** Rounded pill cards, soft drop shadows, glassmorphism, purple gradients, 3D renders, stock photography of people in hard hats, badge clusters, emoji, or icon sets with rounded terminals.

---

## ICONOGRAPHY

**What was supplied.** Two illustration systems, no UI icons:
1. **Key graphics** — 29 heavy solid-ink illustrations (`assets/illustrations/`): objects (box, clock, lock, forklift, rocket, traffic light, toilet roll, controller, electrical outlet, road sign, magnifying glass, gears, growth plant, documents, task list, conveyor belt, bullseye, lightbulb, check mark) plus "ISO" variants where the object carries the standard's presence. These are illustrations, not icons — minimum usable size is about 64px; below that the linework fills in.
2. **Kobi expressions** — 20 octagon faces (`assets/kobi/`), used as mascot and avatar, not as iconography.

**UI icon substitution *(flagged)*.** No UI icon set was supplied, so the kits use **Lucide** from CDN (`https://unpkg.com/lucide@0.544.0`) at 16px, 1.5–2px stroke, square terminals — the closest match to the geometric, flat-terminal feel of the supplied artwork. Loaded once per page and rendered via `<i data-lucide="file-text">` + `lucide.createIcons()`. Icons used: layout-dashboard, file-text, search, calendar-check, paperclip, settings, chevron-right, filter, download. **If Kaiso has its own icon set, it should replace Lucide wholesale** — do not mix the two.

**Rules.** Icons are ink (`--ink-500` at rest, `--ink-900` active), never hi-vis, never coloured for decoration. Icon-only controls always carry a label via `IconButton`. Emoji are never used as icons. Unicode glyphs are used in exactly three places, deliberately: `✓` in pricing lists, `×` for dismiss, and the CSS-drawn chevron in `Select`. Do not draw new SVG illustrations — if the concept is not in the 29 supplied graphics, ask for artwork.

---

## Caveats and open questions

1. **No colour specification was supplied.** Ink `#091919` is sampled from the artwork; hi-vis yellow and the traffic-light statuses are decisions made here. They need brand sign-off or replacement.
2. **No font files were supplied.** Space Grotesk / Archivo / IBM Plex Mono are Google Fonts substitutes loaded via CDN in `tokens/fonts.css` — so the compiler reports zero `@font-face` rules. Send the real families (and licences) and the swap is a two-line change.
3. **No product design was supplied.** Both UI kits are interpretations built from the brand assets and tone rules — not recreations of real Kaiso screens. Pricing, names, dates and metrics in them are illustrative placeholders.
4. **No slide template was supplied**, so no sample slides were built.
5. **Logo:** only the light-theme text wordmark exists here. No symbol/lockup, no dark-theme file, no favicon.
