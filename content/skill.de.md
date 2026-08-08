---
title: "Sieben-Aktionen-Dokumentations-Skill"
description: "Installieren Sie einen Agent-Skill, um Dokumentation mit dem Sieben-Aktionen-Modell zu planen und zu verbessern."
---

Verwenden Sie diesen Skill mit Claude Code oder einem anderen unterstützten Agenten, um technische Dokumentation anhand dessen zu planen, zu schreiben, zu prüfen und neu zu strukturieren, was Leser erreichen müssen.

## Für Claude Code installieren

```sh
npx skills add theletterf/sevenactionmodel --skill seven-action-documentation --agent claude-code
```

Fügen Sie `--global` hinzu, um ihn in jedem Projekt verfügbar zu machen. Er wird bei Dokumentationsplanung, Schreiben, Audits, Informationsarchitektur und Erfolgsmetriken aktiviert und kann mit `$seven-action-documentation` auch ausdrücklich aufgerufen werden.
