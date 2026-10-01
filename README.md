# Default_1

A responsive Montreal digital agency portfolio built with React, TypeScript, and Vite. The original dark and lime identity, wordmark, contact address, and featured projects are preserved.

![Desktop preview](docs/preview-desktop.webp)

## Run locally

Use Node.js 20.19+ or 22.12+ (including Node 24).

```sh
npm ci
npm run dev
```

## Build and verify

```sh
npm run lint
npm run build
npm run preview
```

Browser checks cover navigation, keyboard access, mobile menu dismissal, clipboard success and failure, image loading, overflow at eight viewport widths, reduced motion, and automated WCAG AA checks.

```sh
npx playwright install chromium
npm run test:e2e
```

`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` optionally points to an existing Chromium executable. Automated accessibility checks supplement manual review; they do not establish complete accessibility conformance.

## UI improvements

| Before | After |
| --- | --- |
| Noninteractive navigation and hidden mobile menu | Real section anchors, active indication, and keyboard-accessible mobile disclosure |
| Malformed image paths and an empty hero | Existing project imagery, optimized to WebP and presented above the fold |
| Slow entrance animations | Brief CSS motion, press feedback, pointer-only hover, and reduced-motion support |
| Text laid over project images | Separate captions, visible tools, and clearly named destinations |
| Contact link only | Mail link plus copy action with success and failure feedback |
| Generic template metadata | Descriptive title, description, and sharing metadata |

Fonts are served from the build through Fontsource. No third-party font requests, scroll hijacking, invented testimonials, or fabricated performance claims are used. The JavaScript bundle is approximately 54 KB gzip, compared with approximately 90 KB for the original production build.

## Editing

- `src/components`: navigation, hero, services, projects, about, contact, and footer.
- `src/index.css`: design tokens, responsive layouts, interaction states, and motion.
- `src/assets/projects`: original assets plus optimized derivatives.
- `index.html`: page metadata.
- `DESIGN.md`: the implemented visual system.
- `docs/UI-DECISIONS.md`: scope, rationale, and asset provenance.

`vite.config.ts` uses a relative base so the production bundle can be served at a domain root or a repository subpath. Serve `dist/` through an HTTP server; direct `file://` opening is not supported by Vite's JavaScript modules. The production hostname is intentionally unspecified, so canonical URLs and absolute social-image URLs must be added once hosting is selected.

## Dependency note

`baseline-browser-mapping` is temporarily pinned to 2.11.26 because the registry metadata for 2.11.27 resolved to a missing tarball during this update. Remove the override once that upstream publication is available. Vite 8 and ESLint's flat configuration are used; React remains on the existing major version.
