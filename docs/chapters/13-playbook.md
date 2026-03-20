<div class="hero hero--gradient">
  <img src="../images/hero-13.svg" alt="Chapter hero: An open notebook with a structured plan and checkboxes" loading="lazy" />
  <div class="hero__overlay">
    <span class="chapter-badge">Chapter 13</span>
    <h1 class="hero__title">The Playbook</h1>
    <p class="hero__subtitle">Patterns that work — collected and ready to use</p>
  </div>
</div>

<span class="chapter-badge">Chapter 13</span>

# The Playbook

Everything in this book is building toward something actionable. This chapter collects the patterns that work — tested, refined, and ready to apply.

These are not rules. They're plays. Choose the ones that fit your situation. Build your own version. Share them with your team.

---

## Play 1: The Context Comment

Before you prompt Copilot for anything significant, write a context comment:

```typescript
// Context: TypeScript Express API using Prisma + PostgreSQL
// Pattern: Repository pattern, service layer, clean error handling
// Security: Parameterised queries required, no PII in logs
// Constraints: No new dependencies without discussion
```

This takes 30 seconds. It changes what you get.

---

## Play 2: The Pre-Merge Checklist

Before merging any AI-assisted PR:

- [ ] I have read every line of the diff
- [ ] I can explain what every changed function does
- [ ] Error handling is present and correct
- [ ] Security: no injection, no exposed secrets, proper auth checks
- [ ] Tests cover the new behaviour
- [ ] Architectural invariants are preserved
- [ ] I'd be comfortable explaining this in a production incident

---

## Play 3: The Explanation Request

After Copilot generates something you're uncertain about:

```
Explain this function in plain English.
What does each parameter do?
What does it return?
What happens if [specific input] is passed?
Are there any edge cases this doesn't handle?
```

Don't move on until you can explain it yourself.

---

## Play 4: The Alternative Request

When Copilot's first suggestion looks acceptable but you want to be sure:

```
Show me two alternative approaches to this, with their tradeoffs.
Don't just give me the code — explain when each approach is appropriate.
```

This gives you options and reasoning. You choose. You learn.

---

## Play 5: The Security Scan Prompt

Before committing any new code to a security-sensitive area:

```
Review this code for security issues. Specifically look for:
- SQL injection or similar injection vulnerabilities
- Missing input validation
- Authentication or authorisation gaps
- Sensitive data exposure
- Insecure defaults
Be specific and cite the line number for each issue found.
```

Not a replacement for your security pass, but a useful first check.

---

## Play 6: The Architecture Invariant List

Before a significant refactor:

```markdown
Architecture invariants for this module:
- All state lives in the service layer
- Controllers do not access the database directly
- All external API calls go through the adapter layer
- Error types use our ErrorHierarchy base classes
- No circular dependencies between modules
```

Share this with Copilot as constraints. Reference it in review.

---

## Play 7: The Mentor Loop Session

When you're working in unfamiliar territory:

1. Ask for a high-level explanation before any code
2. Ask for the implementation with constraints
3. Ask what could go wrong
4. Ask for edge case tests
5. Write one test yourself
6. Ask Copilot to review your test

---

## Play 8: The Weekly Audit

Once a week, 10 minutes:

- What did Copilot help with this week?
- What did I understand deeply vs. accepted without fully reading?
- What would I review differently next time?
- Was there anything I shipped that I'm still uncertain about?

This is a solo retrospective. No judgment. Just data for yourself.

---

## Play 9: The Team Agreement

For teams using Copilot together:

Agree on and document:
- Which tasks are appropriate for Agent Mode, and which require hands-on
- How AI-assisted PRs are labelled and reviewed
- What the security checklist looks like for your context
- Who to talk to when something Copilot generated doesn't seem right

Write it down. Update it quarterly.

---

## Play 10: The Burnout Check-In

Regularly ask yourself — not about Copilot, but about you:

- Am I understanding the code I'm shipping?
- Am I moving fast because I'm in flow, or because I'm avoiding something?
- Is my review process keeping pace with my generation speed?
- When did I last feel genuinely curious about a piece of code?

Curiosity is a signal. When it fades, slowness is coming.

---

These plays compound. You won't use all of them all the time. But having them available — having them as *named* practices you can reach for — means you're less likely to fall into the patterns that lead to burnout.

---

[← Chapter 12: Security](12-security.md){ .md-button } &nbsp; [Next: Chapter 14 — Burn Out Less →](14-burn-out-less.md){ .md-button }
