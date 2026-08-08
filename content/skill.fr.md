---
title: "Skill de documentation à sept actions"
description: "Installez une skill d’agent pour planifier et améliorer la documentation avec le modèle à sept actions."
---

Utilisez cette skill avec Claude Code ou un autre agent pris en charge pour planifier, rédiger, auditer et réorganiser une documentation technique autour de ce que les lecteurs doivent accomplir.

## Installer pour Claude Code

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Ajoutez `--global` pour la rendre disponible dans tous les projets. La skill s’active pour la planification, la rédaction, les audits, l’architecture de l’information et les métriques de succès de la documentation. Vous pouvez aussi l’invoquer directement :

```text
Utilisez $seven-action-documentation pour auditer notre documentation d’intégration.
```

La skill aide l’agent à identifier l’action principale du lecteur, à choisir des types de contenu utiles, puis à définir un résultat et une mesure sans inventer de faits sur le produit.
