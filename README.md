<div align="center">

<img src="assets/splash-icon.png" alt="Hermes Go" width="120" height="120" />

# Hermes Go

**Your AI agent, in your pocket.**

A native mobile client for your self-hosted [Hermes Agent](https://hermes-agent.nousresearch.com). One prompt configures basic auth, binds port 9119, detects Tailscale, and hands you your connection details.

`v1.0.9` · Android APK · Closed Source · Zero Telemetry

[![Downloads](https://img.shields.io/github/downloads/shilp26/hermes-go/total?style=flat-square&label=Downloads&color=0F766E)](https://github.com/shilp26/hermes-go/releases)

</div>

---

## What is Hermes Go?

Hermes Go is a **native Android client** for the self-hosted Hermes AI agent. It is not a chat wrapper — it is the full agent in your hand:

- **Live streaming** — reasoning rows, tool timelines, and markdown as they happen
- **Voice** — dictate, hear replies, hands-free conversation loop
- **Artifacts** — images, audio, and HTML previews inline in chat
- **Full control** — approvals, sudo, secrets, queue, steer, stop
- **Deep visibility** — health, analytics, logs, ops console, config editor
- **Your server, your data** — connects direct to your server over LAN or Tailscale, or via Hermes Cloud for portal-managed agents

> **Closed source.** The app is distributed as a signed APK. No telemetry, no analytics, no tracking. Your conversations stay on your machine.

> 💙 **Built on [Hermes Agent](https://github.com/NousResearch/hermes-agent) by [Nous Research](https://nousresearch.com/) — thank you for making this possible!**

---

## Screenshots

<p align="center">
  <img src="screens/chat.jpg" alt="Chat" height="500">
</p>

| Sessions | Dashboard & Settings | Drawer |
|---|---|---|
| ![Sessions](screens/sessions.jpg) | ![Dashboard & Settings](screens/dashboard-settings.jpg) | ![Drawer](screens/drawer.jpg) |

| Session sheets | Context & Artifacts | Activity & Models |
|---|---|---|
| ![Session sheets](screens/sessions-switch.jpg) | ![Context & Artifacts](screens/artifacts.jpg) | ![Activity & Models](screens/models-activity.jpg) |

---

## App Map

<p align="center">
  <img src="assets/app-map.svg" alt="Hermes Go app map — 8 surfaces, 45 segments, 126 features" width="100%">
</p>

### Surfaces

| | Surface | Segments | Features | What it does |
|---|---|---|---|---|
| <img src="assets/icons/dashboard.svg" width="22" alt=""> | **Dashboard** | 6 | 14 | Agent status, performance, capabilities, alerts, quick compose, profile switcher |
| <img src="assets/icons/chat.svg" width="22" alt=""> | **Chat** | 8 | 40 | Live streaming, voice, media & artifacts, approvals, queue & steer, subagents, share from other apps, composer tools |
| <img src="assets/icons/sessions.svg" width="22" alt=""> | **Sessions** | 4 | 9 | Inbox, folders & projects, full-text search, bulk management |
| <img src="assets/icons/brain.svg" width="22" alt=""> | **Brain** | 7 | 16 | Models, skills, tools, memory, Star Map, MCP, plugins |
| <img src="assets/icons/work.svg" width="22" alt=""> | **Work** | 5 | 15 | Artifacts browser, cron jobs, kanban board, host files, processes |
| <img src="assets/icons/connect.svg" width="22" alt=""> | **Connect** | 4 | 7 | Channel status, webhook routes, pairing, Hermes Cloud |
| <img src="assets/icons/system.svg" width="22" alt=""> | **System** | 6 | 16 | Health, analytics, setup, ops console, logs, power tools |
| <img src="assets/icons/settings.svg" width="22" alt=""> | **Settings** | 5 | 9 | Servers, connection, appearance, profile, feedback & info |

**Total: 8 surfaces · 45 segments · 126 features**

> Full interactive map: [App Map — Hermes Go](https://shilp26.github.io/hermes-go/app-map.html)

---

## Getting Started

### 1. Download the APK

[Download Hermes Go v1.0.9](https://github.com/shilp26/hermes-go/releases/tag/v1.0.0) (76 MB)

**Verify the download** — the SHA-256 of the published APK is:

```
2188b21b164b9fdcd0991c634772d1083227197b31c27173d472a2b19d1da3a1
```

```bash
# Linux / macOS
sha256sum HermesGo.apk

# Windows (PowerShell)
Get-FileHash HermesGo.apk -Algorithm SHA256
```

If the hash matches, the file is exactly what we published — nothing added, nothing removed.

### 2. Install

1. Open the downloaded `HermesGo.apk` on your Android device
2. If prompted, allow **"Install unknown apps"** for your browser or file manager
3. Tap **Install**
4. Open **Hermes Go**

> A Play Store release is planned.

### 3. Connect to your agent

1. Open Hermes Go
2. **Self-hosted** — enter your agent's address (`http://<host>:9119` on your LAN, your Tailscale IP, or `https://your-domain` behind a TLS reverse proxy) and your basic-auth credentials (set during `hermes-agent` setup)
3. **Hermes Cloud** — sign in from the Connect screen with your portal account, pick your org and agent
4. Done — the full agent is in your hand

---

## Key Features

### 🗨️ Chat — Liquid Glass
- Live streaming with reasoning rows and tool timelines
- Markdown, tables, syntax-highlighted code blocks with copy
- Context ring showing live context-window usage
- Inline media: images (full-screen viewer), audio playback, HTML/SVG live previews
- Approvals: approve/deny, clarify, sudo, secret prompts
- Send queue, mid-run steering, clean stop
- Subagent lists with live delegation, async task cards
- Composer: attachments, `/` skills, `@` mentions, prompt improve, YOLO mode, todo status
- **Share from other apps** — send images, PDFs, Word/Excel files, text, or links straight into a chat
- **Background job control** — inspect output, stop, or dismiss running host processes from the chat meta row
- **Fast lane** — toggle priority processing on supported models, with Use Fast or Standard choice on pick
- **Reasoning effort** — set Off → Ultra per session and as a profile default

### 🎙️ Voice
- Hold-to-dictate with STT
- Read any reply aloud (TTS)
- Hands-free conversation loop: listen → think → speak
- Inline audio playback for TTS tool output

### 📦 Artifacts
- Every media item from a session, searchable
- Full-screen image viewer with pinch-zoom
- Offline-first browsing from cached session media

### 🧠 Brain
- Model provider catalog with fallback chain and effort control
- Skills with enable toggles — **open and edit skills** from the Skills hub or skill tool cards
- Toolsets with environment configuration
- Memory block viewer/editor
- **Star Map** — interactive learning graph: constellation, clusters, timeline, node editor, curator
- MCP server connections
- Plugin toggles

### 📋 Work
- Artifacts browser (images, audio, files)
- Cron jobs: list, run-now, status badges
- Kanban board with live updates — **request review** from ready or running tasks
- **Host files** — browse the agent filesystem, drop `@file` / `@folder` chips into the composer
- **Processes** — manage background jobs from live sessions, filter and start/stop with confirmation

### 🔌 Connect
- Channel status (Telegram, Discord, Slack) with live dots
- Webhook routes
- Pairing requests + QR provisioning
- **Hermes Cloud** — portal sign-in, org and agent pick, cookie-based reconnect

### 🖥️ System
- Health: host gauges, gateway status
- Analytics: usage trends
- Setup: app features, voice, thinking depth, safety, UI
- Ops console with readable parsed output
- Live log stream with pause-on-scroll
- Power tools: config editor, environment, OAuth, profiles, files, credentials

### ⚙️ Settings
- Multi-server with URL switching
- Connection details + Tailscale detection
- Theme (dark/light)
- Active profile
- **Feedback** — submit a bug, feature idea, improvement, or question with screenshots and status tracking
- **What's New** — release notes in-app, product version in the footer
- **Backup preview** — see exactly what a prefs restore brings back before accepting
- **Feature map** — search every screen, jump by area, tap to go straight to a feature

---

## Security & Trust

| Property | Value |
|---|---|
| **Distribution** | Signed APK via GitHub Releases |
| **Telemetry** | **None.** Zero analytics, zero tracking |
| **Data path** | Direct to your server (LAN / Tailscale) or Hermes Cloud — no telemetry either way |
| **Auth** | Basic auth (self-hosted) or Hermes Cloud portal sign-in |
| **Secrets** | Stored in platform secure storage (expo-secure-store) |
| **Source** | Closed source — the APK is the artifact of record |
| **Verification** | SHA-256 published with every release |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Expo](https://expo.dev) SDK 56 · React Native 0.85 |
| Navigation | expo-router (typed routes) |
| State | Zustand 5 |
| Persistence | expo-sqlite (local-first, background sync) |
| Real-time | WebSocket JSON-RPC gateway client |
| Cloud | Hermes Cloud portal (org & agent pick, cookie reconnect) |
| Voice | STT dictation + TTS playback |
| Icons | lucide-react-native |
| Build | EAS Build (APK) + OTA updates (expo-updates) |

---

## Architecture

```
┌─────────────────────────────────────────────┐
│                 Hermes Go (Android)          │
├──────────────┬──────────────────────────────┤
│  UI Layer    │  Drawer rail · 8 surfaces    │
│  State       │  Zustand stores (sync-aware) │
│  Persistence │  SQLite · background sync    │
│  Transport   │  WebSocket JSON-RPC client   │
│  Auth        │  Basic auth · secure store   │
└──────────────┴──────────────────────────────┘
        │                        │
        │  WebSocket (JSON-RPC)  │  Hermes Cloud (portal
        │  / REST                │  sign-in · org & agent
        ▼                        ▼  pick · cookie reconnect)
┌──────────────────┐  ┌───────────────────────┐
│ Your self-hosted │  │    Hermes Cloud       │
│   Hermes Agent   │  │      agents           │
│ (port 9119 · LAN │  │  (portal-managed)     │
│  or Tailscale)   │  │                       │
└──────────────────┘  └───────────────────────┘
```

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full release history.

---

## License

**This repository (the website) is open source** under the [MIT License](LICENSE). The Hermes Go application itself is **closed source** — distributed as a signed APK with a published SHA-256 for verification. The APK is provided for personal use; redistribution or modification of the binary is not permitted without written consent.

© 2026 Hermes Go by Shilp
