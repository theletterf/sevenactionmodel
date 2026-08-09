{{- /* sitemap.md — the Markdown twin of sitemap.xml, one per language. */ -}}
{{- $modelData := default site.Data.en.model (index site.Data site.Language.Lang "model") -}}
{{- $lastmod := site.Lastmod -}}
{{- if $lastmod.IsZero }}{{ $lastmod = now }}{{ end -}}
---
title: {{ printf "%s — %s" (i18n "sitemap") site.Title | jsonify }}
description: {{ printf "%s (%s)" $modelData.model.description site.Language.LanguageName | jsonify }}
doc_version: "{{ $modelData.model.version }}"
last_updated: "{{ $lastmod.UTC.Format "2006-01-02" }}"
canonical_url: "{{ site.Home.Permalink }}"
language: "{{ site.Language.LanguageCode }}"
license: "{{ site.Params.license }}"
---

# {{ i18n "sitemap" }}

{{ $modelData.model.description }}

## {{ i18n "formats" }}

Every page below is published as HTML at its own URL and as a Markdown mirror
at `index.md` under the same path. Site-wide artifacts:

- [llms.txt]({{ "llms.txt" | absLangURL }}): {{ i18n "agent_index" }}
- [model.json]({{ "model.json" | absLangURL }}): {{ i18n "machine_readable_model" }}
- [AGENTS.md]({{ "AGENTS.md" | absURL }}): {{ i18n "agent_guide" }}
- [sitemap.xml]({{ "sitemap.xml" | absLangURL }}): {{ i18n "sitemap" }}

## {{ i18n "pages" }}

{{ range partial "page-order.md" . -}}
- [{{ .Title }}]({{ with .OutputFormats.Get "md" }}{{ .Permalink }}{{ end }}): {{ partial "page-description.md" . }}
{{ end }}
## {{ i18n "language" }}

{{ range site.Home.AllTranslations -}}
- [{{ .Language.LanguageName }}]({{ .Permalink }}sitemap.md)
{{ end }}
