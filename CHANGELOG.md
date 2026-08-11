# Changelog

All notable changes to **Hermes Go** are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.3] — 2026-08-11

OTA update. No new APK — installed app self-updates. Same version, same hash.

### Added

#### Share — from other apps
- **Send to chat**: share images, PDFs, Word/Excel files, text, or links from any app straight into Hermes — pick a session or start a new chat, and review the payload in the composer before anything is sent
- **Staged, never auto-sent**: shared content lands in the composer only, merging with any draft already in the box
- **Size guard**: shares over 25 MB are rejected with a clear message before upload

#### Chat
- **Tappable links**: bare http(s) links in assistant messages — including links inside code blocks — and in your own message bubbles now open on tap

### Changed

#### Chat
- **Shorter effort labels**: reasoning-effort chips in the composer are more compact (e.g. Medium → Med)

#### Sessions
- **Consistent picker height**: the session switcher and share picker keep the same height, so the destination list feels stable

---

## [1.0.2] — 2026-08-10

OTA update. No new APK — installed app self-updates. Same version, same hash.

### Added

#### Sessions
- **PR badges**: session rows now show GitHub pull-request badges — tap to open the PR in your browser

#### Chat
- **Personality changes**: switching your agent's personality now shows a subtle "personality changed" note in the timeline

### Fixed

#### Chat
- **Context ring**: no longer gets stuck on "—" when a session is rebound to its parent or child thread — usage and context breakdown now resume correctly
- **Message editing**: rewinds and edits stay accurate even after model or personality switches in the thread

#### Gateway
- **Rewind reliability**: message truncation and rewinds now confirm properly with the gateway, matching desktop behavior

#### Settings
- **Model picker**: long provider lists keep the expanded section in view when scrolling — no more losing the open group off-screen

---

## [1.0.1] — 2026-08-10

OTA update. No new APK — installed app self-updates. Same version, same hash.

### Added

#### Sessions
- **Instant open**: recent messages are pre-loaded in the background, so opening a session paints from cache instead of waiting on the network

#### Chat
- **Native slash commands**: `/learn`, `/goal`, and skill commands are now intercepted and run as real commands with proper output — no more sending them as plain text; built-in commands appear at the top of the Skills picker with their own icons
- **Multi-photo attachments**: attach several photos at once; oversized images are skipped with a summary instead of aborting the whole send
- **Cleaner reconnects**: duplicate session-resume calls are prevented, so reconnecting is faster and more reliable

#### Workspace
- **Review scope**: Review can now point at a specific folder — independent of where the agent is working; if a folder isn't a git repo, Review finds nearby git repos and lets you pick one
- **Pin backup**: workspace pins are backed up and restored across profile switches

### Fixed

#### Chat
- **Blank tool cards**: browser and vision tool results no longer show as empty cards — screenshots, analysis, actions taken, and errors now render fully
- **Context usage on open**: the context-window usage ring now loads automatically when a session opens (previously it only appeared after a manual refresh)
- **Activity sheet performance**: expanding a tool no longer re-renders the entire list — smooth even with 40+ tools in a session

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
