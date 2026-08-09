# AGENTS.md — Seven-Action Documentation Model

This file describes <https://7act.org/> for AI agents, and the repository that
builds it for coding agents. It is published at <https://7act.org/AGENTS.md>.

The Seven-Action Documentation Model is a descriptive model of user needs for
technical documentation. It names seven actions a reader may want to
accomplish: Appraise, Understand, Explore, Practice, Remember, Develop, and
Troubleshoot. The model describes reader intent; it does not prescribe a
content taxonomy.

- Canonical site: <https://7act.org/>
- Source essay: <https://passo.uno/seven-action-model/>
- Repository: <https://github.com/theletterf/sevenactionmodel>
- License: content CC BY 4.0, code MIT

## Getting started

Every page on the site is published in four forms at the same path:

| Artifact | Path | Media type |
| --- | --- | --- |
| HTML | `/` | `text/html` |
| Markdown mirror | `/index.md` | `text/markdown` |
| Machine-readable model | `/model.json` | `application/json` |
| Agent index | `/llms.txt` | `text/plain` |

Site-wide entry points:

- `/sitemap.md` — every page, as Markdown links, grouped by section.
- `/sitemap.xml` — the same set with `<lastmod>` dates.
- `/glossary/index.md` — definitions of the seven actions and model terms.

Start with `/llms.txt` for orientation and `/model.json` when you need the
model as data. Fetching `/` with an `Accept: text/markdown` request header
returns the Markdown mirror instead of HTML.

## Configuration

The site is available in 16 languages. English lives at the root; every other
language is served under its code, and each language has its own artifacts:

```text
https://7act.org/model.json        # English
https://7act.org/es/model.json     # Spanish
https://7act.org/ja/llms.txt       # Japanese
```

Language codes: `en`, `es`, `fr`, `it`, `pt`, `de`, `pl`, `tr`, `ru`, `ja`,
`zh-cn`, `ko`, `hi`, `ar`, `fa`, `ur`.

All AI crawlers are welcome; `robots.txt` allows them explicitly. Content is
CC BY 4.0, so quote and reuse it with attribution to Fabrizio Ferri Benedetti
and a link to <https://7act.org/>.

## Usage

`model.json` is the single source of truth. Its shape:

```json
{
  "model": { "version": "2025-01-09", "title": "…", "description": "…" },
  "actions": [
    {
      "id": "appraise",
      "verb": "Appraise",
      "alt": "Discern",
      "definition": "…",
      "description": "…",
      "signals": ["…"],
      "examples": [{ "title": "…", "url": "…" }],
      "frameworks": { "dita": ["…"], "diataxis": ["…"], "good_docs": ["…"] },
      "metric": { "name": "…", "description": "…" }
    }
  ]
}
```

The seven actions, in heptagon order:

1. **Appraise** (Discern) — judge the product's qualities and compare it to others.
2. **Understand** (Learn) — grasp the abstractions the product is built around.
3. **Explore** (Discover) — try the product with a low barrier to entry.
4. **Practice** (Train) — operate the product in daily, standard use.
5. **Remember** (Recall) — look up what cannot be memorized.
6. **Develop** (Integrate) — extend or integrate with the product.
7. **Troubleshoot** (Solve) — diagnose and resolve issues under pressure.

To apply the model to a documentation set, identify the primary action a page
serves, then check whether the whole set covers all seven. An agent skill that
encodes this workflow is at <https://7act.org/skill/>:

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

## Working on this repository

The site is Hugo (extended, pinned in `.github/workflows/`) deployed to
Cloudflare Workers.

```sh
hugo server        # local preview
hugo --minify --gc # production build into public/
```

Conventions to follow when changing the repo:

- No fact about the model may live only in a template. Verbs, definitions,
  signals, examples, frameworks, and metrics belong in `data/<lang>/model.yaml`;
  layouts render from there.
- Content prose lives in `content/`, one file per language
  (`rationale.md`, `rationale.es.md`, …). UI strings live in `i18n/<lang>.toml`.
- Adding a page means adding it in all 16 languages, or not at all.
- `worker.js` owns HTTP behavior: canonical `Link` headers, charset, and
  Markdown content negotiation. Static output belongs in Hugo, not the worker.
- CI runs a Hugo build, link checking with lychee, `html-validate`, and Vale.
  Keep all four green.
