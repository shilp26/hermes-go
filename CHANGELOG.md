# Changelog

All notable changes to **Hermes Go** are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.13] — 2026-08-20

OTA update — the installed app self-updates.

### Added

#### 🎨 Themes — 16 presets with live gallery
- **Theme gallery**: choose from 16 WCAG-minded presets with live preview cards in a 2-column grid.
- **Dark presets**: Obsidian Teal, Midnight OLED, Tokyo Night, Catppuccin Mocha, Nord Polar, Rosé Pine Moon, Cyber Synthwave, Obsidian Gold, Emerald Matrix.
- **Light presets**: Titanium Frost, Catppuccin Latte, Nord Snow, Rosé Pine Dawn, Kyoto Matcha, Paper & Ink, Solar Daylight.
- **System mode**: pick separate dark and light defaults; long-press the mode segment to open the gallery.
- **Reset** restores the default Obsidian Teal / Titanium Frost; choices persist with appearance prefs.

#### 🤖 Bot Details — chats, MCP, forever /new
- **MCP panel**: search and filter servers with On/Off toggles when the gateway is connected; clear offline note when not.
- **Chats section**: Forever Bot Chat pin, Draft, live pulse, unread dot, preview, relative time, and message count.
- **Delete scratch chats**: ··· menu on non-forever chats with confirm; Forever chat cannot be deleted.
- **Hidden Bot Chats**: list hidden Bot Chats via session.list include_hidden; profile-scoped delete via gateway or REST.
- **/new in Bot Chat**: typing /new or /reset in the forever Bot Chat rewrites to /compact with a notice pointing to New chat for throwaways.

#### 📋 Sessions and menus
- **Action sheet icons**: session long-press items now show Lucide icons for star, folder, read/unread, rename, archive, and delete.
- **Android/Web action sheet**: grabber, title/subtitle, Lucide icons, elevated surface, and theme tokens.

#### 🔌 Onboarding
- **Collapsible setup prompt**: expand to read the full prompt, then copy; replaces the plain text block.

### Changed

#### 🎨 Tokenized UI
- Expanded color tokens for surfaces, glass, scrims, chip colors, YOLO/reasoning, code/markdown, inputs, media placeholders, and shadows.
- Chat, composer, dashboard, sessions filters, banners, tool cards, code blocks, model/effort pickers, and status chrome all use theme colors instead of hardcoded hex.
- Soft assign/pending/danger tints and send-button shadows follow the active palette.

#### 💬 @-assign polish
- Voice dictation and Home sends use the same desktop-style handoff wire and card watch as typed @mentions.
- Pending/failed rows use theme soft fills; failure text can wrap to three lines.
- Removed the old Home-only assign shortcut that skipped the current-agent turn.

### Fixed

#### 🛡️ Bot Chat reliability
- The forever Bot Chat stays primary in Details; other chats collapse under "Other chats (N)".
- Skills and tools toggles can now disable while a change is in flight.
- Credentials note appears when relevant; leave-and-open flows for New chat, routines, and memory work as expected.

## [1.0.12] — 2026-08-19

OTA update — the installed app self-updates.

### Added

#### 🤖 Bots Mode — roster and identity
- **Hide from roster**: take an agent off the visible roster without disabling its mentions or routines.
- **Hidden agents**: reveal hidden teammates from a dedicated row, with an unread indicator when one has new activity.
- **Bot avatars**: choose a face, upload a photo, or generate an image from Bot Details or New Agent.
- **Bot-scoped Star Map**: open the selected teammate’s learning graph directly from its Details sheet.

#### 💬 Chat — handoff, activity, and voice
- **Desktop-style @ handoff**: assignments go through the current agent while the specialist keeps its own Bot Chat; the reply returns to the original conversation.
- **Assignment and request cards**: cleaner Asking, Waiting, and Replied cards, expandable requests, copy support, and a direct path to the specialist chat.
- **Batch clarification**: answer several questions in one card with multi-select, Other, Confirm, and Skip.
- **Technical activity view**: switch the Activity sheet to raw JSON when the underlying tool payload matters.
- **Home voice controls**: dictate into the Home composer or start a hands-free voice chat from Home.

