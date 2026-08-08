---
title: "Adopt"
description: "How to adopt the Seven-Action model in your documentation."
scope: "adopt"
---

The Seven-Action model is descriptive, not prescriptive. It does not tell you what to write or how to structure it. It tells you what to cover. Adopting it means auditing your docs against the seven actions and filling the gaps.

## Audit your docs

Start with an inventory. For each action, ask: does our documentation serve this need?

- **Appraise.** Can a prospect read our docs and understand what the product does, whether it fits their problem, and how it compares to alternatives — without reading marketing copy?
- **Understand.** Do we explain the abstractions the product is built on? Can a user who has operated the product explain why it works the way it does?
- **Explore.** Can a new user get to a meaningful first interaction in under five minutes? Is there a sandbox, a quick start, a playground?
- **Practice.** Are common procedures documented step by step? Are they tested against the current release?
- **Remember.** Is every parameter, error code, and configuration value searchable and structured? Can a user find a fact and get back to work in seconds?
- **Develop.** Is there a clear path for building on top of the product? Do we document extension points, APIs, and integration patterns?
- **Troubleshoot.** When something breaks, does the docs page for that error teach the user how to diagnose it, or does it just restate the error message?

## Cover the gaps

The audit will reveal gaps. Some actions will be well-served; others will be empty. Prioritize the gaps by impact. A missing Troubleshoot page for a common error is more urgent than a missing Appraise page for a mature product with an established user base. But do not neglect any action indefinitely — each one represents a real user need that, if unmet, sends the user to support, to a competitor, or to a forum where the answer may be wrong.

## Track one metric per action

The model pairs each action with a do11y metric — a documentation observability signal. Track them:

| Action | Metric |
|--------|--------|
| Appraise | Conversion from docs to product adoption |
| Understand | Share of core abstractions with a dedicated conceptual page |
| Explore | Time from first visit to a successful first interaction |
| Practice | Share of users who complete a standard procedure without support |
| Remember | Share of reference lookups that return the right page |
| Develop | Number of integrations or extensions built by users |
| Troubleshoot | Median time from symptom to a working state |

You do not need to track all seven from day one. Pick the action that hurts the most and start there. The metrics turn the model from a conceptual framework into an operational tool.

## Start small

Do not attempt a complete audit and rewrite in one pass. Pick one action. Audit it. Fill the gaps. Ship. Measure. Repeat. The model is a map, not a checklist — use it to navigate, not to score.
