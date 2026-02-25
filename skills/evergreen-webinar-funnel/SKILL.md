---
name: evergreen-webinar-funnel
description: >
  Automated evergreen webinar funnel. Simulates a "live" experience
  on-demand so leads can register and watch immediately (or at scheduled slots).
  Best for scaling a proven webinar without live hosting.
---

# Evergreen Webinar Funnel

Take a proven live webinar and run it on autopilot 24/7.

## Flow

```
Traffic → Registration → Watch Page (simulated live) → Offer Page → Checkout
```

| Page | Purpose |
|---|---|
| Registration | Capture email, pick a session time |
| Watch Page | Pre-recorded video with live-like UI |
| Offer Page | Present offer — appears mid/post webinar |
| Checkout | Payment capture |

## Registration Page Requirements
- **Multiple session times** — "Pick the best time": next 15 min, next hour, tomorrow 10am, tomorrow 7pm
- **"Just in time" framing** — "Your session starts in 14 minutes"
- **Countdown to session** — builds urgency to attend
- **SMS/email reminder** option

## Watch Page "Live" Elements
- Chat simulation (optional — pre-loaded messages)
- "X people watching now" counter
- **No scrub bar** — video plays linearly like a live session
- **CTA appears at offer point** — typically 40–60 min in
- Time-limited replay (24–48 hours)

## Session Schedule Pattern
```javascript
// Generate "next available" sessions
function getNextSessions() {
  const now = new Date();
  return [
    { label: 'Starting in 15 minutes', time: addMinutes(now, 15) },
    { label: 'Today at ' + formatTime(addHours(now, 1)), time: addHours(now, 1) },
    { label: 'Tomorrow at 10:00 AM', time: nextDayAt(10) },
    { label: 'Tomorrow at 7:00 PM', time: nextDayAt(19) },
  ];
}
```

## Email Sequence

| Email | Timing | Purpose |
|---|---|---|
| Confirmation | Immediately | Session time + calendar link |
| Reminder 1 | 1 hour before | "Your session starts soon" |
| Reminder 2 | 5 min before | "We're going live — join now" |
| Replay | +4 hours after session | "Missed it? Watch the replay" |
| Offer Reminder | +24 hours | Social proof + expiring offer |
| Last Chance | +48 hours | "Replay expires tonight" |

## Conversion Benchmarks

| Metric | Target |
|---|---|
| Registration rate | > 30% |
| Show rate (reg → watch) | > 35% |
| Watch > 50% of video | > 50% of attendees |
| Webinar → offer page | > 20% |
| Offer → purchase | > 5% |
| Overall reg → purchase | > 2% |

## Ethical Guidelines
- Be transparent that it's pre-recorded (or avoid claiming it's live)
- Don't fake chat messages from real people
- Honor any "limited time" offers — don't show them again after expiry
- Give genuine replay access as promised