### Changed

#### 🎨 Bots Mode UX/UI
- Roster rows prefer the pinned Bot Chat for preview, unread state, sorting, and last-active details; hidden rows are visibly dimmed when revealed.
- Bot faces now prefer real photos and animated geometric faces over unusable desktop snapshot images, with a safe fallback when an avatar cannot load.
- Assignment cards use a consistent compact chrome, quote the request, collapse long specialist replies, and keep the thread anchored while cards expand.

#### 🧭 Chat and navigation
- HTML `<details>` / `<summary>` sections in agent replies are now collapsible like the desktop client while tags inside code fences stay untouched.
- Activity cards preserve real per-tool elapsed time, including after background recovery and history rehydration.
- Session and Bots gesture hints are dismissible and remembered per host.
- The default management profile can have a display nickname without changing its identity.
- Cron surfaces distinguish a scheduled fire that never reached the gateway from a job that ran and failed.

### Fixed

#### 🛡️ Handoff and connection reliability
- Temporary polling misses during an assignment no longer appear as a failed handoff; the card remains in Asking or Waiting until the specialist answers.
- Handoff receipts and returned replies stay attached to the correct conversation across thread switches, restarts, and Bot Chat isolation.
- Reconnecting after a stale live connection resumes the durable conversation instead of replaying attachments or sending through a dead session.
- Batch clarification prompts restore correctly after reconnect, with previously selected answers still available to edit.

## [1.0.11] — 2026-08-18

OTA update — the installed app self-updates.

### Added

#### 🤖 Bots Mode — Agents
- **Bots hub**: a new drawer destination for named AI teammates, with **Agents** and **Routines** segments, expanding search, pull-to-refresh, and clear offline or host-version states.
- **Build an AI teammate**: create from scratch or clone another profile with a name, handle, title, description, model, reasoning effort, Fast mode, skills, toolsets, optional SOUL, and key-sharing controls.
- **Bot identity**: live geometric faces with idle and working moods, stable handles, optional JPEG/PNG/WebP avatars, and roster indicators for Default, In Chat, and unread work.
- **Bot details**: edit the teammate’s title, description, model, skills, tools, and SOUL; see its chats, memory and skill counts, Star Map, and routines from one sheet.
- **Forever Bot Chat**: one canonical conversation per teammate stays out of Home and Sessions recents, while scratch chats remain separate and easy to start.

#### 💬 Chat — assign work from any session
- **Assign with @**: type `@` in any existing chat or Home composer to choose a teammate without leaving the conversation. The agent works in its own Bot Chat and its reply comes back here.
- **Multi-agent assignments**: select several teammates, remove them as chips, and send one request to the group; self-mentions are excluded.
- **Live assignment receipts**: see Asking, Waiting, Couldn't reach, or Replied for each teammate, open their Bot Chat, and read the returned markdown reply in place.
- **Bot-side request cards**: assigned agents see who asked, what was requested, and can expand or copy the request without exposing protocol details.

#### ⏱️ Bots Mode — Routines
- **Agent routines**: schedule recurring work as a specific teammate with interval, daily, or one-time timing and a live expression preview.
- **Routine controls**: filter by teammate, inspect next run and history, pause, resume, run now, or delete.

#### 🧭 Home, navigation, and sessions
- **Bots discovery**: Bots now appears in the drawer rail, hub flyout, global search, and Feature Map; a bot’s Star Map opens scoped to that teammate.
- **Running loops on Home**: see active loops from the dashboard and tap View to open the relevant chat.
- **Session unread state**: mark chats read or unread where the host supports watermarks; bot chats remain owned by Bots instead of cluttering recents.

### Changed

#### 🎨 Bots Mode UX/UI
- Roster rows now show a face, last-active time, preview, @handle, unread dot, status pills, and an active face ring; swipe right for Details or left for a new scratch chat.
- Create and Details sheets preview faces live, confirm dirty closes, save only changed fields, and roll back skill or tool changes if a save fails.
- Empty, offline, outdated-host, failed-load, and no-search-result states now explain what is happening instead of showing a blank screen.

