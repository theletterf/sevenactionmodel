{{ with .File }}
{{ readFile (printf "content/%s" .Path) }}
{{ else }}
{{ .RawContent }}
{{ end }}
