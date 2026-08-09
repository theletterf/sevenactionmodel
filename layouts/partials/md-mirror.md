{{- /* The Markdown mirror of a page: machine-readable frontmatter, the page's
     own prose, and a Sitemap section pointing at every other mirror. The
     output must begin at byte 0 with `---` — keep the whitespace trims. */ -}}
{{- $modelData := default site.Data.en.model (index site.Data site.Language.Lang "model") -}}
{{- $description := partial "page-description.md" . -}}
{{- $lastmod := .Lastmod -}}
{{- if $lastmod.IsZero }}{{ $lastmod = site.Lastmod }}{{ end -}}
{{- if $lastmod.IsZero }}{{ $lastmod = now }}{{ end -}}
---
title: {{ .Title | jsonify }}
description: {{ $description | jsonify }}
doc_version: "{{ $modelData.model.version }}"
last_updated: "{{ $lastmod.UTC.Format "2006-01-02" }}"
canonical_url: "{{ .Permalink }}"
language: "{{ site.Language.LanguageCode }}"
license: "{{ site.Params.license }}"
---

# {{ .Title }}

{{ with .RawContent | strings.TrimSpace }}{{ . }}

{{ end -}}
{{ with .Params.action -}}
{{- $action := index (where $modelData.actions "id" .) 0 }}
## {{ i18n "what_user_wants" }}

{{ $action.description }}

## {{ i18n "signals_heading" }}

{{ range $action.signals }}- {{ . }}
{{ end }}
## {{ i18n "examples_heading" }}

{{ range $action.examples }}- [{{ .title }}]({{ .url }})
{{ end }}
## {{ i18n "content_types_heading" }}

- DITA: {{ delimit $action.frameworks.dita ", " }}
- Diataxis: {{ delimit $action.frameworks.diataxis ", " }}
- {{ i18n "good_docs_project" }}: {{ delimit $action.frameworks.good_docs ", " }}

## {{ i18n "metric_heading" }}

{{ $action.metric.name }} — {{ $action.metric.description }}

{{ end -}}
{{ if eq .Params.scope "glossary" -}}
{{- $navOrder := slice "appraise" "understand" "explore" "practice" "remember" "develop" "troubleshoot" }}
## {{ i18n "actions" }}

{{ range $navOrder }}{{ $action := index (where $modelData.actions "id" .) 0 -}}
- **{{ $action.verb }}** ({{ $action.alt }}): {{ $action.definition }} {{ $action.description }}
{{ end }}
{{ end -}}
## Sitemap

{{ range partial "page-order.md" . -}}
- [{{ .Title }}]({{ with .OutputFormats.Get "md" }}{{ .Permalink }}{{ end }})
{{ end }}
