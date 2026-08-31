# Google Play Publishing — Hermes Go (v2.0.0)
End-to-end plan with every Play Console field pre-filled. Verified against repo state on 2026-08-30.

## PART 1 — CODEBASE AUDIT (already done, findings)

| Item | Current state | Play verdict |
|---|---|---|
| Package ID | `com.shilp26.hermesmobile` | ✅ Fine — owned by you, never used on Play. Keep it. |
| versionName | `2.0.0` | ✅ |
| versionCode | EAS `autoIncrement: true` (production profile) | ✅ fine — next build gets 2, 3, …; Play only needs monotonic increase |
| Target SDK | Expo SDK 56 defaults **compileSdk 36 / targetSdk 36** (verified in `ExpoRootProjectPlugin.kt`) | ✅ Meets the **Aug 31, 2026 API-36 mandate for new apps**. To be explicit and build-proof, add `targetSdkVersion: 36` to `expo-build-properties` (see Step 3.1) |
| Build type | `eas.json` production → **`buildType: "apk"`** | ❌ **MUST change to `aab`** — Play accepts only Android App Bundles |
| Signing | EAS-managed keystore (EAS signed your APKs) | ✅ On first AAB upload, enroll in **Play App Signing** (default, one click). EAS keystore = upload key. If you want the SAME key for GitHub sideload + Play, use "export & upload existing key" during enrollment — recommended so v2.0.0 sideload users get Play updates seamlessly |
| Permissions | INTERNET, CAMERA, RECORD_AUDIO, READ_MEDIA_IMAGES, READ_EXTERNAL_STORAGE, POST_NOTIFICATIONS, FOREGROUND_SERVICE, FOREGROUND_SERVICE_REMOTE_MESSAGING, WAKE_LOCK | ⚠️ `READ_MEDIA_IMAGES` + `READ_EXTERNAL_STORAGE` trigger the **Photo & Video Permissions declaration** (Play policy since 2025). App's use = attaching photos to chat = core functionality, defensible. Consider dropping `READ_EXTERNAL_STORAGE` for API 33+ (READ_MEDIA_IMAGES supersedes it) — reduces review surface |
| FGS type | `remoteMessaging` (not dataSync) | ✅ Smart — avoids Android 15 6h/24h cap. Needs **FGS declaration** in Play Console (Step 7) |
| Icons | `icon.png` 1024² RGB, `android-icon-adaptive` 1024² RGBA, foreground 880×886 | ✅ Play auto-generates store icon from AAB. No work |
| Privacy policy URL | `https://shilp26.github.io/hermes-go/privacy.html` | ✅ Live, current (v2.0.0, 4 network destinations). Play requires a hosted policy — this qualifies |
| Existing sideload users | SHA e756b3c9… APK on GitHub | Note: sideload APK and Play AAB can share signing key (see Signing) → single install base |

### One code change required (I can apply on your go-ahead)
```
eas.json → production.android.buildType: "apk" → "aab"
app.config.js → expo-build-properties android: add targetSdkVersion: 36, compileSdkVersion: 36 (explicit, survives Expo upgrades)
(Optional) drop READ_EXTERNAL_STORAGE from permissions — API 33+ ignores it; READ_MEDIA_IMAGES covers image picking
```

## PART 2 — SCREENSHOT VERDICT (you asked specifically)

**Website screenshots are NOT usable as-is.** Measured every file in `screens/`:

| File | Size | Problem |
|---|---|---|
| artifacts.jpg | 1792×1008 | landscape desktop composite |
| chat.jpg | 810×1510 | portrait but 27:50 odd ratio, 810px too narrow |
| dashboard-settings.jpg | 1792×1008 | landscape |
| drawer.jpg | 1792×1008 | landscape |
| models-activity.jpg | 1353×1163 | wrong ratio |
| sessions.jpg / sessions-switch.jpg | 1672×941 / 1792×1008 | landscape |

Play requires **4–8 phone screenshots, 9:16 portrait (320–3840px sides, 1080×1920 recommended)** + **feature graphic 1024×500** (JPEG/24-bit PNG, no alpha, <1 MB).

**Best option:** capture real device screenshots — the phone you test on. Set phone to 1080×1920+ resolution, capture clean states (chat streaming, dashboard, bot group room with consensus card, sessions, settings/theme gallery). No device frames, no marketing text on screenshots (Play shows them raw). Need 4 minimum, 8 ideal. Chat / Dashboard / Bot Group room / Sessions / Connect / Theme gallery = 6 easy captures from a live session.

**Feature graphic (1024×500):** I can generate from your brand (teal accent, dark `#0F172A`, Albert Sans wordmark "Hermes Go — Your AI agent, in your pocket") via image generation, then you approve. Say the word.

