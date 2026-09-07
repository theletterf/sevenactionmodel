---
title: "Skill do modelo de documentação de sete ações"
description: "Instale uma skill para agentes que ajuda a planejar e melhorar a documentação com o modelo de sete ações."
---

Use esta skill com o Claude Code ou outro agente compatível para planejar, escrever, auditar e reorganizar documentação técnica em torno do que os leitores precisam alcançar.

## Instalar para o Claude Code

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Adicione `--global` para disponibilizá-la em todos os projetos. A skill é ativada no planejamento e na escrita de documentação, em auditorias, na arquitetura de informação e na definição de métricas de sucesso. Você também pode invocá-la diretamente:

```text
Use $seven-action-documentation para auditar a nossa documentação de onboarding.
```

A skill ajuda o agente a identificar a ação principal do leitor, escolher tipos de conteúdo úteis e definir um resultado e uma medida sem inventar fatos sobre o produto.
