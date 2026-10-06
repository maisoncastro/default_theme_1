---
name: "Default_1"
description: "Dark portfolio surfaces, lime emphasis, and overlapping project previews."
colors:
  accent: "#d7fa88"
  accent-hover: "#e3ffac"
  surface: "#20221f"
  surface-raised: "#2b2e28"
  text: "#f3f4ed"
  muted: "#b6bab0"
  ink: "#20221f"
  ink-hover: "#34392c"
  line: "#44483e"
  canvas: "#e8eae3"
typography:
  display:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "clamp(3.3rem, 5.85vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "clamp(2.3rem, 4.4vw, 3.8rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  title:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Hanken Grotesk Variable", sans-serif'
    lineHeight: 1.6
  label:
    fontFamily: '"Hanken Grotesk Variable", sans-serif'
    fontSize: "16px"
    fontWeight: 600
rounded:
  small: "8px"
  standard: "14px"
  shell: "22px"
  shell-mobile: "16px"
  tag: "5px"
  circle: "50%"
spacing:
  space-8: "8px"
  space-16: "16px"
  space-20: "20px"
  space-24: "24px"
  space-32: "32px"
  space-40: "40px"
  space-72: "72px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-small:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.small}"
    padding: "10px 17px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: "16px 24px"
  button-dark-hover:
    backgroundColor: "{colors.ink-hover}"
  tool-tag:
    textColor: "{colors.muted}"
    rounded: "{rounded.tag}"
    padding: "5px 10px"
  project-media:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.standard}"
  contact-panel:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.standard}"
    padding: "clamp(28px, 5vw, 72px)"
---

# Design System: Default_1

## Overview

The implemented portfolio retains the existing wordmark and dark/lime identity. Large, lightly weighted headings sit beside project imagery; supporting text, thin dividers, and open service rows keep the remaining content quieter. Lime emphasizes actions, selected details, and the contact surface.

The overlapping hero previews supply the main depth and motion signature. Other sections use flat surfaces, generous vertical spacing, and captions below images. This document records the current implementation in `src/index.css` and `src/components`.

**Key Characteristics:**

- Dark surfaces with warm off-white text and lime emphasis.
- Manrope headings paired with Hanken Grotesk body and interface text.
- Open service rows, image-led projects, and a lime contact panel.
- Short interaction feedback with reduced-motion support.

## Colors

The palette pairs lime with green-tinted dark neutrals. Frontmatter values are normative.

### Primary

- **Lime** (`accent`): primary actions, hero emphasis, service icons/details, project arrows, focus outlines, and the contact panel. `accent-hover` lightens primary buttons on pointer hover.

### Neutral

- **Dark Surface** (`surface`): page shell and sticky header; **Raised Surface** (`surface-raised`): mobile navigation and the default project-media background.
- **Off-white** (`text`): main text; **Muted Gray** (`muted`): navigation, supporting copy, project destinations, and tool tags.
- **Dark Ink** (`ink`): text on lime and the dark contact action; `ink-hover` lightens that action on hover.
- **Divider** (`line`): service/section rules, tag borders, and muted link underlines. **Outer Canvas** (`canvas`): the frame around the shell.

Project-specific pink, pale green, and charcoal image backgrounds belong to their corresponding previews; they are not additional interface accents.

## Typography

**Display Font:** Manrope Variable, with sans-serif fallback. **Body Font:** Hanken Grotesk Variable, with sans-serif fallback. Both fonts are served locally.

Display, headline, and title tokens describe the base desktop headings. About, contact, and project headings have component-specific size overrides. Paragraphs use a relaxed line-height; body sizes vary with context rather than following a single fixed scale.

- **Display:** two-line hero heading, with the second line in lime. Mobile uses `clamp(2.65rem, 10.5vw, 4.3rem)`; tablet uses `clamp(3.4rem, 6.1vw, 4.2rem)`.
- **Headline / Title:** section and service headings. Headings use balanced wrapping; paragraphs use pretty wrapping.
- **Body:** supporting paragraphs generally range from 15 to 19px; service descriptions have a maximum measure of 65ch. The about statement uses 24px with a 1.45 line-height, reducing to 22px on mobile.
- **Label:** primary button text; compact buttons use 14px, tool tags 12px, and service details 13px. Labels retain sentence case.

## Layout

