/* ============================================================
 * Hermes Go — App Map (single source of truth)
 * ------------------------------------------------------------
 * Icons: Lucide (lucide-react-native, identical to Lucide web).
 * Mapping verified against hermes-mobile source:
 *   - src/components/navigation/AppDrawerContent.tsx (hub rail)
 *   - src/components/navigation/HubFlyout.tsx (hub segments)
 *   - src/features/* screens (feature-level icons)
 * Consumed by:
 *   - hermes-go.html (landing explorer)
 *   - app-map.html    (full documentation page)
 * Update features here ONCE. Both pages stay in sync.
 * ============================================================ */

/* ── Lucide icon SVG paths (canonical Lucide v0.x paths) ──
 * All icons: viewBox 0 0 24 24, fill=none, stroke=currentColor,
 * stroke-width=2, stroke-linecap=round, stroke-linejoin=round.
 * Single source for visual consistency across both pages. */

const ICON_ATTRS = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"';

const LUCIDE = {
  // ── Hub rail (from AppDrawerContent.tsx) ──
  layoutDashboard: `<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>`,
  messageSquare: `<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>`,
  brain: `<path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/>`,
  workflow: `<rect x="3" y="3" width="8" height="8" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect x="13" y="13" width="8" height="8" rx="2"/>`,
  radio: `<path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/>`,
  server: `<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>`,
  settings: `<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>`,
  userRound: `<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>`,
  bot: `<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>`,
  terminal: `<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>`,

  // ── Segments (from HubFlyout.tsx) ──
  sparkle: `<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>`,
  wrench: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
  database: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>`,
  orbit: `<circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M10.4 21.9a10 10 0 0 0 9.66-1.66"/><path d="M3.94 3.94a10 10 0 0 1 16.16 13.06"/><path d="M21.9 10.4a10 10 0 0 0-1.66 9.66"/><path d="M3.94 20.06A10 10 0 0 1 6.1 4.92"/>`,
  plug: `<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z"/>`,
  puzzle: `<path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.969-.925a2.501 2.501 0 1 0-3.214 3.214c.446.167.855.5.925.969a.98.98 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/>`,
  clock: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  columns3: `<path d="M3 3h18v-6H3z"/><path d="M3 21h18v-6H3z"/><path d="M9 3v18"/><path d="M15 3v18"/>`,
  webhook: `<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.06 2.04L9.9 19c.06 1.07.96 1.95 2.06 1.95h6c1.1 0 2-.9 2-2v-5.99c0-1.1-.9-2-2-2z"/><path d="M21 16.98V13c0-1.1-.9-2-2-2h-5.99c-1.1 0-2 .9-2 2v3.98c0 1.1.9 2 2 2h5.99c1.1 0 2-.9 2-2z"/><path d="M3 8.01V5c0-1.1.9-2 2-2h3.99c1.1 0 2 .9 2 2v3.99c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2z"/><path d="M9 8.01V11c0 1.1.9 2 2 2h3.99c1.1 0 2-.9 2-2V8.01c0-1.1-.9-2-2-2H11c-1.1 0-2 .9-2 2z"/>`,
  keyRound: `<path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>`,
  heartPulse: `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.6 0-3 .5-4.5 2-1.5-1.5-3-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>`,
  barChart3: `<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>`,
  activity: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`,
  scrollText: `<path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>`,

  // ── Features (Lucide icons common in app screens) ──
  star: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
  folderOpen: `<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/>`,
  folder: `<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>`,
  search: `<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`,
  listFilter: `<path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/>`,
  messageSquareText: `<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>`,
  checkSquare: `<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>`,
  square: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>`,
  plus: `<path d="M12 5v14"/><path d="M5 12h14"/>`,
  x: `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`,
  rotateCcw: `<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>`,
  chevronRight: `<path d="m9 18 6-6-6-6"/>`,
  pencil: `<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>`,
  trash2: `<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>`,
  home: `<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
  package: `<path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>`,

  // ── Feature icons picked from common UX patterns ──
  refreshCw: `<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>`,
  zap: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
  layers: `<path d="m12 2 9 4.5v15l-9-4.5z"/><path d="m3 7 9 4.5 9-4.5"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 17 9 4.5 9-4.5"/>`,
  file: `<path d="M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h.5Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>`,
  folderGit2: `<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><circle cx="12" cy="13" r="2"/><path d="M12 15v3a2 2 0 0 0 2 2h2"/>`,
  listChecks: `<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>`,
  alertCircle: `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`,
  bell: `<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`,
  sliders: `<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>`,
  command: `<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>`,
  mic: `<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>`,
  micOff: `<line x1="2" y1="2" x2="22" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" y1="19" x2="12" y2="22"/>`,
  speaker: `<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><circle cx="12" cy="14" r="4"/><line x1="12" y1="6" x2="12.01" y2="6"/>`,
  headphones: `<path d="M3 14h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"/><path d="M21 14h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z"/><path d="M3 14v-4a9 9 0 0 1 18 0v4"/>`,
  hand: `<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>`,
  arrowUpDown: `<path d="m21 16-4-4 4-4"/><path d="M17 12H3"/><path d="m21 8-4 4-4-4"/><path d="M17 4H3"/>`,
  network: `<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><path d="M5 16v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><path d="M12 12V8"/>`,
  shieldCheck: `<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/><polyline points="9 12 11 14 15 10"/>`,
  shield: `<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>`,
  fileText: `<path d="M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h.5Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M10 13H8"/><path d="M10 17H8"/><path d="M14 9h2"/><path d="M14 13h2"/>`,
  code: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
  hash: `<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>`,
  tag: `<path d="M12.586 2H 4a2 2 0 0 0-2 2v7.586a2 2 0 0 0 .586 1.414l8.586 8.586a2 2 0 0 0 2.828 0l7.586-7.586a2 2 0 0 0 0-2.828L14 2z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>`,
  trash: `<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`,
  image: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>`,
  film: `<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>`,
  link2: `<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/>`,
  play: `<polygon points="6 3 20 12 6 21 6 3"/>`,
  pause: `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`,
  stop: `<rect x="5" y="5" width="14" height="14" rx="1"/>`,
  send: `<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>`,
  paperclip: `<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>`,
  camera: `<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>`,
  bellRing: `<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/><path d="M22 8c0-2.3-.8-4.3-2-6"/>`,
  eye: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`,
  edit: `<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`,
  power: `<path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>`,
  gitBranch: `<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>`,
  save: `<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>`,
  upload: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>`,
  download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,
  smartphone: `<rect x="6" y="2" width="12" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`,
  tablet: `<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`,
  monitor: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,
  terminalSquare: `<path d="M7 11l2 2-2 2"/><path d="M11 13h4"/><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>`,
  key: `<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>`,
  lock: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
  unlock: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>`,
  globe: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
  zapOff: `<polyline points="12.41 13.41 5 21"/><polyline points="18.36 16.96 21 19"/><line x1="8" y1="18.94" x2="1.41" y2="12.41"/><line x1="15.66" y1="5.06" x2="22" y2="14.5"/><line x1="16.85" y1="11.25" x2="8" y2="2"/><line x1="22" y1="2" x2="22" y2="6"/>`,
  gitCommit: `<circle cx="12" cy="12" r="3"/><line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/>`,
  gitMerge: `<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>`,
  cpu: `<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="15" x2="22" y2="15"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="15" x2="4" y2="15"/><line x1="10" y1="10" x2="14" y2="14"/><line x1="14" y1="10" x2="10" y2="14"/>`,
  archive: `<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>`,
  inbox: `<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>`,
  pieChart: `<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>`,
  trendingUp: `<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>`,
  fileSearch: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7.5"/><path d="M20 14V8a2 2 0 0 0-2-2h-4"/><path d="M20 21a4 4 0 1 1-4-4"/><path d="M22 21l-2-2"/>`,
  receipt: `<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h6"/>`,
  bluetooth: `<path d="m7 7 10 10-5 5V2l5 5L7 17"/>`,
  info: `<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`,
  at: `<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>`,
  dot: `<circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>`,
  qr: `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3z"/><path d="M14 21h3"/><path d="M21 14v3"/><path d="M21 21h.01"/>`,
  table: `<path d="M12 3v18"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/>`,
  share2: `<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>`,
  cloud: `<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>`,
  map: `<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/>`,
};

