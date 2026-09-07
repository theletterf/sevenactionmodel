---
title: "Skill do modelo de documentação 7-Ações"
description: "Instale uma skill para agentes que ajuda a planear e melhorar a documentação com o modelo de sete ações."
---

É possível utilizar esta skill com o Claude Code ou outro agente compatível para planear, escrever, auditar e reorganizar documentação técnica em torno daquilo que os leitores precisam de alcançar.

## Instalar para o Claude Code

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

A flag `--global` instala a skill de forma invocável em todos os projetos. A skill é ativada para planeamento e escrita de documentação, auditorias, arquitetura de informação e métricas de sucesso. Também pode invocá-la diretamente:

```text
Utilize $seven-action-documentation para auditar a nossa documentação de integração de novos utilizadores.
```

A skill ajuda um agente a identificar a ação principal do leitor, escolher tipos de conteúdo úteis e definir um resultado e uma medida sem inventar factos sobre o produto.
