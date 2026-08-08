---
title: "Compétence de documentation à sept actions"
description: "Installez une compétence d’agent pour planifier et améliorer la documentation avec le modèle à sept actions."
---

Utilisez cette compétence avec Claude Code ou un autre agent pris en charge pour planifier, rédiger, auditer et réorganiser une documentation technique autour de ce que les lecteurs doivent accomplir.

## Installer pour Claude Code

```sh
npx skills add theletterf/sevenactionmodel --skill seven-action-documentation --agent claude-code
```

Ajoutez `--global` pour la rendre disponible dans tous les projets. Elle s’active pour la planification, la rédaction, les audits, l’architecture de l’information et les métriques de succès de la documentation. Vous pouvez aussi l’invoquer explicitement avec `$seven-action-documentation`.
