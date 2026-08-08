---
title: "Seven-Action Documentation skill"
description: "Install an agent skill for planning and improving documentation with the Seven-Action Model."
---

Use this skill with Claude Code or another supported agent to plan, write, audit, and restructure technical documentation around what readers need to accomplish.

## Install for Claude Code

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Add `--global` to make it available in every project. The skill activates for documentation planning, writing, audits, information architecture, and success metrics. You can also invoke it directly:

```text
Use $seven-action-documentation to audit our onboarding documentation.
```

The skill helps an agent identify the reader's primary action, choose useful content types, and define an outcome and measure without inventing product facts.