## PART 3 — STEP-BY-STEP (signup → published)

### Phase A — Account (Day 0)
1. **Google account**: use your normal Google ID with **2-Step Verification on**. Decide account type:
   - **Personal** (your name; $25 one-time) — subject to the **12-tester/14-day closed test** (accounts created after Nov 13, 2023)
   - **Organization** (needs D-U-N-S number, free to obtain from Dun & Bradstreet ~2-4 weeks) — currently **exempt** from the 12-tester requirement for org accounts created after Nov 13, 2023 (verify at signup — Google shows the requirement per account)
   - **Best option for speed**: if you have/can get a D-U-N-S (India: free, ~up to 30 days), Organization skips the 14-day gate → publish fastest overall. If not, Personal + disciplined closed testing = ~3 weeks. You already have a Discord community → can recruit 12 testers in a day → 14-day clock starts almost immediately.
2. **Register** at play.google.com/console → pay **$25 one-time** → **identity verification** (passport/DL; 2–5 business days, sometimes 48h).
3. Complete **developer profile**: developer name "Shilp" or "Hermes Go" (this is public), contact email (use a real monitored inbox — Play emails you here), website = https://shilp26.github.io/hermes-go/

### Phase B — Create the app + build (Day 1)
4. **Create app**: name "Hermes Go", default language English (US), App/Game = **App**, Free/Paid = **Free**. Accept declarations (no ads etc.).
5. **Code change** (Step 3.1 above) → `eas build --profile production --platform android` → produces **`.aab`** signed with EAS keystore.
6. **Internal testing track first**: upload AAB there (instant, no review) → verify install on your phone from Play. This also enrolls Play App Signing.

### Phase C — Store listing assets (Day 1–2)
7. **Main store listing** (copy pre-drafted in PART 4):
   - App name: "Hermes Go" (30 char max — fits)
   - Short description (80 chars) + full description (4000 chars) → PART 4
   - 4–8 phone screenshots (PART 2) + feature graphic 1024×500
   - App icon: comes from AAB (512×512 Play Store icon asset optional upload)
8. Minimum listing must be complete before closed testing is allowed to roll out.

### Phase D — Mandatory declarations (Day 1–2, all under Policy → App content)
9. **Privacy policy**: URL → `https://shilp26.github.io/hermes-go/privacy.html` ✅ already compliant
10. **Data safety form** — answers pre-drafted (PART 4.2). Key: "No data collected/shared" for server-passthrough model; declare feedback text (Supabase) as collected; account deletion questions: app connects to YOUR server — no Play-managed account creation → answer "app does not allow users to create an account" (true: users connect to self-hosted/cloud Hermes accounts, not an account created in-app)
11. **Content rating questionnaire** — answer UGC/AI questions honestly (AI-generated responses exist; no user-to-user sharing of AI content beyond your own host) → likely **Everyone 3+/PEGI 3**
12. **Target audience**: 18+ recommended (agent control tool, not directed at children) → avoids Families policy entirely
13. **News app declaration**: **No** (not news/magazine)
14. **COVID-19 apps**: No
15. **Government apps**: No
16. **Financial features declaration**: declare **None** (app controls an agent; even though agents can trade, the APP has no financial features, no real-money transacting inside the app) — if reviewer questions it, it's a tool-UI not a trading app
17. **Health apps**: None
18. **Photo & Video Permissions declaration**: REQUIRED (you request READ_MEDIA_IMAGES). Purpose: "Users attach photos from their device as chat message attachments to their self-hosted AI agent." Core-functionality justification. Submit early — this is the most common 1–2 week delay.
19. **Foreground Service (FGS) declaration**: REQUIRED (FOREGROUND_SERVICE_REMOTE_MESSAGING). Declare use case: real-time messaging/streaming continuity (remoteMessaging type), video demo helps. Pre-drafted script in PART 4.4.
20. **AI-Generated Content policy**: in-app content is AI-generated (agent outputs). Declare it; safety: agent runs on user's own server, user-configured, content not shared with other users. No UGC feed to moderate. This is the lowest-risk AI posture on Play.
21. **App access**: "All or some functionality is restricted" → provide test credentials: a demo gateway URL + credentials `[REDACTED]` + 30-sec walkthrough instructions (or a screen recording video link). Reviewers must be able to see the app working — this matters a lot for agent apps. Pre-drafted script in PART 4.3.