/* ── Map by hub key (used in landing explorer + app map rail + app map detail) ── */
const HUB_ICONS = {
  dashboard: LUCIDE.layoutDashboard,
  chat: LUCIDE.messageSquare,
  bots: LUCIDE.bot,
  sessions: LUCIDE.messageSquareText,
  brain: LUCIDE.brain,
  work: LUCIDE.workflow,
  connect: LUCIDE.radio,
  system: LUCIDE.server,
  settings: LUCIDE.settings,
};

/* ── Segment icons (one per segment label) ── */
const SEGMENT_ICONS = {
  // Dashboard
  'Agent status': LUCIDE.activity,
  'Performance': LUCIDE.barChart3,
  'Capabilities': LUCIDE.layers,
  'Needs attention': LUCIDE.bellRing,
  'Quick compose': LUCIDE.send,
  'Profile switcher': LUCIDE.userRound,

  // Chat
  'Live streaming': LUCIDE.zap,
  'Voice': LUCIDE.mic,
  'Media & artifacts': LUCIDE.image,
  'Approvals': LUCIDE.checkSquare,
  'Queue & steer': LUCIDE.arrowUpDown,
  'Subagents': LUCIDE.gitBranch,
  'Composer tools': LUCIDE.paperclip,
  'Share from other apps': LUCIDE.share2,
  'Cloud': LUCIDE.cloud,
  'Feedback & info': LUCIDE.messageSquareText,
  'Files': LUCIDE.folder,
  'Processes': LUCIDE.activity,

  // Bots
  'Agents': LUCIDE.bot,
  'Routines': LUCIDE.clock,

  // Sessions
  'Inbox': LUCIDE.inbox,
  'Folders & projects': LUCIDE.folder,
  'Search': LUCIDE.search,
  'Management': LUCIDE.listChecks,

  // Brain
  'Models': LUCIDE.database,
  'Skills': LUCIDE.sparkle,
  'Tools': LUCIDE.wrench,
  'Memory': LUCIDE.database,
  'Star Map': LUCIDE.orbit,
  'MCP': LUCIDE.plug,
  'Plugins': LUCIDE.puzzle,

  // Work
  'Artifacts': LUCIDE.package,
  'Cron jobs': LUCIDE.clock,
  'Kanban': LUCIDE.columns3,

  // Connect
  'Channels': LUCIDE.radio,
  'Webhooks': LUCIDE.webhook,
  'Pairing': LUCIDE.keyRound,

  // System
  'Health': LUCIDE.heartPulse,
  'Analytics': LUCIDE.barChart3,
  'Setup': LUCIDE.settings,
  'Ops console': LUCIDE.terminal,
  'Logs': LUCIDE.scrollText,
  'Power tools': LUCIDE.wrench,

  // Settings
  'Servers': LUCIDE.server,
  'Connection': LUCIDE.network,
  'Appearance & Themes': LUCIDE.eye,
  'Profile': LUCIDE.userRound,
};

