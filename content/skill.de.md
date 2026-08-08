---
title: "Sieben-Aktionen-Dokumentations-Skill"
description: "Installieren Sie einen Agent-Skill, um Dokumentation mit dem Sieben-Aktionen-Modell zu planen und zu verbessern."
---

Verwenden Sie diesen Skill mit Claude Code oder einem anderen unterstützten Agenten, um technische Dokumentation danach zu planen, zu schreiben, zu prüfen und neu zu strukturieren, was Leser erreichen müssen.

## Für Claude Code installieren

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Fügen Sie `--global` hinzu, um ihn in jedem Projekt verfügbar zu machen. Der Skill wird bei Dokumentationsplanung, Schreiben, Audits, Informationsarchitektur und Erfolgsmetriken aktiviert. Sie können ihn auch direkt aufrufen:

```text
Verwende $seven-action-documentation, um unsere Onboarding-Dokumentation zu prüfen.
```

Der Skill hilft einem Agenten, die primäre Aktion des Lesers zu bestimmen, nützliche Inhaltstypen auszuwählen und ein Ergebnis sowie eine Messgröße festzulegen, ohne Produktfakten zu erfinden.
