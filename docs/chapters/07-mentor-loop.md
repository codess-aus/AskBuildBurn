<div class="hero">
  <img src="../../images/7.png" alt="A Mentor Loop: Ask → Understand → Experiment → Validate → Document — deconstructing Ask Mode into a repeatable learning pattern that scales human mentorship" loading="lazy" />
</div>

<span class="chapter-badge">Chapter 7</span>

# What Just Happened: A Mentor Loop

The best engineers I've worked with have this quality in common: they can explain their reasoning, not just their code.

They don't just know *what* they built. They know *why* they built it that way, what they considered and rejected, what tradeoffs they made and why. That depth of understanding is what separates code that lasts from code that gets rewritten.

Copilot can help you build that depth — if you use it as a mentor loop, not just a code generator.

---

## The Mentor Loop Defined

A mentor loop is a cycle of generation and explanation:

1. **Generate** — Ask Copilot to build something
2. **Understand** — Ask it to explain what it built and why
3. **Challenge** — Push back, ask for alternatives, question assumptions
4. **Internalise** — Restate the understanding in your own words
5. **Apply** — Use what you've learned in the next problem

This loop is different from the standard "generate, accept, move on" flow. It treats Copilot like a patient, infinitely available mentor — because that's actually what it is.

---

## Using Copilot as the Mentee

Here's the thing: you can also reverse the loop. You can teach Copilot.

Not in the sense of training a model (you're not doing that in a conversation). But in the sense of explaining your own reasoning to it and having it respond.

Rubber duck debugging is a well-known technique for exactly this reason: the act of explaining a problem out loud — even to an inanimate object — often surfaces the answer.

Copilot is a rubber duck that talks back.

```
// I'm trying to solve this problem: [description]
// My current approach is: [your approach]
// Here's my reasoning: [reasoning]
// What am I missing? What would you do differently?
```

The act of writing that prompt — formulating your reasoning clearly enough to share it — often surfaces the issue before Copilot even responds.

---

## The Senior Developer Technique

Here's a specific technique worth trying: ask Copilot to respond as a senior developer reviewing your approach.

```
Act as a senior software engineer reviewing this implementation.
Be honest about what's good, what's risky, and what you'd do differently.
Don't just validate — critique.
```

Good mentors don't just affirm. They challenge. This prompt invites that.

!!! tip "The key is in the framing"
    If you ask Copilot "is this good?", it will usually say yes (or a variant of yes).
    If you ask it "what would a senior engineer change?", it will find things to improve.
    The second question is more useful, even on genuinely good code.

---

## Mentoring Others Through What You've Learned

The mentor loop pays a dividend beyond your own understanding: it makes you a better mentor to others.

When you've gone through the cycle of generating, challenging, and internalising — when you can explain not just what but why — you can pass that on.

This is where AI assistance, used well, doesn't just make you faster. It makes your team more capable. The knowledge compounds.

---

## What Good Mentorship Looks Like in a PR

When Copilot helps you write code and you've gone through a mentor loop, your PR comments change. Instead of:

> "Used Copilot to generate this helper function."

You write:

> "This function handles the JWT edge case where the token is valid but expired. I considered using a middleware approach but chose a utility function because it's more testable. Copilot suggested caching the decoded payload, which I rejected because it would break in multi-instance deployments."

That PR comment is mentorship. It's knowledge transfer. It's yours.

---

[← Chapter 6: The Million Questions Workflow](06-million-questions.md){ .md-button } &nbsp; [Next: Chapter 8 — Agent Mode →](08-agent-mode.md){ .md-button }