The centered shell has a maximum width of 1600px. Its outer frame is 20px on desktop, 12px from 768 to 1100px, and 8px below 768px. Horizontal content padding grows from 24px to 72px through `clamp(24px, 4.2vw, 72px)`; mobile uses 24px, reducing to 18px below 360px.

Desktop uses two-column hero, services, and about layouts. The project grid has two columns with a full-width first project, 32px column gaps, and 54px row gaps. Below 768px, these layouts become single-column, the service introduction stops sticking, and project captions stack. Mobile project rows use 40px gaps.

Section padding grows through `clamp(80px, 9vw, 136px)` and becomes 72px on mobile, with section-specific overrides. The header stays at the viewport top. Anchor offsets are 112px on desktop and 88px on mobile. At 1600px and above, the hero and its preview area gain height.

## Elevation & Depth

Most surfaces are flat. Dividers, contrasting surface tones, image clipping, and spacing separate content. Shadows are restricted to overlapping hero previews and the mobile navigation disclosure.

- **Preview lift:** `0 20px 48px rgb(12 15 10 / 0.3)` under both hero previews.
- **Navigation lift:** `0 18px 36px rgb(12 15 10 / 0.35)` under the mobile panel.

The layer order is content (0), hero copy (1), header (10), mobile navigation (11), and skip link (20).

## Shapes

Small controls use the small radius; image previews, project media, and the contact panel use the standard radius. The enclosing shell uses the larger shell radius, reduced on mobile. Tool tags use the tag radius. Project opening arrows sit in circular controls. Images are clipped inside their rounded media containers.

## Components

### Buttons and links

Primary buttons pair lime with dark ink, an arrow, a 32px internal gap, and a minimum height of 56px. Compact header buttons reduce the gap to 20px and minimum height to 44px. Below 768px, regular buttons use 15px text, 15px 20px padding, a 20px gap, and a minimum height of 52px. The dark variant sits on the lime contact panel and spans its available width on mobile.

Text links use a muted underline offset by 7px and an arrow. Pointer hover strengthens the underline and moves the arrow 2px right and up. Buttons scale to 0.97 while pressed. Focus-visible outlines use lime with a 6px offset; controls inside the contact panel use dark ink instead.

### Navigation

Desktop links use muted text, turning off-white and revealing a lime underline on hover or when current. Below 768px, a bordered 44px disclosure control replaces desktop links and the header contact button. Its raised panel uses ordinary links with a minimum height of 58px; the current link is lime. Escape returns focus to the trigger; link selection, outside interaction, focus departure, and the desktop breakpoint dismiss the panel.

### Tool tags and service rows

Tool tags are small, muted, bordered labels below project captions; they have no selected or filter state. Services use open rows with thin dividers, lime icons, and unboxed detail lists.

### Project media and hero previews

Project captions and tool tags remain below images. The full-width first project uses a 2.5 aspect ratio on desktop and 1.35 on mobile. Soliditas uses containment; Stealth Squad uses containment with a 1.1 ratio on desktop and 0.9 on mobile, preserving the complete generator. Pointer hover scales project imagery to 1.035 and rotates its circular arrow by 45 degrees.

Hero previews start at rotations of 4 and −7 degrees. Pointer hover straightens them to 1 and −3 degrees and lifts them 5px. Their captions stay on the image-specific pale backgrounds.

### Contact panel

The lime panel combines the existing mark, a large heading, an underlined email address, a bordered 44px copy control, and the dark action. Copy success swaps the icon and announces “Email copied.” for 3.5 seconds. Failure supplies persistent text explaining how to use the email link or select the address. Reserved status height limits layout movement.

**The Reduced Motion Rule.** Under `prefers-reduced-motion: reduce`, animations and transitions are disabled and anchor scrolling becomes immediate. Otherwise, hero copy enters over 600ms and previews over 750ms after a 90ms delay; hover effects are restricted to fine pointers that support hover.

## Do's and Don'ts

### Do:

- **Do** reuse the existing wordmark, font pairing, lime accent, and dark surfaces.
- **Do** keep project captions outside images and preserve readable image framing.
- **Do** preserve visible keyboard focus, native links, and reduced-motion behavior.

### Don't:

- **Don't** apply project-image background colors as additional global accents.
- **Don't** introduce selected or filter behavior for the existing tool tags.
- **Don't** add motion that bypasses the reduced-motion treatment.
