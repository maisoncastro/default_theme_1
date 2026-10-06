# Portfolio UI direction

The existing wordmark, dark surface, lime accent, Montreal positioning, contact address, three service categories, and three featured projects are the source material. This pass improves the existing React and Vite theme rather than changing its brand or framework.

The first viewport pairs a two-line statement and visible project action with overlapping, clickable previews made from the existing project images. The signature interaction is the slight straightening of those previews on pointer hover; native scrolling and normal touch interaction remain intact. Typography uses locally served Manrope for display text and the existing Hanken Grotesk family for body text.

Project captions and tools sit below the images, where they remain readable. Services use an open list rather than repeated lime panels. About gives the existing navigation item a real destination. Contact retains the original mail address and adds clipboard success and failure feedback.

Motion is limited to a short hero entrance, hover and press feedback, and smooth anchor navigation. Reduced motion disables movement. Mobile navigation uses ordinary links and a disclosure button with Escape, outside-click, focus-leave, and desktop-resize dismissal.

## Original and optimized assets

The shipping WebP files in `src/assets/projects` are optimized copies of the matching JPG and PNG files present at commit `e5228714a4f482d1b7867acea798a0acbb16d0ed`. `stealthsquad-detail.webp` crops the original PNG at x=440, y=230, width=530, height=770 to remove blank margins while retaining the complete generator. Original assets are retained. No image depicts invented client work. Fonts are distributed by Fontsource under their bundled font licenses. Icons come from Phosphor.

The screenshot files in this directory are captures of this implementation, not design mockups.
