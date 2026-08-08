# Seven-Action Documentation Model — site

A production static site for the Seven-Action Documentation Model. A spec for
humans and machines. One deterministic `hugo` build emits four artifact types:

- **HTML** — pretty pages
- **Markdown** — a raw mirror of every page at the same path (`index.md`)
- **`llms.txt`** — site-level, for LLM consumption
- **`model.json`** — machine-readable model, rendered from `data/model.yaml`

## Install the agent skill

Install the Seven-Action Documentation skill for Claude Code directly from this
repository:

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Add `--global` to make it available in every project. The skill activates when
you plan, write, audit, restructure, or measure technical documentation around
the needs readers are trying to satisfy. It can also be invoked explicitly:

```text
Use $seven-action-documentation to audit our onboarding documentation.
```

The [Vercel Skills CLI](https://www.skills.sh/docs/cli) also supports Codex,
Cursor, and other agents; replace `claude-code` with the relevant agent name.

## Build

```sh
hugo            # builds into public/
hugo server     # local preview at http://localhost:1313
```

Requires Hugo extended (v0.154.2). No other build-time dependencies.

## Single source of truth

`data/model.yaml` holds the model version, license, and the seven actions in
clockwise heptagon order. The action pages, the heptagon labels, and
`model.json` all render from this file. **No fact about the model lives only in
a template.** To change the model, edit this one file.

`stage` (early | mid | late) maps to the teal scale and reflects the phase of
the user's journey the vertex represents on the heptagon (top = early/initial,
bottom = late/consolidated), per the source essay's framing.

## Layout

```
data/model.yaml                 # single source of truth
content/_index.md               # home
content/actions/<id>.md          # one per action (binds to data via `action`)
content/rationale.md            # imported source essay
content/{with-diataxis,adopt,colophon,changelog}.md   # stubs
layouts/partials/heptagon.html  # computes vertex coords from data
assets/css/main.css             # one stylesheet, custom properties
static/fonts/*.woff2            # self-hosted fonts
```

## Output formats

Every page ships as HTML plus `index.md` at the same path (the passo.uno
pattern). The home page also emits `/llms.txt` and `/model.json`. Configured in
`config/_default/hugo.toml`.

## Heptagon

`layouts/partials/heptagon.html` computes vertex coordinates for a regular
heptagon with one vertex up, from the action order in the data file. Params:
`size`, `labels` (hero vs wayfinder), `active` (action id to fill). The homepage
uses the large clickable variant; action pages use the small variant with the
active vertex filled. The SVG is accessible (title, description, real links).

## Fonts

Self-hosted in `static/fonts/`:

- `zilla-slab-semibold.woff2` — headings and action verbs
- `zilla-slab-highlight.woff2` — the active action (highlighter mark)
- `google-sans-flex.woff2` — body (variable) — **PLACEHOLDER, not yet provided**
- `google-sans-code.woff2` — metadata / labels — **PLACEHOLDER, not yet provided**

Zilla Slab is downloaded from Google Fonts. **Google Sans Flex and Google Sans
Code are proprietary and not on Google Fonts — drop the real woff2 files into
`static/fonts/`.** The CSS `@font-face` rules and `font-variation-settings`
currently use placeholder axis tags (`"GRAD" 0, "ROND" -100`). Verify the axis
tags against the real fvar table before shipping:

```sh
python3 -c "from fontTools.ttLib import TTFont; f=TTFont('static/fonts/google-sans-flex.woff2'); print([(a.axisTag, a.minValue, a.maxValue) for a in f['fvar'].axes])"
```

## Deploy to Cloudflare Workers

`7act.org` is the canonical domain and is declared as a Cloudflare Worker
Custom Domain in [`wrangler.toml`](wrangler.toml). The Worker serves the Hugo
build from `public/`; `workers.dev` is disabled.

Before the first deployment:

1. Add `7act.org` as a zone in Cloudflare and change the nameservers at the
   domain registrar to the two nameservers Cloudflare assigns. Wait for the
   zone to become **Active**.
2. Create a narrowly scoped Cloudflare API token for the selected account and
   `7act.org` zone. Use Cloudflare's **Edit Cloudflare Workers** token template
   and restrict its account and zone resources to this site.
3. In GitHub repository settings, add these Actions secrets:
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_API_TOKEN`

Pushing to `main` (or running the **Deploy to Cloudflare Workers** workflow
manually) builds the site with Hugo 0.154.2 and runs `wrangler deploy`. That
deployment creates the Custom Domain's DNS record and certificate once the
zone is active. Do not commit tokens, `.dev.vars` files, or generated
`.wrangler/` files.

`www.7act.org` is intentionally not configured. If it is needed, add it as a
proxied hostname and create a Cloudflare redirect rule to
`https://7act.org/$1`, preserving `7act.org` as the sole canonical hostname.

## License

Content: CC BY 4.0. Code: MIT. See `LICENSE`.
