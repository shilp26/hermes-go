# Changelog

All notable changes to **Hermes Go** are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — Update 2 — 2026-08-10

OTA update. No new APK — installed app self-updates. Same version, same hash.

### Added

#### Sessions
- **Session PR badges**: GitHub pull-request badges on session rows, tap to open in browser

#### Chat
- **Personality switch hairlines**: `personality_switch` renders as a muted "personality changed" timeline row (desktop parity)

### Fixed

#### Chat
- **Context ring stuck on "—" after lineage rebind**: `claimEffectiveSession` rebind (effective ≠ requested) now clears `_liveSessionId` so usage/breakdown re-resume against the leaf instead of the ancestor
- **Edit ordinals inflated by bookkeeping**: `userOrdinalBefore` now counts only `role=user` rows without `display_kind` — `model_switch` / `personality_switch` no longer inflate edit/restore ordinals

#### Gateway
- **Edit-truncate confirm flags**: `confirm_truncate=true` now sent with `truncate_before_user_ordinal` (gateway 4029); `confirm_empty_truncate` sent when ordinal is 0 (gateway 4028 / desktop rewind.ts parity)

#### Settings
- **Model picker scroll**: long provider lists no longer leave the expanded section off-screen; section Y is recorded on layout and scrolled into view

---

## [1.0.0] — Update 1 — 2026-08-10

OTA update. No new APK — installed app self-updates. Same version, same hash.

### Added

#### Sessions
- **Cold-open prefetch**: newest message page pre-warmed into SQLite so session opens paint from cache instead of blocking on the network

#### Chat
- **Slash-command interception** (desktop parity): `/learn`, `/goal`, and skill slash-commands are intercepted and dispatched natively — exec, plugin, prefill, skill, and alias modes supported; built-in commands surface in the Skills picker with per-kind icons
- **Multi-select photo attachments**: composer photo picker now allows multiple photos with ordered selection; oversized images are skipped with a summary alert instead of aborting
- **Session resume dedup**: one in-flight `session.resume` per gateway client + semantic key prevents duplicate transport calls

#### Workspace
- **Per-thread Review scope**: Review can now point at a specific folder independent of the agent CWD; "Not a git repository" empty state discovers git repos among subdirectories
- **Browse-pin prefs backup**: workspace pins are now part of the backup payload and restored across profile switches

### Fixed

#### Chat
- **Blank tool cards (browser + vision)**: root cause was `unwrapUntrusted` leaving prose preamble after stripping tags → `JSON.parse` returned null and blanked every specialized card; new shared `tool-result-parse.ts` library handles browser, vision, and web tool results with a robust loose JSON parser; cards now render screenshots, analysis, clicked/typed/pressed actions, console errors, and image artifacts
- **Context-usage auto-load on session open**: idle opens only hydrated HTTP history (no resume) so `_liveSessionId` was missing and auto-load never fired; new `context-usage-autoload.ts` guards auto-load with live-id checks and 300ms post-resume delay
- **Activity sheet re-rendering all rows on tool expand**: inline `onToggle` closures broke `memo()` on every row; refactored to one stable `useCallback` handler + adaptive progressive mount (batch 4 / 96ms for 40+ tools)

---

## [1.0.0] — 2026-08-09

First public release. The complete Hermes agent, in your pocket.

### Added

#### Chat — Liquid Glass
- Live streaming with reasoning rows and tool timelines
- Markdown rendering: headers, lists, emphasis, GFM tables, syntax-highlighted code blocks with copy button
- Context ring showing live context-window usage
- Inline media: images with full-screen viewer, audio playback, HTML fences → live WebView preview, SVG preview
- Session artifacts: every media item from a session, searchable (chat header · Package)
- Approvals: approve/deny, clarify, sudo, secret prompts
- Send queue (hold-to-queue), mid-run steering, clean stop
- Subagent lists with live delegation thoughts and tool calls
- Async delegation with background task cards
- Composer: attachments (gallery/camera), `/` skills palette, `@` mentions, prompt improve, YOLO mode, todo status panel
- Per-session model and reasoning-effort picker

#### Voice
- Hold-to-dictate (STT)
- Read-aloud (TTS) on any message
- Hands-free voice conversation loop
- Inline audio playback for TTS tool output

