{{- /* One description per page, resolved the same way everywhere: the page's
     own description, else the action's definition on action pages, else the
     model description. Returns a string. */ -}}
{{- $modelData := default site.Data.en.model (index site.Data site.Language.Lang "model") -}}
{{- $description := $modelData.model.description -}}
{{- with .Params.action -}}
  {{- $action := index (where $modelData.actions "id" .) 0 -}}
  {{- $description = $action.definition -}}
{{- end -}}
{{- with .Description }}{{ $description = . }}{{ end -}}
{{- return $description -}}