/* ── Feature icons — every feature mapped to a real Lucide icon ── */
const FEATURE_ICONS = {
  // Chat — Live streaming
  'Streaming text': LUCIDE.zap,
  'Reasoning rows': LUCIDE.brain,
  'Tool timeline': LUCIDE.wrench,
  'Code blocks': LUCIDE.code,
  'Tables': LUCIDE.table ?? LUCIDE.listFilter,
  'Context ring': LUCIDE.cpu,
  'Readable tool cards': LUCIDE.terminalSquare,
  'Compacted history': LUCIDE.archive,

  // Chat — Voice
  'Dictate': LUCIDE.mic,
  'Read aloud': LUCIDE.speaker,
  'Voice conversation': LUCIDE.headphones,
  'Audio playback': LUCIDE.play,

  // Chat — Media & artifacts
  'MEDIA: paths': LUCIDE.image,
  'Host files': LUCIDE.file,
  'HTML preview': LUCIDE.code,
  'SVG preview': LUCIDE.image,
  'Session artifacts': LUCIDE.package,

  // Chat — Approvals
  'Approve / deny': LUCIDE.checkSquare,
  'Clarify': LUCIDE.alertCircle,
  'Sudo': LUCIDE.terminal,
  'Secret': LUCIDE.lock,
  'Prompt recovery': LUCIDE.rotateCcw,
  'Long option lists': LUCIDE.layers,

  // Chat — Queue & steer
  'Send queue': LUCIDE.arrowUpDown,
  'Queue panel': LUCIDE.arrowUpDown,
  'Steer': LUCIDE.hand,
  'Stop': LUCIDE.stop,
  'Session loops': LUCIDE.refreshCw,
  'Loop controls': LUCIDE.play,
  'Loop wakeups': LUCIDE.bell,

  // Chat — Subagents
  'Subagent list': LUCIDE.gitBranch,
  'Async delegation': LUCIDE.gitBranch,

  // Chat — Share from other apps
  'Send to chat': LUCIDE.share2,
  'Destination picker': LUCIDE.folder,
  'Stage in composer': LUCIDE.pencil,
  'Size guard': LUCIDE.shield,

  // Chat — Live streaming links
  'Tappable links': LUCIDE.link2,

  // Connect — Cloud
  'Cloud sign-in': LUCIDE.cloud,
  'Cookie reconnect': LUCIDE.refreshCw,

  // Settings — Feedback & info
  'Feedback': LUCIDE.messageSquareText,
  'What\u2019s New': LUCIDE.bell,
  'Backup preview': LUCIDE.listChecks,
  'Feature map': LUCIDE.map,

  // Work — Files
  'File browser': LUCIDE.folder,
  '@file chips': LUCIDE.fileText,
  '@folder chips': LUCIDE.folder,
  'Stable pins': LUCIDE.refreshCw,

  // Work — Processes
  'Process list': LUCIDE.activity,
  'Start / stop': LUCIDE.power,
  'Job sheet': LUCIDE.terminalSquare,

  // Work — Kanban
  'Request review': LUCIDE.checkSquare,

  // Brain — Skills
  'Open & edit': LUCIDE.pencil,
  'Invocation chips': LUCIDE.sparkle,

  // Dashboard — Quick compose
  'Spotlight search': LUCIDE.search,
  'Update banner': LUCIDE.bell,

  // Chat — Composer tools
  'Attachments': LUCIDE.paperclip,
  'Slash skills': LUCIDE.hash,
  '@ mentions': LUCIDE.at,
  'Prompt improve': LUCIDE.sparkle,
  'YOLO mode': LUCIDE.zap,
  'Todo status': LUCIDE.listChecks,
  'Model & effort': LUCIDE.sliders,
  'Model & effort row': LUCIDE.sliders,
  'Fast lane': LUCIDE.zap,
  'Effort Off → Ultra': LUCIDE.sliders,
  'Activity stack': LUCIDE.layers,
  'Persistent task plans': LUCIDE.listChecks,
  'Dictate from Home': LUCIDE.mic,
  'Voice chat from Home': LUCIDE.headphones,
  'Technical activity view': LUCIDE.code,

  // Bots Mode — Agents and Routines
  'Bots': LUCIDE.bot,
  'Agent search': LUCIDE.search,
  'Agent roster': LUCIDE.bot,
  'Open Bot Chat': LUCIDE.messageSquare,
  'Bot actions': LUCIDE.arrowUpDown,
  'Bot details': LUCIDE.edit,
  'New Agent': LUCIDE.plus,
  'Agent identity': LUCIDE.userRound,
  'Bot avatar': LUCIDE.image,
  'Star Map for a bot': LUCIDE.orbit,
  'Hide from roster': LUCIDE.eye,
  'Hidden agents': LUCIDE.eye,
  'Assign with @': LUCIDE.at,
  'Assignment receipts': LUCIDE.activity,
  'Bot request cards': LUCIDE.messageSquareText,
  'Agent routines': LUCIDE.clock,
  'Create routine': LUCIDE.plus,
  'Routine controls': LUCIDE.play,

  // Dashboard — Agent status
  'Agent health': LUCIDE.heartPulse,
  'Active model': LUCIDE.database,
  'Live sessions': LUCIDE.activity,

  // Dashboard — Performance
  'Usage stats': LUCIDE.trendingUp,
  'Host gauges': LUCIDE.cpu,
  'Sparklines': LUCIDE.trendingUp,

  // Dashboard — Capabilities
  'Subsystem chips': LUCIDE.layers,

  // Dashboard — Needs attention
  'Alerts': LUCIDE.bellRing,
  'Agent update modal': LUCIDE.bell,

  // Dashboard — Quick compose
  'Composer': LUCIDE.send,

  // Dashboard — Profile switcher
  'Profile sheet': LUCIDE.userRound,

  // Sessions — Inbox
  'Session list': LUCIDE.listFilter ?? LUCIDE.inbox,
  'Star': LUCIDE.star,
  'Live badges': LUCIDE.activity,

  // Sessions — Folders & projects
  'Folders': LUCIDE.folderOpen,
  'Projects': LUCIDE.folderGit2,

  // Sessions — Search
  'Full-text search': LUCIDE.search,

  // Sessions — Management
  'Bulk select': LUCIDE.listChecks,
  'Archive / prune': LUCIDE.archive,
  'Rename': LUCIDE.pencil,

  // Brain — Models
  'Provider catalog': LUCIDE.server,
  'Fallback chain': LUCIDE.refreshCw,
  'Effort control': LUCIDE.sliders,

  // Brain — Skills
  'Skill list': LUCIDE.sparkle,

  // Brain — Tools
  'Toolsets': LUCIDE.wrench,
  'Toolset env': LUCIDE.key,

  // Brain — Memory
  'Memory blocks': LUCIDE.database,

  // Brain — Star Map
  'Constellation': LUCIDE.orbit,
  'Clusters': LUCIDE.layers,
  'Timeline': LUCIDE.clock,
  'Node editor': LUCIDE.edit,
  'Curator': LUCIDE.refreshCw,

  // Brain — MCP & plugins
  'MCP servers': LUCIDE.plug,
  'Plugins': LUCIDE.puzzle,

  // Work — Artifacts
  'Artifacts browser': LUCIDE.package,
  'Viewer': LUCIDE.eye,
  'Offline-first': LUCIDE.archive,

  // Work — Cron
  'Job list': LUCIDE.clock,
  'Run now': LUCIDE.play,
  'Status badges': LUCIDE.listChecks,

  // Work — Kanban
  'Board': LUCIDE.columns3,

  // Connect — Channels
  'Channel status': LUCIDE.radio,
  'Connect a channel': LUCIDE.plus,

  // Connect — Webhooks
  'Webhook list': LUCIDE.webhook,

  // Connect — Pairing
  'Pairing requests': LUCIDE.keyRound,
  'QR provisioning': LUCIDE.qr,

  // System — Health
  'Host gauges': LUCIDE.heartPulse,
  'Gateway status': LUCIDE.shieldCheck,
  'Memory & disk alerts': LUCIDE.activity,

  // System — Analytics
  'Usage trends': LUCIDE.trendingUp,

  // System — Setup
  'App features': LUCIDE.sliders,
  'Voice setup': LUCIDE.mic,
  'Thinking depth': LUCIDE.brain,
  'Safety': LUCIDE.shieldCheck,
  'UI': LUCIDE.eye,

  // System — Ops
  'Console': LUCIDE.terminal,

  // System — Logs
  'Log stream': LUCIDE.scrollText,

  // System — Power tools
  'Config editor': LUCIDE.edit,
  'Environment': LUCIDE.key,
  'OAuth login': LUCIDE.keyRound,
  'Profiles': LUCIDE.userRound,
  'Files': LUCIDE.folder,
  'Credentials': LUCIDE.keyRound,

  // Settings
  'Server list': LUCIDE.server,
  'Connection details': LUCIDE.network,
  'Tailscale check': LUCIDE.shieldCheck,
  'Theme': LUCIDE.eye,
  'Active profile': LUCIDE.userRound,
};
const DEFAULT_FEATURE_ICON = LUCIDE.dot;

