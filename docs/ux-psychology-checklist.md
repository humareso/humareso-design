# UX Psychology Checklist

For onboarding, forms, upgrade/pricing screens, and any multi-step flow across Engage, Leave, Admin, Portal, and Hub.

Source: uxpeak, ["The UX Psychology Behind Apps People Can't Stop Using"](https://www.youtube.com/watch?v=2TlIg3VokY8), reviewed 2026-09-28. Six principles, each restated for Humareso's context (B2B HR software, not consumer growth-hacking) with a note on where the line to a dark pattern actually is.

## Ethical guardrail

Never fake urgency, scarcity, progress, results, or reviews. Every item below should make a flow **clearer and more honest**, not more persuasive at the user's expense. This is the same line the source video itself draws, and it matches Humareso's facts-first brand voice.

## The six

- [ ] **1. Smart defaults over blank forms.** Pre-fill anything we already know — name, email, org, prior selections, last-used values. A blank form reads as harder than a pre-filled one purely from decision fatigue, independent of actual complexity.

- [ ] **2. Never start progress at 0% (goal-gradient effect).** Progress indicators should reflect real completed steps, so the first render already shows non-zero progress if any step (account created, invite accepted, profile started) is genuinely done. Do **not** pad in fake steps just to move the needle — that is literally the fake-progress pattern the guardrail above rules out.

- [ ] **3. Value before the signup wall (reciprocity).** Where the product allows it, let a user see or use something real — a preview, a sample report, read-only access — before gating behind login or payment. Ties into the front-door/freemium work; see `project_front_door_test` in memory.

- [ ] **4. Build investment before asking for commitment (IKEA effect).** Let users configure or personalize something useful (a schedule, a profile, notification settings) before asking for a bigger commitment like an upgrade or a contract. Only counts if the thing they're building is actually useful to them — if it exists solely to manufacture sunk-cost guilt, it's a dark pattern, not onboarding.

- [ ] **5. Frame real risk plainly; never manufacture urgency (loss aversion).** Loss-framing is fine, and often clearer than gain-framing, when the stakes are real: "this leave request will miss the current pay period," "your session expires in 10 minutes." It is not fine to invent scarcity or urgency that doesn't exist ("only 2 spots left") to pressure a decision. This is the principle the source video's own comments flagged as the dark-pattern line — hold it to Humareso's facts-only rule.

- [ ] **6. Contrast-aware plan/price display.** When showing pricing or plan tiers, ordering and grouping change whether a price reads as expensive or reasonable (e.g., showing annual next to monthly, or Pro next to Enterprise). Never show a fabricated "was" price or a decoy tier that doesn't actually exist — contrast should clarify a real choice, not stage one.

## When to use this

Pull this list during onboarding, form, upgrade-screen, or pricing-page design work — not as a gate on every PR. Items 1–4 are close to unconditionally good; items 5–6 need the "is this real, or did we invent it" check before shipping.