#### 🔒 Chat, profiles, and settings
- Bot conversations keep their own profile for resume, sending, queued work, and usage while the management profile stays where you left it.
- The composer model pill now honestly shows profile model, reasoning effort, and Fast state; history tips fetch newest-first so compacted archives do not hide recent days.
- Backup settings explain exactly what is uploaded and restored, including the path and the data that is never included.

### Fixed

#### 🛡️ Bot isolation and reliability
- Opening a Bot Chat no longer switches the drawer’s management profile or leaks bot state into regular sessions.
- Pinned Bot Chats reopen directly instead of waiting on a long roster fetch; scratch chats are created only when first used.
- Bot profile operations now cover profile creation, configuration, assets, skills, toolsets, and avatar generation, with honest “host update needed” handling when the server is too old.
- Bot assignment receipts survive app restarts, multi-target replies stay attached to the correct request, and profile-scoped session/message data stays with the right teammate.

---

## [1.0.10] — 2026-08-15

OTA update — the installed app self-updates.

### Added

#### Chat — Session loops
- **Recurring loops**: keep an active `/loop` pinned above the composer with its prompt, countdown, and status
- **Loop controls**: pause, resume, or stop from the card itself — no command to remember
- **Activity stack**: todos, subagents, and loops share a compact stack above the input; three live surfaces collapse into one Activity group
- **Plans that stick**: unfinished todo lists stay pinned across turns, show when work is from the last turn, and do not reappear after completion

#### System — Host pressure
- **Memory and disk alerts**: Home and Health show an advisory when the gateway reports elevated or critical pressure; alerts stay quiet on older agents

### Changed

#### Chat — Prompts and history
- **Readable tool cards**: key-values, chips, lists, and markdown are easier to scan than raw output
- **Complete history after compaction**: archived rows continue past an in-place compaction boundary instead of stopping early
- **Clearer prompts**: long clarify questions and options wrap fully; long option lists scroll while Other and Confirm stay reachable

### Fixed

#### Connect and live turns
- **Recover after backgrounding**: long sleeps, dead sockets, and handshake timeouts now reconnect instead of leaving a permanent retry state
- **Parked prompts return**: approvals and clarify prompts can be restored after reconnect, so blocked work can be answered again
- **Steadier turns**: live usage updates the context bar without transcript noise; completed turns settle cleanly so Stop does not remain stuck

---

## [1.0.9] — 2026-08-14

OTA update — the installed app self-updates.

### Added

#### Chat — Fast lane
- **Fast lane**: toggle Fast / priority processing on models that support it (chat header and Settings) — lightning only when the model catalog says it can handle it
- **Pick with intent**: when you choose a Fast-capable model, the sheet asks Use Fast or Standard before it closes

#### Chat — Reasoning effort
- **Effort levels Off → Ultra**: set reasoning effort for the session and as a profile default, wherever the model supports reasoning

#### Settings — Model pickers
- **Smarter pickers**: chat and Settings model lists got search, provider groups, Fast control, and cleaner rows
- **Safer default changes**: the default model now changes through the real assignment flow, with an expensive-model confirm and a cron impact review when jobs are affected
- **Richer default row**: Settings shows name, context size, effort, and Fast for the current default

#### App
- **Faster search**: global search opens quicker from the drawer, with a steadier keyboard and calmer jump list

### Fixed

#### Chat
- **Uncertain live turns queue**: if recovery of a live turn is unclear, Send queues the message instead of starting a second turn — quiet retries keep going without locking the composer

---

## [1.0.8] — 2026-08-13

OTA update — the installed app self-updates.

### Added

