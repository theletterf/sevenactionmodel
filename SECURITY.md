# Security policy

This repository builds [7act.org](https://7act.org/): a static Hugo site served
by a small Cloudflare Worker. There is no account system, no user input, and no
database, so the realistic attack surface is the Worker, the build and deploy
pipeline, and the published assets.

## Reporting a vulnerability

Report privately through GitHub, not in a public issue:

1. Go to [Security advisories](https://github.com/theletterf/sevenactionmodel/security/advisories/new).
2. Describe what you found, the URL or file it affects, and how to reproduce it.
3. Include the impact you think it has, even roughly.

Expect an acknowledgement within seven days. Fixes ship to `main` and deploy
automatically, so a confirmed issue is usually resolved in the same week.
This is a single-maintainer documentation project with no bug bounty.

Please give a reasonable window to fix an issue before disclosing it publicly.

## In scope

- `worker.js`: routing, content negotiation, redirects, response headers.
- The GitHub Actions workflows in `.github/workflows/`, including anything that
  could reach the Cloudflare deploy credentials.
- Hugo templates in `layouts/` that could inject markup into a published page.
- Published assets that execute in a browser on the `7act.org` origin.
- The agent-facing artifacts: `/llms.txt`, `/model.json`, the Markdown mirrors,
  `AGENTS.md`, and `skills/`.

## Out of scope

- Missing hardening with no demonstrated impact. The gaps below are known and
  accepted; a report needs to show a concrete attack, not just name a header.
- Typos, broken links, wording, and translation errors. Open a normal issue.
- Denial of service, volumetric testing, or anything that degrades the site for
  other people. Do not run automated scanners against `7act.org`.
- Findings in Cloudflare or GitHub themselves. Report those to those vendors.
- Social engineering of the maintainer.

## Known and accepted

The Content-Security-Policy keeps `'unsafe-inline'` in `script-src`. The JSON-LD
blocks are generated per page from that page's own URL and dates, so their
hashes cannot be enumerated in a static header, and removing them would break
the structured data the site publishes for search engines and agents. Closing
this properly needs per-request nonces through `HTMLRewriter`. A report that
chains `'unsafe-inline'` to actual script execution is in scope; a report that
only observes the directive is not.

## Content trust boundary

Everything the site serves comes from this repository. Markdown content, the
data files under `data/`, and the templates are all trusted to the same degree
as a merged commit. If you find a way to get executable content published
without a maintainer merging it, that is in scope and worth reporting.