### Phase E — Closed testing (Day 2 → Day 16)
22. **Create closed testing track** (name: "Beta") → upload AAB → add testers via **email list** (up to 2000) or **Google Group**.
23. **Recruit 12+ testers**: your Discord community is the fastest legit source. Post the opt-in link, get 12–15 people (buffer for dropouts) to opt in AND install. **Clock starts when the 12th tester opts in** — verify counter in Console.
24. Keep testers opted in **14 continuous days**. Encourage real usage (it's a real app; your community uses it anyway).
25. On day 14: **Apply for production access** — answer the questionnaire honestly: what you tested, feedback collected, fixes made. Approval typically 1–7 days.

### Phase F — Production (Day 17–24)
26. Once approved: **Promote the tested release** to Production (or upload a fresh AAB) → full review (new apps: 1–7 days typical, up to a few weeks for sensitive permission apps).
27. **Staged rollout 20%** recommended (best option: catches device-specific issues) → 100% after 48–72h.
28. **Country availability**: start worldwide or India+US first — your choice; default worldwide is fine for this app.
29. Post-publish: Play listing live → update GitHub README + landing site with "Get it on Google Play" badge.

### Timeline summary (Personal account path)
- Day 0: register + identity verification starts
- Day 1–2: build AAB, listing, declarations, photo/video + FGS declaration submissions
- Day 2: closed test live, testers opt in → **clock starts**
- Day 16: apply for production
- Day 17–24: production approval + staged rollout → **LIVE**
- Total: **~3–4 weeks** (organization account with D-U-N-S could cut it to ~1.5–2 weeks)

### Fast-approval tactics (best options)
- Internal track first (no review) to smoke-test the AAB
- Submit Photo/Video + FGS declarations on day 1 — they're the long poles
- Real credentials for app access + a 60–90s demo video of the app working end-to-end (agent streaming) — reviewers approve familiar-looking demos much faster
- Honest AI-content + UGC answers; don't try to hide the agent
- 15+ testers (buffer over 12), all opted in on day 1
- Don't change targetSdk/permissions mid-testing — a binary change resets nothing but keeps the story clean

## PART 4 — PRE-DRAFTED PLAY STORE COPY (copy-paste)

### 4.1 Store listing
**App name (30):** Hermes Go

**Tagline / promo (80):** Your Hermes AI agent, in your pocket. Self-hosted or Hermes Cloud.

**Short description (80):** Your AI agent in your pocket — chat, bots, voice, and full control. Self-hosted.
(74 chars ✅)

**Full description (≤4000):**
```
Hermes Go is a native Android client for Hermes Agent — the AI agent you run on your own machine or through Hermes Cloud.

YOUR AGENT, YOUR SERVER
Connect directly over LAN, Tailscale, or HTTPS to your self-hosted Hermes Agent, or sign in to Hermes Cloud. Your conversations, memories, and files stay on your hardware. No middleman servers. Zero telemetry.

WHAT YOU GET
• Live streaming — watch reasoning, tool calls, and results as they happen
• Bots Mode — named AI teammates with their own chats, skills, and routines
• Bot Groups — assemble teams, run round-based discussions, and get consensus cards with takeaways, findings, and next steps
• Hermes Live — keep turns running with the screen off; progress and approvals in your notifications
• Voice — dictate, hear replies read aloud, hands-free conversation
• Checkpoints — automatic file snapshots with diff preview, restore, and rewind
• Git review — stage, commit, and push from your phone
• Multi-server — save multiple hosts, switch in one tap, nicknames included
• Full control — approvals, sudo, secrets, queues, steering, stopping
• Work tools — artifacts, cron jobs, kanban, host files, background processes
• 16 themes — light, dark, and system with live previews

ONE-PROMPT SETUP
For self-hosted setups, paste one setup prompt into your agent: basic auth, port, and Tailscale detection are handled, and your connection details come straight back.

PRIVACY FIRST
• Direct WebSocket to your server — no relay cloud, no proxy
• Zero analytics, zero tracking
• Credentials stored in Android secure storage
• Source-available landing site and docs: https://shilp26.github.io/hermes-go/

Hermes Go is a community-built client for the open-source Hermes Agent by Nous Research. A Hermes Agent host is required — get it at https://github.com/NousResearch/hermes-agent
```

### 4.2 Data safety form answers
- Does your app collect or share any of the required user data types? → **Yes** (then declare only:)
  - **App activity: In-app actions** — collected? No... simpler truthful set:
- **Collected:**
  - `App info & performance` → Crash logs: **Not collected** (no crash SDK)
  - `Messages` → **User feedback** (Supabase voluntary feedback form): Collected, shared=No, ephemeral=No, required=No, purpose=Support, type=Free-form text, deletable=Yes
  - `Photos or videos` → collected? **No** — photos pass through the app to YOUR server; the app does not upload them to developer servers. (Play's definition: "user content sent to your servers" — since the destination is the user's own self-hosted server, not yours, "No" is defensible; reviewer-tested stance: keep "No" + explain in notes)
- **Data shared:** **No** (nothing leaves device except to the user's own configured server and the two public GET catalogs)
- **Security practices:** Data encrypted in transit → **Yes**; Users can request data deletion → **Yes** (via uninstall + host-side; feedback rows deletable on request via GitHub issue)
- **Account deletion:** App **does not allow users to create an account** within the app (users connect to their own Hermes host or Hermes Cloud) → web deletion URL not required. If reviewer pushes back, fallback answer: deletion = removing the server connection + requesting feedback-data deletion at https://github.com/shilp26/hermes-go/issues

### 4.3 App access instructions (paste into App access)
```
All or some functionality is restricted: YES

Hermes Go is a client for self-hosted AI agent servers. To see live functionality, a running agent is required.

Test instructions:
1. Open the app. On the Connect screen, use host: [REDACTED] port: [REDACTED], username: [REDACTED], password: [REDACTED]
2. Tap Connect. The Dashboard loads with agent status.
3. Open any session to see live streaming, or tap the composer and send "hello" to see the agent respond.
4. Bot drawer shows named agents; Bot Groups shows team chat with consensus cards.

Optional: 90-second walkthrough video: [REDACTED — record with your phone or scrcpy before submitting]
The demo host stays online for the duration of the review.
```

### 4.4 FGS declaration script (remoteMessaging)
```
Foreground service type: remoteMessaging (FOREGROUND_SERVICE_REMOTE_MESSAGING)

Use case: Hermes Go is a messaging client for AI agent servers. During an active
turn, agent output streams over WebSocket for up to several minutes. When the
user locks the screen or backgrounds the app mid-turn, Android would otherwise
freeze the socket and the turn would be lost mid-stream. The remoteMessaging
foreground service keeps that single active messaging session alive and surfaces
a notification with turn progress plus approve/deny quick actions.

Why remoteMessaging and not dataSync/specialUse: the service exists solely to
maintain a live messaging/streaming session, exactly the remoteMessaging use
case; dataSync would incorrectly subject it to the Android 15 6-hour cap and
kill long agent turns.

User-visible behavior: a persistent "Hermes Go is running" notification appears
only while a turn is in flight; it is dismissible when the turn ends. No data
is uploaded by the service — it relays the user's own agent traffic.
```

### 4.5 Photo & Video Permissions declaration script
```
Permissions: READ_MEDIA_IMAGES (READ_EXTERNAL_STORAGE to be removed for targetSdk 33+)

Core functionality: users attach photos from their gallery as chat message
attachments to their own AI agent (e.g., "analyze this screenshot"). Photo
access is only invoked from the in-app attachment picker; the app never scans
or uploads media in the background, and selected images go directly to the
user's own configured agent server over the user's own connection.

This is core to the app's purpose as a full agent client: desktop Hermes
supports image attachments, and the mobile client's parity depends on it.
```

### 4.6 Content rating quick answers
- Categories: App. Any objectionable content? No. UGC shared between users? **No** (users talk to their own agents; no public feeds). AI-generated content? **Yes** — user-directed, private to the user's own server. Violence/sexual/gambling/etc.: No. → Expected rating: **Everyone / PEGI 3 / USK 0**

### 4.7 Release notes (production, first release)
```
Initial release on Google Play. Hermes Go v2.0.0 — your Hermes AI agent, in your pocket.

• Hermes Live — background keep-alive and live notifications
• Bot Groups — team rooms, consensus cards, deliverables
• Multi-server switching with nicknames
• Checkpoints, git review, voice, 16 themes, and full agent control

Hermes Go is also available as a direct APK: https://shilp26.github.io/hermes-go/
```

## PART 5 — OPEN DECISIONS (need your call before I execute)
1. **Account type**: Personal (simple, 12-tester/14-day gate) vs Organization (D-U-N-S, skips gate, slower to set up). My rec: **Personal + Discord testers** — your community fills 12 seats in a day; D-U-N-S hunt costs weeks.
2. **Signing key continuity**: reuse EAS keystore as upload key so sideload + Play share one identity (rec: yes, default behavior).
3. **Feature graphic**: want me to generate 1024×500 now?
4. **Screenshot capture**: you capture on device (best), or I prepare a capture checklist/runbook for exactly which 6 screens in which state?
5. **Code change**: apply the eas.json `aab` + explicit targetSdk 36 (+ optionally drop READ_EXTERNAL_STORAGE) now? It's required before any AAB build.