#### App — Spotlight search
- **Jump anywhere**: open Search from the drawer rail — a Spotlight-style jump list grouped by Home, Brain, Work, Connect, System, Settings, and Actions
- **Type to go**: filter pages and actions — new chat, Feature map, cron, console, profile switcher — and tap to jump straight there, including focusing the Home composer
- **In-app update banner**: Hermes Go updates now show on Home — "update available" / "update ready" with Update or Restart; the banner stays until you apply, and Retry appears if a download fails

#### Feature map
- **Sharper search**: area filter chips keep your search pinned, with clearer loading, retry, and "no matches" states plus a one-tap clear

### Fixed

#### Connect
- **Steadier reconnects**: recovers reliably after the phone sleeps, the network blips, or a socket that looks open but is dead — no more hanging "connected" that never answers

#### Cron
- **Model-change warning**: switching the default model warns when scheduled cron jobs would stay on the old model, and offers to open Cron to review them

#### Chat
- **Per-session effort**: reasoning effort stays on the chat you set it in — switching sessions no longer leaks the last pick onto the next one

#### App
- **Cleaner icon**: the Android adaptive icon and the connect / restoring-session mark sit cleanly without a plate

---

## [1.0.7] — 2026-08-12

OTA update — the installed app self-updates.

### Added

#### Work
- **Processes screen**: manage background jobs from live sessions — filter all / running / finished, and start or stop processes with a confirmation prompt

#### Chat
- **Background job control**: sessions with running host processes show a terminal control in the meta row — open a sheet to inspect output, stop a running job, or dismiss finished ones

#### Kanban
- **Request review**: hand off ready or running kanban tasks to review, with an optional note

### Changed

#### Chat
- **Compact process notices**: background process completion and watch events render as small timeline pills instead of chat bubbles
- **Live status bar**: shows "1 action" / "N actions" instead of verb + target

---

## [1.0.6] — 2026-08-12

OTA update — the installed app self-updates.

### Added

#### Settings
- **Feature map**: open it from Settings — search every screen, jump by area, and tap to go straight to any feature

### Changed

#### Settings
- **Default model label**: shows as provider · name in Settings
- **Model refresh**: refresh the model list from the picker header (chat, dashboard, Settings) — a clear error appears if it fails, and the last-good list stays intact

#### Chat
- **Quieter mic**: the mic control softens while you type, keeping the send row uncluttered

---

## [1.0.5] — 2026-08-12

OTA update — the installed app self-updates.

### Fixed

#### Sessions
- **Deleted chats disappear immediately** — removed sessions drop out of the list right away, including ones already gone from the server
- **Faster inbox** — session rows are lighter and the list churns less, so scrolling stays smooth

#### Chat
- **Context ring stays live** — the context-usage ring keeps loading after opening or rebinding a session instead of freezing on "—"
- **No cross-chat errors** — a failed turn in one session never paints its error onto another chat
- **Usage breakdown** — the usage sheet now shows each category's share of context tokens

---

## [1.0.4] — 2026-08-11

OTA update — the installed app self-updates.

### Added

#### Connect
- **Hermes Cloud**: sign in with the portal, pick your organization and agent — cookie-based reconnect keeps you connected; the self-hosted password flow is unchanged

#### Settings
- **Feedback**: submit a bug, feature idea, improvement, or question with optional screenshots, and track its status
- **What's New**: browse release notes right in the app; the product version is shown in the footer
- **Backup preview**: see exactly what a mobile preferences backup will restore — folders, filters, workspace pins, appearance — before you accept it

#### Workspace
- **@file and @folder chips**: long-press a file or folder in Workspace → Files to drop it into the composer without replacing your draft

#### Skills
- **Open and edit skills** from the Skills hub and from skill tool cards; skill invocations appear in history as neat chips instead of expanded model text

### Fixed

#### Workspace
- **Pins and scopes survive**: Files browse pins and Review scopes now live on stable session ids — they survive cold start, reinstall, and backup restore, and sync with client prefs
- **Git badge accuracy**: the header git dirty badge now aligns with the Review scope path when one is set

---

## [1.0.3] — 2026-08-11

OTA update — the installed app self-updates.

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

OTA update — the installed app self-updates.

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

OTA update — the installed app self-updates.

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
