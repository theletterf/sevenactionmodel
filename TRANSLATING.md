# Translating the Seven-Action Documentation Model

Every edition describes the same model, so a translation should preserve the meaning
and the level of detail of the English source. English is the source of truth: when a
translation and `content/*.md` / `data/en/model.yaml` disagree, the English wins.

The audience is people who write and plan software documentation. Translations should
read like technical writing in the target language, not like a literary essay about it.

## What stays in English

Leave these untranslated, in Latin script, in every locale:

| Term | Why |
| --- | --- |
| **skill** | A Claude/agent artifact installed with `npx skills add`, not a human aptitude. Decline or affix it as the target language requires — `der Skill`, `la skill`, `Skill'i`, `이 Skill은`. |
| **framework** | Diátaxis, DITA, and the like. Translating it as "model" collides with *the* model this site proposes, and the essay's argument depends on the contrast. |
| **agent** | Or the loanword your language's AI writing already uses. Avoid words whose primary sense is "spy" or "representative". |
| **onboarding** | Not "user acceptance", not "training". Use the loanword where the industry does. |
| DITA element names | `<task>`, `<concept>`, `<refsyn>` and friends are literal markup. |
| Product and page names | `Dockerfile`, `GitLab CI/CD`, `Claude Code`, `Diátaxis`, `DITA`, `API`, `UX`. |

Everything else is translated.

## Example titles

The `examples` in `data/<lang>/model.yaml` are titles of English pages. Keep them in
English so the link label matches the page it opens. Prose links inside
`content/actions/*.md` may be recast to fit the sentence — prefer
"Approval Checklist de Vercel" over a stranded English possessive like
"la Vercel's Approval Checklist".

## The model's name

Pick one rendering per language and use it in all five places: `config/_default/languages.toml`,
`data/<lang>/model.yaml`, `content/_index.<lang>.md`, the `##` heading in
`content/rationale.<lang>.md`, and `content/skill.<lang>.md`. The name must say
**seven actions** — not seven aspects, dimensions, or steps.

## Action names

The seven actions are verbs, and they render as heptagon labels. Keep them
parallel — all verbs or all verbal nouns, not a mix — and keep them short. Each
action's `alt` is a second verb, not a synonym of the first one's noun form.

## Register

One register per locale, applied across `data/`, `i18n/`, and `content/`. These render
side by side: `layouts/partials/action-page.html` puts the Markdown body and the YAML
fields on the same page, so a mismatch is visible to readers, not just to reviewers.

- Japanese: plain form (だ・である) throughout.
- Italian, Spanish, Polish: informal second person (*tu*, *ty*).
- French, German, Russian, Turkish, Hindi, Urdu: formal second person.
- Portuguese: *você*, with proclisis (*se concentra*, not *concentra-se*).
- Korean: 합니다체.
- Numbers in the model's name: one form only (`일곱 가지`, not also `7가지`). A heading
  that starts with a digit produces an invalid HTML `id`, which fails CI.

## Locale variants

`pt` is Brazilian Portuguese: *usuário*, *equipe*, *suporte*, *planejar*, *baixar*,
*configurações*, *conceitual*, *aplicativo*. The URL path stays `/pt/` and
`languageCode = "pt-BR"` carries the regional signal in `<html lang>` and `hreflang`.

`zh-cn` is Simplified Chinese and has its own path because the script differs, not just
the region.

## Typography

Use the target language's own punctuation.

- Chinese: “ ” and （ ）. Not ASCII `"`, not 『 』 — those are Traditional/Japanese convention.
- Japanese: 「 」 and （ ）. Half-width parentheses are for Latin content only.
- Persian and Urdu: zero-width non-joiner where the script needs it.
- Arabic, Persian, Urdu are right-to-left; `languageDirection = "rtl"` is set for all three.

## Before opening a pull request

```sh
hugo server     # requires Hugo Extended
```

Check that your locale's `data/<lang>/model.yaml` still has all seven actions with the
same `id` values as `data/en/model.yaml`, and that each `content/actions/<id>.<lang>.md`
title matches the `verb` for that `id`.
