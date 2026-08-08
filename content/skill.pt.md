---
title: "Skill do modelo de documentação de sete ações"
description: "Instale uma skill para agentes que ajuda a planear e melhorar a documentação com o modelo de sete ações."
---

Utilize esta skill com o Claude Code ou outro agente compatível para planear, escrever, auditar e reorganizar documentação técnica em torno daquilo que os leitores precisam de alcançar.

## Instalar para o Claude Code

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Adicione `--global` para a disponibilizar em todos os projetos. A skill é ativada para planeamento e escrita de documentação, auditorias, arquitetura de informação e métricas de sucesso. Também pode invocá-la diretamente:

```text
Utilize $seven-action-documentation para auditar a nossa documentação de integração de novos utilizadores.
```

A skill ajuda um agente a identificar a ação principal do leitor, escolher tipos de conteúdo úteis e definir um resultado e uma medida sem inventar factos sobre o produto.
