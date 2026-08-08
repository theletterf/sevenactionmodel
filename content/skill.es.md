---
title: "Habilidad de documentación de siete acciones"
description: "Instala una habilidad de agente para planificar y mejorar documentación con el modelo de siete acciones."
---

Usa esta habilidad con Claude Code u otro agente compatible para planificar, redactar, auditar y reorganizar documentación técnica según lo que los lectores necesitan lograr.

## Instalar para Claude Code

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Añade `--global` para que esté disponible en todos los proyectos. La habilidad se activa para la planificación, la redacción, las auditorías, la arquitectura de información y las métricas de éxito de la documentación. También puedes invocarla directamente:

```text
Usa $seven-action-documentation para auditar nuestra documentación de incorporación.
```

La habilidad ayuda al agente a identificar la acción principal del lector, elegir tipos de contenido útiles y definir un resultado y una métrica sin inventar datos del producto.