#### Dashboard
- Agent status: health, active model, live sessions
- Performance: usage stats, host gauges (CPU/memory), sparklines
- Capabilities: skills/tools/MCP/cron counts at a glance
- Alerts + agent-update modal
- Quick compose from home
- Profile switcher sheet

#### Sessions
- Inbox with server-side stars and live badges
- Folders & projects (local pin groups, client-prefs backup)
- Full-text search across message bodies with snippets
- Bulk select: archive/delete, rename

#### Brain
- Model provider catalog with fallback chain and effort control
- Skills with enable toggles
- Toolsets with environment configuration
- Memory block viewer/editor
- **Star Map**: interactive learning graph — constellation, clusters, timeline, node editor, curator controls
- MCP server connections
- Plugin toggles

#### Work
- Artifacts browser: images, audio, files from recent sessions
- Full-screen image viewer with pinch-zoom
- Offline-first artifact browsing (cached session media)
- Cron jobs: list, run-now, status badges
- Kanban board with live updates

#### Connect
- Channel status with live dots (Telegram, Discord, Slack)
- Webhook routes
- Pairing requests + QR provisioning

#### System
- Health: host gauges, gateway status
- Analytics: usage trends
- Setup: app features, voice, thinking depth, safety, UI
- Ops console with readable parsed output
- Live log stream with pause-on-scroll
- Power tools: config editor, environment, OAuth login, profiles, files, credentials

#### Settings
- Multi-server with URL switching
- Connection details + Tailscale detection
- Theme (dark/light)
- Active profile

#### Platform
- EAS Build (APK) + OTA updates via expo-updates
- Local-first SQLite persistence with background sync
- WebSocket JSON-RPC gateway client
- Android widget (HermesQuickActions) and share-intent (text/images/PDF) **native scaffolding configured** — UI/UX implementation planned (see Roadmap)

---

## [0.9.0] — 2026-08-06

### Added
- Star Map visualization and knowledge graph integration
- Queue panel sheet and async delegation
- Bulk prefetch utilities for sessions
- Composer todo status panel with live syncing
- Settings panel: connection and common jobs moved to new Settings surface
- Inverted FlatList expand/collapse scroll anchoring
- Composer tips, keep-awake streaming, workspace improvements
- Fallback model chain implementation
- App Features and Voice Master Plan

### Changed
- Chat composer tip page widened to include minimum conversation turns on open
- TodoStatusCard enhanced with expanded state and animations

---

## [0.8.0] — 2026-07-24

### Added
- Hermes Go project initialization with Expo configuration
- EAS Build + OTA update pipeline
- Multi-server support prep in Connect flow
- Image generation tool display fix
- Auto-pin runtimeVersion for OTA updates
- Performance optimizations and production logging

---

## [0.7.0] — 2026-07-19

### Added
- EAS Build configuration and OTA updates
- Metro config for WASM support
- ChatShell component with integrated session switcher and connection status
- Internal Repowiki documentation

---

## [0.6.0] — 2026-07-02

### Added
- Initial mobile application structure
- Hermes gateway connection flow
- JSON-RPC gateway client with WebSocket connection and event handling
- TUI Gateway JSON-RPC parity (tests, chat-store applyGatewayEvent, typed RPC wrappers)
- E2E smoke test against real Hermes gateway
- Comprehensive settings architecture with modular sub-screen management
- LiquidGlass chat architecture and comprehensive tool card system
- Model selection architecture with hook, UI components, and API integration
- Chat session management and persistence with Hermes server integration
- Local SQLite persistence layer with background-sync architecture
- Session branching and auto-compress status tracking
- Activity-bar drawer with session and skill management pane navigation
- Dashboard with API client, sync services, and UI components
- Chat workspace and git file review system with unified diff support
- System control center: environment management, configuration panels, health tracking
- Session management interface with search, archiving, and bulk actions
- Profile management system with persistent storage and sync-aware state
- 10 specialized tool cards (StatusRow, ExpandableBlock, TerminalOutputCard, etc.)
- Slash command palette using live gateway catalog
- Subagent list UI, review.summary + moa.* UI cards
- Clarify/sudo/secret prompt cards using proper RPCs

---

## [0.1.0] — 2026-06-27

### Added
- Initial commit — project scaffold

---

[1.0.0]: https://github.com/shilp26/hermes-go/releases/tag/v1.0.0
