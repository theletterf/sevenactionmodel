---
title: "Skill per il modello di documentazione a sette azioni"
description: "Installa una skill per agenti che aiuta a pianificare e migliorare la documentazione con il modello a sette azioni."
---

Usa questa skill con Claude Code o con un altro agente compatibile per pianificare, scrivere, valutare e riorganizzare la documentazione tecnica in base a ciò che i lettori devono ottenere.

## Installa per Claude Code

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Aggiungi `--global` per renderla disponibile in ogni progetto. La skill si attiva durante la pianificazione e la scrittura della documentazione, gli audit, la progettazione dell’architettura dell’informazione e la definizione delle metriche di successo. Puoi anche invocarla direttamente:

```text
Usa $seven-action-documentation per valutare la nostra documentazione di onboarding.
```

La skill aiuta un agente a identificare l’azione principale del lettore, scegliere tipi di contenuto utili e definire un risultato e una misura senza inventare informazioni sul prodotto.