/* ── Surface → icon-name registry (mirrors hermes-mobile's AppDrawerContent.tsx) ── */
const SEG_ICON_BY_KEY = {
  'models': LUCIDE.sparkle,
  'skills': LUCIDE.brain,
  'tools': LUCIDE.wrench,
  'memory': LUCIDE.database,
  'starmap': LUCIDE.orbit,
  'mcp': LUCIDE.plug,
  'plugins': LUCIDE.puzzle,
  'artifacts': LUCIDE.sparkle,
  'cron': LUCIDE.clock,
  'kanban': LUCIDE.columns3,
  'channels': LUCIDE.radio,
  'webhooks': LUCIDE.webhook,
  'pairing': LUCIDE.keyRound,
  'health': LUCIDE.heartPulse,
  'analytics': LUCIDE.barChart3,
  'ops': LUCIDE.activity,
  'logs': LUCIDE.scrollText,
  'setup': LUCIDE.settings,
};

/* ── App map: hierarchical data ── */
const HUB_MAP = [
  {
    key: 'dashboard', label: 'Dashboard', icon: 'dashboard', tag: 'Agent at a glance',
    segments: [
      {
        label: 'Agent status', desc: 'Live health · model · active sessions',
        features: [
          { name: 'Agent health', desc: 'Host and gateway status at a glance', where: 'Dashboard · top' },
          { name: 'Active model', desc: 'Currently configured model, one tap to change', where: 'Dashboard · top' },
          { name: 'Live sessions', desc: 'How many sessions are active right now', where: 'Dashboard · top' },
        ],
      },
      {
        label: 'Performance', desc: 'Tokens, sessions, CPU & memory',
        features: [
          { name: 'Usage stats', desc: 'Token and session totals over the window', where: 'Dashboard · Performance' },
          { name: 'Host gauges', desc: 'CPU and memory of the agent machine', where: 'Dashboard · Performance' },
          { name: 'Sparklines', desc: 'Trends for each metric', where: 'Dashboard · Performance' },
        ],
      },
      {
        label: 'Capabilities', desc: 'Skills · tools · MCP · cron summaries',
        features: [
          { name: 'Subsystem chips', desc: 'Skills, tools, MCP servers, cron jobs — counts at a glance', where: 'Dashboard · Capabilities' },
        ],
      },
      {
        label: 'Needs attention', desc: 'Alerts & agent update notices',
        features: [
          { name: 'Alerts', desc: 'Inline banner for things that need action', where: 'Dashboard · Alerts' },
          { name: 'Agent update modal', desc: 'Quiet notice when the backend moves ahead of mobile', where: 'Dashboard · Alerts' },
        ],
      },
      {
        label: 'Quick compose', desc: 'Send a message right from home',
        features: [
          { name: 'Composer', desc: 'Type and send without opening the chat screen', where: 'Dashboard · bottom' },
          { name: 'Model & effort row', desc: 'Pick model and effort when the keyboard opens', where: 'Dashboard · composer' },
          { name: 'Spotlight search', desc: 'Jump to any screen or action — new chat, Feature map, cron, console, profile switcher', where: 'Drawer rail · Search' },
          { name: 'Update banner', desc: 'In-app "update available" / "update ready" with Update, Restart, or Retry', where: 'Home · top' },
          { name: 'Dictate from Home', desc: 'Speech becomes draft text in the Home composer', where: 'Home · mic button' },
          { name: 'Voice chat from Home', desc: 'Hands-free talk opens Chat when the Home session starts', where: 'Home · mic button' },
        ],
      },
      {
        label: 'Profile switcher', desc: 'Switch active profile',
        features: [
          { name: 'Profile sheet', desc: 'Swap between profiles, updates every surface', where: 'Dashboard · header' },
        ],
      },
    ],
  },
  {
    key: 'chat', label: 'Chat', icon: 'chat', tag: 'Liquid Glass',
    segments: [
      {
        label: 'Live streaming', desc: 'Reasoning rows · tool timeline · markdown',
        features: [
          { name: 'Streaming text', desc: 'Responses appear as they generate', where: 'Chat · thread' },
          { name: 'Reasoning rows', desc: 'Live thinking with interim steps', where: 'Chat · thread' },
          { name: 'Tool timeline', desc: 'Every tool call with status and duration', where: 'Chat · thread' },
          { name: 'Markdown', desc: 'Headers, lists, emphasis, and collapsible details sections in messages', where: 'Chat · thread' },
          { name: 'Tables', desc: 'GFM tables with horizontal scroll', where: 'Chat · thread' },
          { name: 'Code blocks', desc: 'Syntax-highlighted with copy button', where: 'Chat · thread' },
          { name: 'Tappable links', desc: 'Bare http(s) links open on tap — even inside code blocks', where: 'Chat · message' },
          { name: 'Context ring', desc: 'Live context window usage', where: 'Chat · header' },
          { name: 'Readable tool cards', desc: 'Tool results shown as readable values, chips, lists, and markdown', where: 'Chat · tool card' },
          { name: 'Compacted history', desc: 'Archived rows continue past an in-place compaction boundary', where: 'Chat · history' },
          { name: 'Technical activity view', desc: 'Raw JSON for tool calls instead of styled activity cards', where: 'Chat · Activity sheet header' },
        ],
      },
      {
        label: 'Voice', desc: 'Dictate · hear replies · hands-free loop',
        features: [
          { name: 'Dictate', desc: 'Hold the mic, speak, text lands in the composer', where: 'Composer · mic' },
          { name: 'Read aloud', desc: 'Hear any reply through the speaker button', where: 'Message · bubble' },
          { name: 'Voice conversation', desc: 'Hands-free loop: listen → think → speak', where: 'Composer · voice bar' },
          { name: 'Audio playback', desc: 'Play TTS tool audio inline', where: 'Chat · tool card' },
        ],
      },
      {
        label: 'Media & artifacts', desc: 'Inline images · audio · HTML previews',
        features: [
          { name: 'MEDIA: paths', desc: 'Agent replies with MEDIA: render inline — images open a full-screen viewer', where: 'Chat · thread' },
          { name: 'Host files', desc: 'Deliverable paths open in a file preview', where: 'Chat · thread' },
          { name: 'HTML preview', desc: 'Fenced HTML renders in a live WebView with source toggle', where: 'Chat · content card' },
          { name: 'SVG preview', desc: 'Fenced SVG renders live, size-capped', where: 'Chat · content card' },
          { name: 'Session artifacts', desc: 'Every media item from a session, searchable', where: 'Chat header · Package' },
        ],
      },
      {
        label: 'Approvals', desc: 'Approve · clarify · sudo · secret prompts',
        features: [
          { name: 'Approve / deny', desc: 'Approve or reject agent actions inline', where: 'Chat · prompt card' },
          { name: 'Clarify', desc: 'Answer single or multiple questions with multi-select, Other, Confirm, or Skip', where: 'Chat · prompt card' },
          { name: 'Sudo', desc: 'Enter a password when the agent needs elevation', where: 'Chat · prompt card' },
          { name: 'Secret', desc: 'Provide secrets without leaking them into chat', where: 'Chat · prompt card' },
          { name: 'Prompt recovery', desc: 'Parked approvals and clarify prompts return after reconnect', where: 'Chat · prompt card' },
          { name: 'Long option lists', desc: 'Options wrap and scroll while Other and Confirm stay reachable', where: 'Chat · prompt card' },
        ],
      },
      {
        label: 'Queue & steer', desc: 'Hold to queue · mid-run steering',
        features: [
          { name: 'Send queue', desc: 'Hold send to queue a message behind the running turn', where: 'Composer · send' },
          { name: 'Queue panel', desc: 'See and manage the queued messages', where: 'Composer · queue chip' },
          { name: 'Steer', desc: 'Guide the agent mid-run without interrupting', where: 'Composer · steer' },
          { name: 'Stop', desc: 'Cancel the current turn cleanly', where: 'Composer · stop' },
          { name: 'Session loops', desc: 'Keep recurring /loop work pinned with countdown and status', where: 'Composer · loop card' },
          { name: 'Loop controls', desc: 'Pause, resume, or stop a loop from its card', where: 'Composer · loop card' },
          { name: 'Loop wakeups', desc: 'Quiet wakeup markers keep recurring work out of chat bubbles', where: 'Chat · thread' },
        ],
      },
      {
        label: 'Subagents', desc: 'Live delegation & async task cards',
        features: [
          { name: 'Subagent list', desc: 'Live thoughts and tool calls of delegated workers', where: 'Chat · thread' },
          { name: 'Async delegation', desc: 'Background tasks keep running, status shown inline', where: 'Chat · thread' },
        ],
      },
      {
        label: 'Share from other apps', desc: 'Send files & links into chat',
        features: [
          { name: 'Send to chat', desc: 'Share images, PDFs, Word/Excel, text, or links from any app straight into Hermes', where: 'OS share · Send to chat' },
          { name: 'Destination picker', desc: 'Folders, starred sessions, search, or a new chat', where: 'Send to chat · picker' },
          { name: 'Stage in composer', desc: 'Never auto-sends — merges with whatever is already drafted', where: 'Composer · staged' },
          { name: 'Size guard', desc: 'Shares over 25 MB rejected with a clear message before upload', where: 'Send to chat · upload' },
        ],
      },
      {
        label: 'Composer tools', desc: 'Attachments · skills · mentions · improve',
        features: [
          { name: 'Attachments', desc: 'Gallery and camera images attach to the message', where: 'Composer · +' },
          { name: 'Slash skills', desc: 'Type / to pick from installed skills', where: 'Composer · /' },
          { name: '@ mentions', desc: 'Reference files and folders inline', where: 'Composer · @' },
          { name: 'Prompt improve', desc: 'Polish a draft with the auxiliary model', where: 'Composer · ✦' },
          { name: 'YOLO mode', desc: 'Toggle auto-approval for the session', where: 'Composer · toggle' },
          { name: 'Todo status', desc: 'Live task checklist synced with the run', where: 'Composer · panel' },
          { name: 'Model & effort', desc: 'Per-session model and reasoning effort', where: 'Chat · header' },
          { name: 'Fast lane', desc: 'Priority processing on supported models — Use Fast or Standard on pick', where: 'Chat · header' },
          { name: 'Effort Off → Ultra', desc: 'Reasoning effort for the session and as a profile default', where: 'Chat · header' },
          { name: 'Activity stack', desc: 'Todos, subagents, loops, and background status cards share a compact stack above the input', where: 'Composer · activity' },
          { name: 'Persistent task plans', desc: 'Unfinished todo lists stay pinned across turns', where: 'Composer · todo card' },
        ],
      },
    ],
  },
  {
    key: 'bots', label: 'Bots', icon: 'bots', tag: 'Agents · Routines',
    segments: [
      {
        label: 'Agents', desc: 'Named teammates with their own chat and identity',
        features: [
          { name: 'Bots', desc: 'Roster of named AI teammates on this Hermes host', where: 'Drawer rail · after Chat' },
          { name: 'Agent search', desc: 'Find teammates by display name, handle, profile, or description', where: 'Bots · Agents · search' },
          { name: 'Agent roster', desc: 'Faces, previews, last-active time, status pills, and unread work', where: 'Bots · Agents' },
          { name: 'Open Bot Chat', desc: 'Open the pinned forever conversation; /new compacts it instead of resetting it', where: 'Bots · Agents · Details' },
          { name: 'Bot actions', desc: 'Open Details or start a new scratch chat from the roster', where: 'Bots · Agents · swipe' },
          { name: 'Bot details', desc: 'Edit identity, model, skills, tools, MCP, SOUL, chats, and routines', where: 'Bots · Details' },
          { name: 'New Agent', desc: 'Create or clone a named teammate with its own profile', where: 'Bots · Agents · +' },
          { name: 'Agent identity', desc: 'Live face moods, photo avatars, stable handles, Default and In Chat state', where: 'Bots · Agents · roster' },
          { name: 'Bot avatar', desc: 'Choose a face, upload a photo, or generate an image', where: 'Bots · Details or New Agent' },
          { name: 'Star Map for a bot', desc: 'Open that teammate’s learning graph from Details', where: 'Bots · Details' },
          { name: 'Hide from roster', desc: 'Remove an agent from the visible list while mentions and routines keep working', where: 'Bots · Details' },
          { name: 'Hidden agents', desc: 'Reveal dimmed hidden agents and see which one has new activity', where: 'Bots · Agents' },
          { name: 'Assign with @', desc: 'Ask one or several teammates from any chat or Home and receive their reply here', where: 'Chat or Home · composer · @' },
          { name: 'Assignment receipts', desc: 'Desktop-style Asking, Waiting, Couldn\'t reach, and Replied handoff status with open-chat shortcuts', where: 'Chat · assignment card' },
          { name: 'Bot request cards', desc: 'Assigned agents see who asked and what was requested, with collapse, expand, and copy', where: 'Bot Chat · inbound card' },
        ],
      },
      {
        label: 'Routines', desc: 'Scheduled work owned by a teammate',
        features: [
          { name: 'Agent routines', desc: 'Interval, daily, or one-time work that runs as a chosen teammate', where: 'Bots · Routines' },
          { name: 'Create routine', desc: 'Pick an agent, instruction, schedule mode, and live expression preview', where: 'Bots · Routines · create' },
          { name: 'Routine controls', desc: 'Filter, pause, resume, run now, inspect history, or delete', where: 'Bots · Routines · detail' },
        ],
      },
    ],
  },
  {
    key: 'sessions', label: 'Sessions', icon: 'sessions', tag: 'Your conversations',
    segments: [
      {
        label: 'Inbox', desc: 'Recency list with server stars',
        features: [
          { name: 'Session list', desc: 'All sessions, most recent first', where: 'Sessions · Inbox' },
          { name: 'Star', desc: 'Server-side pin — visible across devices', where: 'Session · row' },
          { name: 'Live badges', desc: 'Active sessions marked with a pulse', where: 'Session · row' },
        ],
      },
      {
        label: 'Folders & projects', desc: 'Local pin groups & projects',
        features: [
          { name: 'Folders', desc: 'Group sessions locally with client-prefs backup', where: 'Sessions · Folders' },
          { name: 'Projects', desc: 'Organize sessions by project workspace', where: 'Sessions · Projects' },
        ],
      },
      {
        label: 'Search', desc: 'FTS across message bodies',
        features: [
          { name: 'Full-text search', desc: 'Keyword search across message bodies with snippets', where: 'Sessions · search' },
        ],
      },
      {
        label: 'Management', desc: 'Bulk actions · rename · archive',
        features: [
          { name: 'Bulk select', desc: 'Select many sessions and archive or delete at once', where: 'Sessions · toolbar' },
          { name: 'Archive / prune', desc: 'Soft-hide or clean up old sessions', where: 'Sessions · row menu' },
          { name: 'Rename', desc: 'Edit a session title', where: 'Session · row menu' },
        ],
      },
    ],
  },
  {
    key: 'brain', label: 'Brain', icon: 'brain', tag: 'Knowledge · Tools',
    segments: [
      {
        label: 'Models', desc: 'Providers · fallback chain · effort',
        features: [
          { name: 'Provider catalog', desc: 'Configure providers and assign models', where: 'Brain · Models' },
          { name: 'Fallback chain', desc: 'Auto-try model B when model A fails', where: 'Brain · Models · Fallback' },
          { name: 'Effort control', desc: 'Reasoning effort per model', where: 'Brain · Models' },
        ],
      },
      {
        label: 'Skills', desc: 'Enable & manage agent skills',
        features: [
          { name: 'Skill list', desc: 'Every installed skill with enable toggle', where: 'Brain · Skills' },
          { name: 'Open & edit', desc: 'Edit skills from the Skills hub or skill tool cards', where: 'Brain · Skills' },
          { name: 'Invocation chips', desc: 'Skill calls appear in history as chips, not expanded text', where: 'Chat · history' },
        ],
      },
      {
        label: 'Tools', desc: 'Toolsets with env config',
        features: [
          { name: 'Toolsets', desc: 'Enable or disable tool groups', where: 'Brain · Tools' },
          { name: 'Toolset env', desc: 'Set API keys needed by a toolset', where: 'Brain · Tools' },
        ],
      },
      {
        label: 'Memory', desc: 'Read & edit memory blocks',
        features: [
          { name: 'Memory blocks', desc: 'View and edit the memory sections', where: 'Brain · Memory' },
        ],
      },
      {
        label: 'Star Map', desc: 'Learning graph · clusters · timeline',
        features: [
          { name: 'Constellation', desc: 'Interactive graph of learned skills and memories', where: 'Brain · Star Map' },
          { name: 'Clusters', desc: 'Grouped by category with counts', where: 'Brain · Star Map' },
          { name: 'Timeline', desc: 'What the agent learned, in order', where: 'Brain · Star Map' },
          { name: 'Node editor', desc: 'Edit a skill or memory directly', where: 'Star Map · node sheet' },
          { name: 'Curator', desc: 'Pause, resume, or trigger auto-curation', where: 'Star Map · curator' },
        ],
      },
      {
        label: 'MCP', desc: 'Connect Model Context Protocol servers',
        features: [
          { name: 'MCP servers', desc: 'Connect and manage Model Context Protocol servers', where: 'Brain · MCP' },
        ],
      },
      {
        label: 'Plugins', desc: 'Enable or disable runtime plugins',
        features: [
          { name: 'Plugins', desc: 'Enable or disable runtime plugins', where: 'Brain · Plugins' },
        ],
      },
    ],
  },
  {
    key: 'work', label: 'Work', icon: 'work', tag: 'Deliverables · Schedules · Boards',
    segments: [
      {
        label: 'Artifacts', desc: 'Media & files from your sessions',
        features: [
          { name: 'Artifacts browser', desc: 'Images, audio, and files from recent sessions', where: 'Work · Artifacts' },
          { name: 'Viewer', desc: 'Full-screen image viewer with pinch zoom', where: 'Artifacts · item' },
          { name: 'Offline-first', desc: 'Browses cached session media without a connection', where: 'Work · Artifacts' },
        ],
      },
      {
        label: 'Cron jobs', desc: 'Schedules · run now · last status',
        features: [
          { name: 'Job list', desc: 'Every scheduled job with its next run', where: 'Work · Cron' },
          { name: 'Run now', desc: 'Trigger a job and watch it complete', where: 'Work · Cron · row' },
          { name: 'Status badges', desc: 'Success, run failure, and scheduled-fire error state per job', where: 'Work · Cron · row' },
        ],
      },
      {
        label: 'Kanban', desc: 'Live task board across columns',
        features: [
          { name: 'Board', desc: 'Tasks in columns, live updates', where: 'Work · Kanban' },
          { name: 'Request review', desc: 'Hand off ready or running tasks to review, with an optional note', where: 'Work · Kanban' },
        ],
      },
      {
        label: 'Files', desc: 'Browse host files · @file chips',
        features: [
          { name: 'File browser', desc: 'Browse the agent host filesystem from the phone', where: 'Work · Files' },
          { name: '@file chips', desc: 'Long-press a file to drop an @file chip into the composer without replacing your draft', where: 'Work · Files' },
          { name: '@folder chips', desc: 'Long-press a folder to reference it inline', where: 'Work · Files' },
          { name: 'Stable pins', desc: 'Browse pins and Review scopes survive cold start, reinstall, and backup', where: 'Work · Files' },
        ],
      },
      {
        label: 'Processes', desc: 'Background jobs from live sessions',
        features: [
          { name: 'Process list', desc: 'All background processes, filterable by running or finished', where: 'Work · Processes' },
          { name: 'Start / stop', desc: 'Launch or terminate a process with a confirmation prompt', where: 'Work · Processes' },
          { name: 'Job sheet', desc: 'Inspect output, stop a running job, or dismiss finished ones', where: 'Chat · meta row' },
        ],
      },
    ],
  },
  {
    key: 'connect', label: 'Connect', icon: 'connect', tag: 'Messaging · Events',
    segments: [
      {
        label: 'Channels', desc: 'Telegram · Discord · Slack',
        features: [
          { name: 'Channel status', desc: 'Configured channels with live status dots', where: 'Connect · Channels' },
          { name: 'Connect a channel', desc: 'Wire a messaging platform to the agent', where: 'Connect · Channels' },
        ],
      },
      {
        label: 'Webhooks', desc: 'HTTP event routes',
        features: [
          { name: 'Webhook list', desc: 'Enabled routes and their state', where: 'Connect · Webhooks' },
        ],
      },
      {
        label: 'Pairing', desc: 'Approve new users & QR',
        features: [
          { name: 'Pairing requests', desc: 'Approve or reject new user devices', where: 'Connect · Pairing' },
          { name: 'QR provisioning', desc: 'Scan to pair a new device', where: 'Connect · Pairing' },
        ],
      },
      {
        label: 'Cloud', desc: 'Hermes Cloud · portal sign-in',
        features: [
          { name: 'Cloud sign-in', desc: 'Sign in with the portal, pick your org and agent', where: 'Connect · Cloud' },
          { name: 'Cookie reconnect', desc: 'Stays connected without re-entering credentials', where: 'Connect · Cloud' },
        ],
      },
    ],
  },
  {
    key: 'system', label: 'System', icon: 'system', tag: 'Health · Control',
    segments: [
      {
        label: 'Health', desc: 'Host gauges & gateway status',
        features: [
          { name: 'Host gauges', desc: 'CPU, memory, disk of the agent machine', where: 'System · Health' },
          { name: 'Gateway status', desc: 'Connection state to the gateway', where: 'System · Health' },
          { name: 'Memory & disk alerts', desc: 'Advisory notices when the host reports elevated or critical pressure', where: 'Home · Health' },
        ],
      },
      {
        label: 'Analytics', desc: 'Usage trends & breakdowns',
        features: [
          { name: 'Usage trends', desc: 'Token and session activity over time', where: 'System · Analytics' },
        ],
      },
      {
        label: 'Setup', desc: 'App features · voice · think · safety · UI',
        features: [
          { name: 'App features', desc: 'Reactions, read aloud, voice input, compression, archive toggles', where: 'System · Setup · App Features' },
          { name: 'Voice setup', desc: 'TTS / STT providers and auto-speak', where: 'System · Setup · Voice' },
          { name: 'Thinking depth', desc: 'Reasoning budget for the agent', where: 'System · Setup · Think' },
          { name: 'Safety', desc: 'YOLO defaults and approval behavior', where: 'System · Setup · Safety' },
          { name: 'UI', desc: 'Theme and interface preferences', where: 'System · Setup · UI' },
        ],
      },
      {
        label: 'Ops console', desc: 'Commands with readable output',
        features: [
          { name: 'Console', desc: 'Run ops commands with readable, parsed output', where: 'System · Ops' },
        ],
      },
      {
        label: 'Logs', desc: 'Live system log stream',
        features: [
          { name: 'Log stream', desc: 'Live logs with pause-on-scroll', where: 'System · Logs' },
        ],
      },
      {
        label: 'Power tools', desc: 'Config · env · profiles · files · credentials',
        features: [
          { name: 'Config editor', desc: 'Full schema editor with search and batch save', where: 'System · Setup · Config' },
          { name: 'Environment', desc: 'View and manage secrets and keys', where: 'System · Setup · Env' },
          { name: 'OAuth login', desc: 'Sign in with provider tokens', where: 'System · Setup · Env' },
          { name: 'Profiles', desc: 'Create, switch, manage profiles, and nickname the default profile', where: 'System · Setup · Profiles' },
          { name: 'Files', desc: 'Browse host files from the phone', where: 'System · Setup · Files' },
          { name: 'Credentials', desc: 'Manage stored credentials', where: 'System · Setup · Credentials' },
        ],
      },
    ],
  },
  {
    key: 'settings', label: 'Settings', icon: 'settings', tag: 'Connection · Personal',
    segments: [
      {
        label: 'Servers', desc: 'Multi-server with URL switching',
        features: [
          { name: 'Server list', desc: 'Multiple Hermes instances, switch anytime', where: 'Settings · Servers' },
        ],
      },
      {
        label: 'Connection', desc: 'Auth · port · Tailscale check',
        features: [
          { name: 'Connection details', desc: 'Protocol, host, port, and auth state', where: 'Settings · Connection' },
          { name: 'Tailscale check', desc: 'Detects the VPN and offers to open it', where: 'Settings · Connection' },
        ],
      },
      {
        label: 'Appearance & Themes', desc: '16 presets · System / Dark / Light',
        features: [
          { name: 'Theme', desc: '16 presets with live previews, System / Dark / Light filters, and separate defaults', where: 'Settings · Appearance & Themes' },
        ],
      },
      {
        label: 'Profile', desc: 'Active profile',
        features: [
          { name: 'Active profile', desc: 'Which profile the app is connected as', where: 'Settings · Profile' },
        ],
      },
      {
        label: 'Feedback & info', desc: 'Feedback · What\u2019s New · backup preview',
        features: [
          { name: 'Feedback', desc: 'Submit bug, feature, improvement, or question with screenshots and status tracking', where: 'Settings · Feedback' },
          { name: 'What\u2019s New', desc: 'Release notes in-app, product version in the footer', where: 'Settings · What\u2019s New' },
          { name: 'Backup preview', desc: 'See what a prefs restore brings back before accepting', where: 'Settings · Backup' },
          { name: 'Feature map', desc: 'Search every screen, jump by area, tap to go straight to a feature', where: 'Settings · Feature map' },
        ],
      },
    ],
  },
];

// Expose for both pages
window.LUCIDE = LUCIDE;
window.SEGMENT_ICONS = SEGMENT_ICONS;
window.FEATURE_ICONS = FEATURE_ICONS;
window.DEFAULT_FEATURE_ICON = DEFAULT_FEATURE_ICON;
window.SEG_ICON_BY_KEY = SEG_ICON_BY_KEY;