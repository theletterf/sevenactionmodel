---
name: seven-action-documentation
description: Create, plan, audit, restructure, or improve technical documentation using the Seven-Action Documentation Model. Use whenever a user asks to write or organize docs, identify documentation gaps, choose documentation types, improve a docs information architecture, or define documentation success metrics around what readers need to accomplish.
---

# Seven-Action Documentation

Treat documentation as a product that helps readers take actions, not as a collection of prescribed content types. Use the model to decide what a document must enable before deciding its format, outline, or framework.

## Classify the reader's goal

Identify the primary action from the reader's immediate goal. Name a secondary action only when it changes the content or navigation decision. Do not force every document to cover all seven.

| Action | Reader needs to | Common content types | Typical evidence of a gap | Useful measures |
| --- | --- | --- | --- | --- |
| Appraise (Discern) | assess the product's qualities or fit | overview, landing page, comparison | no clear positioning or comparison | conversion |
| Explore (Discover) | try it with little commitment | tutorial, quick start, guided tour, sandbox | no quick start, sandbox, or first-run path | time to first value |
| Remember (Recall) | retrieve facts, syntax, parameters, or errors | reference, glossary, API/CLI reference | scattered or unsearchable reference | reference hit rate |
| Troubleshoot (Solve) | diagnose and resolve a problem under pressure | troubleshooting guide, error reference, diagnostic flow | recurring support questions or undocumented errors | time to resolution |
| Develop (Integrate) | extend, integrate, or build on the product | how-to guide, integration guide, API reference | undocumented extension points | ecosystem growth |
| Practice (Train) | perform routine operational work | how-to guide, procedure, runbook | procedures do not cover real workflows | task success rate |
| Understand (Learn) | form a correct mental model | concept guide, explanation, glossary | readers can follow steps without understanding why | comprehension or reduced misconceptions |

Use the reader's verbs and context as the signal. For example, “Which plan fits our team?” is Appraise; “Can I try this quickly?” is Explore; “What does this flag mean?” is Remember; and “Why is this deployment failing?” is Troubleshoot.

## Produce useful documentation work

1. State the primary reader action, target reader, and moment of need. Infer them from the request when clear; otherwise ask only for missing information that would materially change the result.
2. Turn the action into an outcome the reader can achieve. Prefer observable outcomes over topics, such as “connect an existing identity provider” rather than “SSO overview.”
3. Choose a form that supports the action. Treat the common content types above as starting points, not a taxonomy to obey; select the smallest form that lets the reader achieve the outcome.
4. Draft or revise the content with the reader's questions, prerequisites, decisions, steps, examples, and validation appropriate to that action. Preserve technical truth; do not invent product capabilities, commands, metrics, or results.
5. When planning or auditing a documentation set, map each proposed page to a primary action, identify gaps and duplications, then recommend the smallest set of changes that improves coverage.

## Return a decision-oriented result

For a plan or audit, give a compact action map containing:

- the audience and moment of need;
- primary and optional secondary action;
- the proposed page or content change and why it serves that action;
- a concrete success signal or metric.

For a writing request, begin with a brief framing line that names the intended reader outcome, then deliver publication-ready content. Keep headings descriptive of reader tasks or questions. Include a next step or validation criterion where it helps the reader know they succeeded.

## Keep the model in proportion

Use existing content frameworks as implementation tools, not substitutes for reader needs. A tutorial can support Explore or Practice; a reference can support Remember or Develop; an explanation can support Understand or Appraise. Explain any non-obvious mapping. Do not claim the model is exhaustive, empirically validated, or prescriptive.
