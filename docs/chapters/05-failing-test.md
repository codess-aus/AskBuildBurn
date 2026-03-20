<div class="hero">
  <img src="../../images/5.png" alt="Turn a Failing Test into a Learning Plan — using Ask Mode questions to diagnose a failing email validation test and arrive at a fix you actually understand" loading="lazy" />
</div>

<span class="chapter-badge">Chapter 5</span>

# Turn a Failing Test Into a Learning Plan

A failing test is not a failure. It's a data point.

Most developers know this intellectually. But in practice — especially when Copilot has generated the code that's supposed to make the test pass — a red test can feel like a referendum on your judgment. You accepted the suggestion. It didn't work. Now what?

Now: you learn something.

---

## The Standard Response (and Why It Falls Short)

The typical response to a failing test goes like this:

1. Read the error message
2. Look at the highlighted line
3. Make a small change
4. Run again
5. Repeat until green

This works — eventually. But it's reactive. You're chasing the error, not understanding it. And when Copilot is in the loop, you might end up asking it to fix the failure without understanding why it failed in the first place.

That's the most common way Copilot introduces technical debt: not by writing bad code, but by helping you skip the understanding.

---

## The Learning Plan Approach

Instead of treating a failing test as something to fix, treat it as a question to answer.

!!! note "The three questions"
    1. **What did I expect to happen?** (Your mental model)
    2. **What actually happened?** (The reality)
    3. **Why is there a gap?** (The learning)

The gap between 1 and 2 is where all your understanding lives. Collapsing it as fast as possible means you're optimising for green tests, not for knowledge. Sometimes that's fine. Often it's not.

---

## Using Copilot to Build the Plan, Not Just Fix the Code

Here's a workflow that keeps you learning even when you're moving fast:

**Step 1: Share the failing test and the error**
```
// This test is failing with: TypeError: Cannot read property 'id' of undefined
// at line 24 in user.service.test.ts
// Here is the test:
[paste test]
// Here is the function under test:
[paste function]
// Don't fix it yet. Explain why it's failing in plain English.
```

**Step 2: Ask for the *concept*, not just the fix**
```
// What is the underlying concept I'm missing here?
// Is this about async/await timing? Object shape? Null handling?
```

**Step 3: Attempt the fix yourself first**

Write your attempted fix. Then ask Copilot to review it — not to replace it.

**Step 4: Ask for edge cases you should test**
```
// Given this function, what are 3 edge cases I haven't tested yet?
```

This is what turns a failing test into a learning plan.

---

## What You Gain

This approach takes longer than "fix the red, move on." It gives you:

- **Deeper understanding** of the code you're shipping
- **Better intuition** for where bugs hide in similar code
- **More complete test coverage** — because edge cases surface naturally
- **More confidence** when you merge — because you actually know what you built

The compounding value of this approach is enormous. Every learning plan makes you faster *and* more accurate over time. Every shortcut makes you faster now and more fragile later.

---

## A Note on Perfectionism

This isn't a call to understand everything perfectly before merging anything. That's a different kind of burnout.

The goal is proportionality. For a one-line utility, chase the green. For a service that processes payments, take the time to understand the failure. Match your depth of investigation to your risk surface.

Copilot is great at helping you move fast. You're the one who has to decide when fast is enough.

---

[← Chapter 4: Ask Mode](04-ask-mode.md){ .md-button } &nbsp; [Next: Chapter 6 — The Million Questions Workflow →](06-million-questions.md){ .md-button }
