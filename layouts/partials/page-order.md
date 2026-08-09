{{- /* Every page of the current language, in reading order: home, the essay,
     the actions index, the seven actions clockwise, glossary, skill.
     Shared by the Markdown mirrors, sitemap.md, and llms.txt so the three
     agent-facing artifacts can never disagree about what the site contains. */ -}}
{{- $modelData := default site.Data.en.model (index site.Data site.Language.Lang "model") -}}
{{- $navOrder := slice "appraise" "understand" "explore" "practice" "remember" "develop" "troubleshoot" -}}
{{- $pages := slice -}}
{{- with site.Home }}{{ $pages = $pages | append . }}{{ end -}}
{{- with site.GetPage "/rationale" }}{{ $pages = $pages | append . }}{{ end -}}
{{- with site.GetPage "/actions" }}{{ $pages = $pages | append . }}{{ end -}}
{{- range $navOrder -}}
  {{- with site.GetPage (printf "/actions/%s" .) }}{{ $pages = $pages | append . }}{{ end -}}
{{- end -}}
{{- with site.GetPage "/glossary" }}{{ $pages = $pages | append . }}{{ end -}}
{{- with site.GetPage "/skill" }}{{ $pages = $pages | append . }}{{ end -}}
{{- return $pages -}}
