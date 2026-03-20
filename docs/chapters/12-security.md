<div class="hero">
  <img src="../../images/12.png" alt="Security: The Bug You Ship When You're Exhausted — how late-night deadline pressure and cognitive depletion lead to missed vulnerabilities, and how Ask Mode surfaces security risks proactively" loading="lazy" />
</div>

<span class="chapter-badge">Chapter 12</span>

# Security: The Bug You Ship When You're Exhausted

Security vulnerabilities rarely come from malice. They come from shortcuts. From "good enough for now." From "the tests pass so it's probably fine." From the brain that's been at it for ten hours and needs this to be done.

Burnout and security failures are the same problem, wearing different clothes.

---

## How Copilot Interacts with Security

Copilot is trained on the world's code — which includes a lot of insecure code. Patterns that are common in the training data appear in suggestions. Some of those patterns are insecure.

This isn't a flaw. It's a training data reality. Copilot isn't trying to introduce vulnerabilities. It's pattern-matching on what code looks like in that context — and a lot of the code out there doesn't handle security correctly.

!!! danger "Patterns to watch for in Copilot output"
    - **SQL built with string concatenation** — even when the context clearly calls for parameterised queries
    - **Hardcoded credentials** — test values that look temporary but end up in production
    - **Insufficient input validation** — treating user-provided data as safe
    - **Overly permissive CORS or CSP** — the "make it work" setting that becomes the production setting
    - **Missing authentication checks** — endpoints that assume auth happens upstream
    - **Verbose error messages** — stack traces and internal details in API responses

None of these are inevitable. All of them require active attention to catch.

---

## The Exhaustion Multiplier

Here's the dangerous combination: Copilot is fast, and fast feels like progress, and progress feels like you're on top of it, and "on top of it" is the feeling you're chasing when you're tired.

When you're exhausted, your brain rewards speed. It does not reward slowness for the sake of thoroughness. And so the tired brain is the brain most likely to accept a suggestion without reading it, merge a PR without reviewing it, and ship a vulnerability without seeing it.

Security hygiene is not just a technical practice. It's a stamina practice. The habits you build when you're fresh are the ones that protect you when you're not.

---

## Secure Patterns to Explicitly Request

Instead of waiting to catch insecurities in review, build them into your prompts:

```
// Write a function that queries the database for a user by email.
// Requirements:
// - Use parameterised queries — no string concatenation
// - Return only the fields needed: id, email, role (never password hash)
// - Handle the case where the user is not found without throwing
// - Log access attempts with correlation ID but without PII
```

When you specify security constraints in the prompt, Copilot usually respects them. The vulnerability often comes from the prompt that didn't specify.

---

## Security Review as a Separate Pass

In Chapter 10 we talked about the diff review. Security deserves a dedicated pass — separate from functionality review.

In your security pass, ask specifically:

- Is any user-provided input used without sanitisation?
- Are any secrets or credentials visible in this diff?
- Are there authentication or authorisation gaps?
- Are error responses revealing internal details?
- Are any dependencies introduced here known to be vulnerable?
- Does this endpoint expose more data than it should?

This pass doesn't take long when you're looking specifically for these things. The cost of skipping it can be enormous.

---

## Automated Security Helps, But Isn't Enough

Static analysis, secret scanning, and dependency auditing catch a category of issues. They don't catch logic flaws, authorisation gaps, or insecure design decisions. Those require a human who understands the context.

!!! note "The layered approach"
    - **Automated tooling** catches known patterns and low-hanging fruit
    - **Human review** catches logic and design issues
    - **Pen testing** catches what both miss in production

All three layers. Not one or two.

---

## The Resilience Connection

One of the quietest benefits of good security practice is the confidence it gives you.

When you know you have parameterised queries, proper authentication checks, and secret scanning in your CI pipeline — when you've done the security pass on the diff — you sleep better. Not because nothing can go wrong. But because you've done what you could.

That confidence is not arrogance. It's earned. And earned confidence is one of the better antidotes to the anxiety that drives burnout.

---

[← Chapter 11: Guardrails](11-guardrails.md){ .md-button } &nbsp; [Next: Chapter 13 — The Playbook →](13-playbook.md){ .md-button }
