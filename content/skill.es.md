---
title: "Habilidad de documentación de siete acciones"
description: "Instala una habilidad de agente para planificar y mejorar documentación con el modelo de siete acciones."
---

Usa esta habilidad con Claude Code u otro agente compatible para planificar, redactar, auditar y reorganizar documentación técnica según lo que los lectores necesitan lograr.

## Instalar para Claude Code

```sh
npx skills add theletterf/sevenactionmodel --skill seven-action-documentation --agent claude-code
```

Añade `--global` para usarla en todos los proyectos. Se activa para planificación, redacción, auditorías, arquitectura de información y métricas de documentación. También puedes invocarla directamente con `$seven-action-documentation`.
