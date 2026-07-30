# MoedimAI decision and verification journey graphic QA

## Comparison target

- Source visual truth:
  - `/Users/obi/Documents/Moedimai Enterprise Platform Redesign journmey .zip`
  - `/private/tmp/moedimai-journey-handoff.ZYWv5K/design_handoff_journey_graphic/JourneyMap.dc.html`
  - `/private/tmp/moedimai-journey-handoff.ZYWv5K/design_handoff_journey_graphic/README.md`
- Browser-rendered implementation:
  - `/Users/obi/.codex/visualizations/2026/07/28/019faab2-e2b1-7202-856f-979b7f9d022a/moedimai-journey-graphic-implementation-2026-07-30/implementation-local-journey-panel.png`
  - `/Users/obi/.codex/visualizations/2026/07/28/019faab2-e2b1-7202-856f-979b7f9d022a/moedimai-journey-graphic-implementation-2026-07-30/implementation-local-390px-component-width.png`
- Width-matched source:
  - `/Users/obi/.codex/visualizations/2026/07/28/019faab2-e2b1-7202-856f-979b7f9d022a/moedimai-journey-graphic-implementation-2026-07-30/source-reference-journey-panel-width-matched.png`
- Side-by-side comparison:
  - `/Users/obi/.codex/visualizations/2026/07/28/019faab2-e2b1-7202-856f-979b7f9d022a/moedimai-journey-graphic-implementation-2026-07-30/source-vs-implementation-side-by-side.png`
- Desktop CSS viewport: 1152 x 900 pixels
- Source and implementation panel width: 1088 CSS pixels
- Source pixels: 1088 x 682
- Implementation pixels: 1088 x 693
- Density normalization: both comparison panels are captured at 1 CSS pixel per output pixel and placed side by side without scaling.
- State: public homepage, default journey state, animations running, no technology group hovered.

## Findings

No actionable P0, P1 or P2 issues remain.

- Fonts and typography: the implementation uses Inter, Fraunces and JetBrains Mono as specified. Font size, letter spacing, normal line-height behavior and wrapping match the source. The process title preserves `AI-SUPPORTED` as one visible unit at the matched width, as shown in the source.
- Spacing and layout rhythm: the seven-column grid, 10-pixel gaps, 28-pixel panel padding, 22-pixel connector rows, 8-pixel radii, stage-card spacing, anchor alignment and evidence rail match the handoff. The 11-pixel total height difference is caused by the source renderer's fallback font metrics and is acceptable because the production implementation uses the requested JetBrains Mono font.
- Colors and visual tokens: the blue field layer, gold process layer, terracotta logistics layer, green evidence rail, navy background, cream type, borders, glows, opacities and gradients map to the supplied values.
- Image quality and asset fidelity: the graphic is code-native in the supplied source and contains no raster image, logo, illustration or icon asset. The production implementation recreates the source component directly and does not substitute a screenshot or placeholder.
- Copy and content: all source labels, seven stages, descriptions, application chips, patent status, evidence copy and directional rail labels are present. The section heading uses a comma instead of an em dash to preserve the established MoedimAI writing rule without changing the meaning.
- Affordances and interaction states: field, process and logistics bands and their corresponding stage cards share the supplied hover-group state. Active groups gain border, glow and elevation treatment while the other groups dim. No content depends on hover.
- Motion: scan, pulse, top and middle connector beams, evidence-line flow and two traveling evidence packets use the supplied durations and staggered delays. Motion is disabled when the user prefers reduced motion.
- Responsive behavior: at a 390-pixel component width, the page copy remains readable and the 1060-pixel journey graphic is contained inside a 324-pixel horizontal-scroll region. The graphic does not force page-level overflow.
- Accessibility: the graphic has a named, keyboard-focusable scroll region and a visible mobile swipe instruction. All information remains available without hover or animation.

## Focused region comparison

The full panel is dense enough that focused checks were also made for:

- Engine title spacing and the gold `AI` mark.
- Process-band title wrapping and patent chip.
- Stage-card number, title and description line heights.
- Evidence-rail label, route text, dashed line and packet positions.
- Top and middle connector beams while the animation was active.

These checks are visible in the width-matched side-by-side evidence.

## Comparison history

### Iteration 1

- [P2] The first implementation inherited the website's 1.5 body line height for small labels that use normal browser line height in the source.
  - Fix: set normal line height on engine labels, technology labels, chips, stage numbers, stage names and evidence labels.
  - Result: panel height moved from 746 pixels to 708 pixels and the vertical rhythm aligned more closely with the source.
- [P2] `AI-SUPPORTED` wrapped after the hyphen in the real JetBrains Mono font, adding a fourth title line.
  - Fix: preserved the visible source text while preventing a break inside `AI-SUPPORTED`.
  - Result: the process title now uses the source's three-line shape and the panel height is 693 pixels.

### Iteration 2

- [P1] The connector-beam keyframe rule was scoped to the parent component and did not reach connector elements rendered by a child component.
  - Fix: made the supplied journey animation rules globally addressable by their unique component class names.
  - Result: computed animation names now report `journey-beam`, `journey-scan` and `journey-packet`; the final evidence capture shows animated beam positions in both connector rows.

### Iteration 3

- Final width-matched comparison found no remaining P0, P1 or P2 differences.
- The production font renders slightly darker and creates an 11-pixel total height difference compared with the source renderer's fallback font. This is classified as acceptable P3 rendering variance because the implementation uses the exact font requested by the handoff.

## Primary interactions and states tested

- Engine scan animation running.
- Pulsing engine status dot running.
- Fourteen staggered connector beams running.
- Evidence-line flow and both traveling packets running.
- Hover-group state logic reviewed for field, process and logistics bands and all seven stage cards.
- Reduced-motion media query present around all keyframe animations.
- Desktop panel rendered at 1088 CSS pixels.
- Mobile-width containment rendered at 390 pixels with a 324-pixel scroll region.
- Browser error and warning log returned no entries.
- No camera, microphone, location, recording or other hardware-capture control was used.

## Implementation checklist

- [x] Supplied seven-stage journey structure implemented.
- [x] Supplied technology bands and chips implemented.
- [x] Shared hover-group behavior implemented.
- [x] Engine scan, pulse and staggered connector motion implemented.
- [x] Blockchain evidence rail and moving packets implemented.
- [x] Reduced-motion behavior implemented.
- [x] Width-matched source and implementation comparison completed.
- [x] 390-pixel component-width containment checked.
- [x] Lint, typecheck, formatting and production build passed.
- [x] Browser console checked.

## Follow-up polish

- No follow-up visual changes are required.

final result: passed
