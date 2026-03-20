<div class="hero">
  <img src="../../images/4.png" alt="Ask Mode for learners — conversational AI support for concept explanations, code snippets, best practices and building confidence not dependence" loading="lazy" />
</div>

<span class="chapter-badge">Chapter 4</span>

# Ask Mode

Most developers treat Copilot like a very fast autocomplete. Type, hope, accept or reject, move on.

That's fine. It's also leaving most of the value on the table.

The developers who get the most from Copilot — the ones who genuinely accelerate without losing ownership — have shifted into what I call **Ask Mode**. They treat Copilot as a collaborator they're actively directing, not a tool they're passively using.

---

## The Difference Between Completing and Asking

When you let Copilot autocomplete, you're responding to what it thinks you want based on context. Sometimes that's right. Often it's approximate. Occasionally it's wildly wrong in a way that looks right.

When you ask — when you write a deliberate prompt, a structured comment, or a clear question in Copilot Chat — you're directing the output. You're in control of the conversation.

!!! tip "The simplest shift"
    Before typing code, write a comment describing exactly what you want. Not what you want to build — what this specific function, this specific test, this specific piece should do.

    Then read what Copilot gives you against that description. Not against your vague intention — against the thing you wrote down.

---

## Anatomy of a Good Prompt

A strong Copilot prompt has three parts:

**1. Context** — What system, language, and situation are we in?

```
// In a TypeScript Express API, using Prisma ORM and PostgreSQL
```

**2. Intent** — What should this code do?

```
// Create a middleware function that validates a JWT token from the Authorization header.
// It should attach the decoded user object to req.user.
// On invalid or missing token, return 401 with a JSON error object.
```

**3. Constraints** — What should it *not* do, or what must it respect?

```
// Do not use any external JWT libraries beyond jsonwebtoken.
// Use async/await, not callbacks.
```

Put those together, and you're far more likely to get code you can actually use.

---

## Ask Modes: A Taxonomy

There isn't one way to ask. There are several, and knowing which to use when is a skill:

| Mode | When to use | Example |
|------|------------|---------|
| **Inline completion** | You know exactly what to write, you just want it faster | Writing a known pattern in a new context |
| **Comment-directed** | You have a clear intent and want Copilot to implement it | Describing a function in comments |
| **Copilot Chat** | You have a question, need explanation, or want to iterate | "Why does this function return undefined here?" |
| **Slash commands** | Specific structured tasks | `/explain`, `/tests`, `/fix` |
| **Agent Mode** | Multi-file, multi-step tasks | Refactoring an entire module |

Most people use only the first two. The full toolkit is much richer.

---

## Asking for Explanation, Not Just Code

One of the most underused Ask Mode techniques is asking Copilot to explain what it just gave you.

```
// Explain this function in plain English. What does it return?
// What happens if the input is null?
```

This isn't admitting defeat. This is staying in the driver's seat. If Copilot's explanation doesn't match what you expected, you've caught a problem before it ships.

---

## The Ask-Review-Own Loop

Ask Mode works best as a loop:

1. **Ask** clearly and specifically
2. **Review** the output against your intent
3. **Ask again** if something is off — refine, push back, request alternatives
4. **Own** the result — test it, understand it, stand behind it

This loop takes more deliberate effort than passive autocomplete. It also produces code you actually understand. That tradeoff is worth it every time.

---

[← Chapter 3: Rule Zero](03-rule-zero.md){ .md-button } &nbsp; [Next: Chapter 5 — Turn a Failing Test →](05-failing-test.md){ .md-button }
